import type { Metadata } from 'next'
import getProjects from './getProjects'
import RepositoryCard from './components/RepositoryCard'
import PageTitle from '../components/PageTitle'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Projects - Jaydip Tank',
  openGraph: {
    title: 'Projects - Jaydip Tank',
    url: '/projects',
  },
  alternates: {
    canonical: '/projects',
  },
}

export default async function ProjectsPage() {
  let repositories = await getProjects()
  if (repositories && repositories?.length > 0) {
    return (
      <>
        <PageTitle title="Projects" />
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {repositories?.map((repo, i) => <RepositoryCard key={i} repo={repo} />)}
        </div>
      </>
    )
  } else if (repositories === undefined) {
    // Handle undefined case
    return (
      <>
        <PageTitle title="Projects" />
        <h1>Loading...</h1>
      </>
    )
  } else {
    return (
      <>
        <PageTitle title="Projects" />
        <h1>No Project Found</h1>
      </>
    )
  }
}
