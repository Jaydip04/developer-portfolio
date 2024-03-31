'use client'

import type { IEducation } from '@/types'
import React from 'react'
import Link from 'next/link'

const EducationItem: React.FC<{ education: IEducation }> = ({ education }) => {
  return (
    <Link href={'#'} className="block bg-white/50 px-3 py-5 backdrop-blur dark:bg-black/80 md:px-5">
      <h3 className="text-lg md:text-xl">{education?.degree}</h3>
      <div>
        <p className="">
          <span className="dark  pr-1 text-sm">{education.name} </span> |
          <span className="pl-1 text-sm opacity-60 dark:text-neutral-400">{education.passingDate}</span>
        </p>
        <p className="text-sm opacity-60 dark:text-neutral-400">{education.passingMark}</p>
      </div>
    </Link>
  )
}

export default EducationItem
