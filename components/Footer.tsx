import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full mn-[100px] pb-10' id='contact'>
        <div className='flex flex-col items-center'>
            <h1 className='heading lg-max-w-[45vw]'>
                Ready to <span className='text-purple'> Reach out ? </span>
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me today for a potential job opportunity :) .</p>
            <a href='mailto:raedbaffoun90@gmail.com'>
                <MagicButton title='let us get in touch' icon={<FaLocationArrow />} position='right'>

                </MagicButton>
            </a>
        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Raed Baffoun</p>
            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile)=>(
                    <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                        <img src={profile.img} alt="profile" width={20} height={20} />
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer
