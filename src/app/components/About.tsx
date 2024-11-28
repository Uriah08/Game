"use client"

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import Image from 'next/image'
import React from 'react'

import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from './AnimatedTitle'

const About = () => {
    useGSAP(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
            const clipAnimation = gsap.timeline({
                scrollTrigger: {
                    trigger: '#clip',
                    start: 'center center',
                    end: '+=800 center',
                    scrub: 0.5,
                    pin: true,
                    pinSpacing: true
                }
            })
            clipAnimation.to('.mask-clip-path',{
                width: '100vw',
                height: '100vh',
                borderRadius: 0
            })
        }
    })
  return (
    <div id='about' className='min-h-screen w-screen'>
        <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
            <h2 className='font-general text-sm uppercase md:text-[16px]'>
                Welcome to Zenrty
            </h2>
            <AnimatedTitle title='Disc<b>o</b>ver the world&apos;s l<b>a</b>rgest shared adventure' containerClass='mt-5 !text-black !text-center'/>
            <div className='about-subtext'>
                <p>The Game of Games begins-your life, now an epic MMORPG</p>
                <p>Zentry unites ebery player from countless games and platforms</p>
            </div>
        </div>
        <div className='h-dvh w-screen' id='clip'>
            <div className='mask-clip-path about-image'>
                <Image src={'/img/about.webp'} width={3200} height={1800} alt='about-image' className='absolute left-0 top-0 size-full object-cover'/>
            </div>
        </div>
    </div>
  )
}

export default About