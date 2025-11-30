import { ArrowRight, Copy, CornerUpRight, Menu, MessageSquareMore, SquareArrowOutUpRight, X } from 'lucide-react'
import React from 'react'

const navItems = [
    {name: "Share", icon: <CornerUpRight size={14} />},
    {name: "Copy to clipboard", icon: <Copy size={14} />},
    {name: "Ask", icon: <MessageSquareMore size={14} />},
    {name: "Summarize", icon: <Menu size={14} />},
    {name: "Open", icon: <SquareArrowOutUpRight size={14} />}
]

const Page = () => {
  return (
    <div className='min-h-screen w-screen flex justify-center items-center bg-neutral-100 md:px-0 px-5'>
        <div className='card w-md bg-white h-fit rounded-lg pt-4 flex flex-col'>
            <div className='capitalize text-neutral-400 font-medium tracking-tight text-xs mb-2 px-6'>actions</div>
            <div className='border-b border-b-neutral-200 pb-2'>
                {navItems.map((item, index) => (
                    <div key={index} className='flex flex-col px-2'>
                        <div className='group py-2 px-4 flex items-center justify-between cursor-pointer hover:bg-neutral-200/50 ease-out transition-all duration-250 rounded'>
                            <div className='flex items-center space-x-3'>
                                <div>{item.icon}</div>
                                <div className='text-sm font-medium'>{item.name}</div>
                            </div>
                            <div>
                                <ArrowRight size={14} className='text-neutral-300 group-hover:text-black ease-out transition-all duration-200' />
                            </div>
                        </div>    
                    </div>
                ))}
            </div>
            <div className='flex justify-between items-center px-6 py-4'>
                <div className='flex items-center space-x-3'>
                    <div className='size-7 bg-blue-600 rounded'></div>
                    <div className='text-sm font-medium'>yest.pdf</div>
                </div>
                <div>
                    <X size={14} className='text-black cursor-pointer' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page