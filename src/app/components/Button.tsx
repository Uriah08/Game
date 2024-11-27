import clsx from 'clsx'
import React, { ReactNode } from 'react'

interface Props {
    id: string
    title: string
    leftIcon?: ReactNode
    rightIcon?: ReactNode
    containerClass: string
}

const Button = ({ id, title, leftIcon, rightIcon, containerClass } : Props) => {
  return (
    <button id={id} className={clsx(`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`)}>
        {leftIcon}
        <span className='relative overflow-hidden font-general text-xs uppercase'>
            <div>
                {title}
            </div>
        </span>
        {rightIcon}
    </button>
  )
}

export default Button