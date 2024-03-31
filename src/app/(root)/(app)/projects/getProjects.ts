import { IRepository } from '@/types'
import timeFromNow from '@/utils/time-from-now'
import 'server-only'

const username = process.env.NEXT_PUBLIC_GH_USERNAME || 'Jaydip04'
const repositoriesUrl = `https://api.github.com/users/${username}/repos?sort=updated&visibility=public&affiliation=owner`

const fetchOptions: RequestInit = {
  method: 'GET',
  headers: {
    Accept: 'application/vnd.github+json',
    Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_GH_API_KEY,
    'X-GitHub-Api-Version': '2022-11-28',
  },
  next: { revalidate: 60 * 60 * 24 },
}

// const getProjects = async () => {
//   let repositories = await fetch(repositoriesUrl, fetchOptions).then((res) => res.json() as Promise<any[]>)
//   if (repositories?.length > 0) {
//     repositories = repositories?.filter((r) => r?.languages_url && r?.description)
//     const promises = repositories?.map(async (repo) => {
//       const data = await fetch(repo.languages_url, fetchOptions).then((res) => res.json() as Promise<{ [key: string]: number }>)

//       const names = Object.keys(data)
//       const languages: { name: string; size: number }[] = []
//       let total: number = 0
//       for (let name of names) total += data[name]
//       for (let name of names) {
//         languages.push({
//           name,
//           size: (data[name] / total) * 100,
//         })
//       }

//       const commits = await fetch(`https://api.github.com/repos/${repo.full_name}/commits?per_page=1`, fetchOptions).then(
//         (res) => res.json() as Promise<[any]>,
//       )

//       if (commits?.length > 0) {
//         const repository: IRepository = {
//           id: repo.id,
//           node_id: repo.node_id,
//           name: repo.name,
//           full_name: repo.full_name,
//           description: repo.description,
//           html_url: repo.html_url,
//           stargazers_url: repo.stargazers_url,
//           forks_url: repo.forks_url,
//           homepage: repo.homepage,
//           license: repo.license,
//           stargazers_count: repo.stargazers_count,
//           watchers_count: repo.watchers_count,
//           forks_count: repo.forks_count,
//           created_at: timeFromNow(repo.created_at),
//           updated_at: timeFromNow(repo.updated_at),
//           pushed_at: timeFromNow(repo.pushed_at),
//           last_commit_at: timeFromNow(commits[0]?.commit?.committer?.date),
//           last_commit_date: commits[0]?.commit?.committer?.date,
//           topics: repo.topics,
//           languages: languages,
//         }
//         return repository
//       }
//     })

//     const data = (await Promise.all(promises)).sort((a, b) => {
//       const dateA = new Date(a ? a?.last_commit_date : new Date())
//       const dateB = new Date(b ? b?.last_commit_date : new Date())
//       // @ts-expect-error
//       return dateB - dateA
//     })
//     return data || []
//   }
// }

const getProjects = async (): Promise<IRepository[]> => {
  let repositories = await fetch(repositoriesUrl, fetchOptions).then((res) => res.json() as Promise<any[]>)
  if (repositories?.length > 0) {
    repositories = repositories?.filter((r) => r?.languages_url && r?.description)
    const promises = repositories?.map(async (repo) => {
      const data = await fetch(repo.languages_url, fetchOptions).then((res) => res.json() as Promise<{ [key: string]: number }>)

      const names = Object.keys(data)
      const languages: { name: string; size: number }[] = []
      let total: number = 0
      for (let name of names) total += data[name]
      for (let name of names) {
        languages.push({
          name,
          size: (data[name] / total) * 100,
        })
      }

      const commits = await fetch(`https://api.github.com/repos/${repo.full_name}/commits?per_page=1`, fetchOptions).then(
        (res) => res.json() as Promise<[any]>,
      )

      if (commits?.length > 0) {
        const repository: IRepository = {
          id: repo.id,
          node_id: repo.node_id,
          name: repo.name,
          full_name: repo.full_name,
          description: repo.description,
          html_url: repo.html_url,
          stargazers_url: repo.stargazers_url,
          forks_url: repo.forks_url,
          homepage: repo.homepage,
          license: repo.license,
          stargazers_count: repo.stargazers_count,
          watchers_count: repo.watchers_count,
          forks_count: repo.forks_count,
          created_at: timeFromNow(repo.created_at),
          updated_at: timeFromNow(repo.updated_at),
          pushed_at: timeFromNow(repo.pushed_at),
          last_commit_at: timeFromNow(commits[0]?.commit?.committer?.date),
          last_commit_date: commits[0]?.commit?.committer?.date,
          topics: repo.topics,
          languages: languages,
        }
        return repository
      } else {
        return null // Return null if commits are empty
      }
    })

    const data = (await Promise.all(promises)).filter((item) => item !== null) as IRepository[]
    return data || []
  }
  return [] // Return an empty array if there are no repositories
}

export default getProjects
