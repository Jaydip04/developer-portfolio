import { StaticImageData } from 'next/image'
import { Url } from 'url'

export interface IRepository {
  id: number
  node_id: string
  name: string
  full_name: string
  description: string
  html_url: string
  stargazers_url: string
  forks_url: string
  homepage?: string
  stargazers_count: number
  watchers_count: number
  forks_count: number
  created_at: string
  updated_at: string
  pushed_at: string
  last_commit_at: string
  last_commit_date: Date
  languages: { name: string; size: number }[]
  topics: string[]
  license?: { key: string; name: string; spdx_id: string; url: string; node_id: string }
}

export interface IMetadata {
  title: string
  publishedAt: string
  summary: string
}

export interface IEducation {
  name: String
  passingDate: String
  passingMark: String
  degree: String
}

export interface ISkills {
  name: String
  Icon: any
  className: String
  color: String
}

export interface IApps {
  name: string
  description: string
  languages: string[]
  apkLink: string
  gitHubLink: string
  photos: StaticImageData[]
}
