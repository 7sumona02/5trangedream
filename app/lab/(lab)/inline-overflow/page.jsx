'use client'
import { Ellipsis, X } from 'lucide-react'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Inconsolata } from 'next/font/google'

const inconsolata = Inconsolata({
  weight: '400',
  subsets: ['latin'],
})

const Page = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:min-h-screen min-h-dvh w-screen flex justify-center items-center bg-neutral-50">
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="w-fit bg-neutral-200/50 border border-neutral-200 p-3 rounded-3xl flex items-center space-x-2"
      >
        {/* Static buttons */}
        <motion.div layout className="bg-white px-3 py-2 rounded-xl cursor-pointer font-medium shrink-0">
          Save
        </motion.div>
        <motion.div layout className="bg-white px-3 py-2 rounded-xl cursor-pointer font-medium shrink-0">
          Copy
        </motion.div>

        {/* More section */}
        <div className="flex items-center space-x-2">
          <AnimatePresence mode="popLayout">
            {open && (
              <motion.div
                key="actions"
                layout
                initial={{ opacity: 0, x: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: 10, filter: "blur(8px)" }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="flex items-center space-x-2"
              >
                <div className="bg-white px-3 py-2 rounded-xl cursor-pointer font-medium shrink-0">
                  Share
                </div>
                <div className="bg-white px-3 py-2 rounded-xl cursor-pointer font-medium shrink-0">
                  Delete
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle button morphs smoothly */}
          <motion.div
            layoutId="more"
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="bg-white p-2 rounded-xl cursor-pointer flex items-center justify-center"
            onClick={() => setOpen(!open)}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                whileHover={{opacity: 0.4}}
                transition={{duration: 0.25}}
                  key="close"
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span
                whileHover={{opacity: 0.4}}
                transition={{duration: 0.25}}
                  key="open"
                >
                  <Ellipsis size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>

      <div className={`${inconsolata.className} uppercase text-sm truncate text-neutral-700 absolute top-[26vh]`}>inline overflow interaction</div>
      <div className='h-20 w-[1.2px] bg-neutral-400 absolute top-[30vh]'></div>
    </div>
  )
}

export default Page
