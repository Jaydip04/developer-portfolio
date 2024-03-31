'use client'
import { memo } from 'react'
import LangTextAnimation from './LangTextAnimation'
import AppImageAnimation from './AppImageAnimation'
import { IApps } from '@/types'
import { MdOutlineOpenInNew } from 'react-icons/md'

const AppDetailsCard: React.FC<{ app: IApps }> = ({ app }) => {
  return (
    <div className="relative flex  flex-wrap justify-between overflow-hidden bg-white/50  backdrop-blur dark:bg-black/80">
      <div className="">
        <div className="flex-1 p-5">
          <a href={new URL(app?.apkLink).href} className="flex items-baseline gap-2">
            <h2 className="mb-1 items-center text-2xl font-bold capitalize">{app.name.replaceAll('-', ' ')}</h2>
            <span>
              <MdOutlineOpenInNew size={20} />
            </span>
          </a>
          <a href={new URL(app?.gitHubLink).href} className="flex items-center gap-2">
            Github Repo <MdOutlineOpenInNew size={20} />
          </a>
          <p className="opacity-80 md:line-clamp-3">{app?.description}</p>
        </div>
        <div className="mb-2 px-5">
          <div className="flex">
            <div className="flex-1">
              {/* <LangTextAnimation items={app.languages} /> */}
              <LangTextAnimation items={app.languages?.map((lang) => lang.toString())} />
            </div>
          </div>
        </div>
      </div>
      <div className="m-auto block">
        <AppImageAnimation items={app.photos} />
      </div>
    </div>
  )
}

export default memo(AppDetailsCard)
