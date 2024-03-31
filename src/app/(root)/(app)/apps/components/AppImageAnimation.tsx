'use client'
import { memo, useEffect, useState } from 'react'
import { useMount } from '@/contexts/MountContext'
import Image, { StaticImageData } from 'next/image'

const AppImageAnimation: React.FC<{ items: StaticImageData[] }> = ({ items }) => {
  const mounted = useMount()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => (index === items.length - 1 ? 0 : index + 1)), 3000)
    return () => clearTimeout(intervalId)
  }, [items])

  return (
    <>
      {mounted && (
        <div className="" style={{ width: '320px', height: '530px' }}>
          <Image src={items[index]} alt="" className="h-full w-full" />
        </div>
      )}
    </>
  )
}

export default memo(AppImageAnimation)
