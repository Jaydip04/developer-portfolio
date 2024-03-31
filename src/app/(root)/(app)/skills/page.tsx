import type { Metadata } from 'next'
import PageTitle from '../components/PageTitle'
import SkillItem from './components/SkillItem'
import { TechStackData } from '@/constans/common'

export const metadata: Metadata = {
  title: 'Skills - Jaydip Tank',
  openGraph: {
    title: 'Skills - Jaydip Tank',
    url: '/skills',
  },
  alternates: {
    canonical: '/skills',
  },
}

export default async function EducationPage() {
  return (
    <>
      <PageTitle title="Skills" />
      <ul className="flex flex-row flex-wrap gap-10">
        {TechStackData?.map((skill, index) => (
          <li key={index}>
            <SkillItem skill={skill} />
          </li>
        ))}
      </ul>
    </>
  )
}
