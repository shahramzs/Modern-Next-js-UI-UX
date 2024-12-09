import React from 'react'
import { Button } from './ui/moving-border'
import { ButtonsCard } from './ui/tailwindcss-buttons'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data/Index'

const Footer = () => {
  return (
    <footer className='w-full pb-10 mb-[100px] md:mb-1' id='contact'>
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>Ready to take <span className='text-purple'>your</span>digital oresence to the next level?</h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me today and let's discuss how I can help you achieve your goals.</p>
            <a href='mailto:shahram.zarie.sarabi@gmail.com'>
                <ButtonsCard
                 title='Let&apos; get in touch'
                 icon={<FaLocationArrow/>}
                 position='right'/>
            </a>
        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Shahram.zs</p>
            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((item,i)=>(
                    <div key={i} className='w-10 h-10  cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border-black-300'>
                        <img src={item.img} alt={item.img} width={20} height={20}/>
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer