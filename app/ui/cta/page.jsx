import { IconBroadcast, IconFingerprintScan, IconShieldCheck } from '@tabler/icons-react';

const page = () => {
    return (
        <div className='h-screen w-screen flex justify-center items-center bg-black overflow-hidden relative'>
            <div className='absolute top-0 h-[90vh] w-full bg-linear-to-b from-neutral-700/80 bg-transparent mask-b-from-10%'></div>
            <div className='absolute bottom-0 h-[40vh] w-full bg-red-500/30 mask-t-from-10%'></div>
            <div className='relative z-50 flex flex-col items-center'>
                <div className='w-fit bg-black py-1 px-3 rounded-full flex items-center justify-center gap-2.5'><div className='size-2 rounded-full bg-orange-500'></div><Badge /></div>
                <h1 className='mt-5 md:text-7xl text-5xl font-medium tracking-tight leading-tight bg-linear-to-t from-neutral-600  via-neutral-100 bg-clip-text text-white/20'>Start Listing Now</h1>
                <div className='bg-neutral-800 py-2 px-5 rounded-full flex items-center gap-5 mt-5'>
                    <div className='text-neutral-200 flex items-center gap-2 font-medium'><div><IconBroadcast className='text-neutral-200 size-4' /></div>Accessible</div>
                    <div className='text-neutral-200 flex items-center gap-2 font-medium'><div><IconFingerprintScan className='text-neutral-200 size-4' /></div>Reliable</div>
                    <div className='text-neutral-200 flex items-center gap-2 font-medium'><div><IconShieldCheck className='text-neutral-200 size-4' /></div>Protected</div>
                </div>
                <div className='text-neutral-400 text-xl md:max-w-md max-w-sm text-center leading-tight mt-7'>Take control of your listings, transactions, and growth with our intuitive platform.</div>
                <div className='mt-14 flex gap-3 md:flex-row flex-col items-center justify-center'>
                    <input className='placeholder:text-neutral-400 py-2 px-4 border border-neutral-600/50 rounded-lg md:w-60 bg-white/15 w-full' placeholder='Work Email' />
                    <button className='bg-orange-600 border border-orange-600/50 inset-shadow-sm inset-shadow-amber-800/50 py-2 px-4 rounded-lg md:w-40 text-white font-medium w-full'>Get Early Access</button>
                </div>
            </div>
        </div>
    )
}

export default page

const Badge = () => {
    return (
        <div className='text-medium text-sm bg-linear-to-r from-orange-500 via-pink-200 bg-clip-text text-white/20'>Sign up for SaaS Pro today</div>
    )
}