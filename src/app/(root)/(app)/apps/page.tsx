import type { Metadata } from 'next'
import PageTitle from '../components/PageTitle'
import { APPSLIST } from '@/constans/common'
import AppDetailsCard from './components/AppDetailsCard'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Apps - Jaydip Tank',
  openGraph: {
    title: 'Apps - Jaydip Tank',
    url: '/apps',
  },
  alternates: {
    canonical: '/apps',
  },
}

export default async function Apps() {
  return (
    <>
      <PageTitle title="Apps" />
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">{APPSLIST?.map((app, i) => <AppDetailsCard key={i} app={app} />)}</div>
    </>
  )
}
