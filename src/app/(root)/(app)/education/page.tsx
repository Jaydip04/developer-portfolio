import type { Metadata } from 'next'
import PageTitle from '../components/PageTitle'
import { EDUCATIONS } from '@/constans/common'
import EducationItem from './components/EducationItem'

export const metadata: Metadata = {
  title: 'Education - Jaydip Tank',
  openGraph: {
    title: 'Education - Jaydip Tank',
    url: '/education',
  },
  alternates: {
    canonical: '/education',
  },
}

export default async function EducationPage() {
  return (
    <>
      <PageTitle title="Education" />
      <ul className="grid grid-cols-1 gap-3 md:mb-5">
        {EDUCATIONS?.map((education, index) => (
          <li key={index}>
            <EducationItem education={education} />
          </li>
        ))}
      </ul>
    </>
  )
}
