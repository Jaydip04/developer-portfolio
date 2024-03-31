'use server'

import type { ISkills } from '@/types'
import React from 'react'
import Link from 'next/link'

const SkillItem: React.FC<{ skill: ISkills }> = ({ skill }) => {
  let { name, Icon } = skill
  return (
    <Link href={'#'} className="relative flex flex-col items-center  justify-center rounded-xl border-2 border-white p-5">
      <Icon size={100} />
      <span className="absolute bottom-1 left-0 right-0 block text-center text-[0.5em] text-xl md:relative md:bottom-0 md:mt-1">
        {name}
      </span>
    </Link>
  )
}

export default SkillItem
