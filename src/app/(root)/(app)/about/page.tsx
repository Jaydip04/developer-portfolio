import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Jaydip from '@/assets/My Photo.jpg'
import { RESUME_URL } from '@/constans/common'
import PageTitle from '../components/PageTitle'

export const metadata: Metadata = {
  title: 'About - Jaydip Tank',
  openGraph: {
    title: 'About - Jaydip Tank',
    url: '/about',
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <PageTitle title="About" />
      <div className="md:flex">
        <div className="mb-5 md:w-56">
          <Image src={Jaydip} alt="Foto Jaydip Tank" className="block w-full" placeholder="blur" />
        </div>
        <div className="md:flex-1 md:pl-6">
          <h2 className="mb-2 text-xl font-bold">I’m Jaydip Tank</h2>
          <div className="mb-6">
            <p className="mb-1">
              Android Developer based in Ahemedabad, Gujrat. <br />I try my best to make the code I write easy to read and understand.
            </p>
          </div>
          <h2 className="mb-2 text-xl font-bold">Objective</h2>
          <div className="mb-6">
            <p className="mb-1">
              As a beginner Android developer, my objective is to leverage my passion for mobile technology and programming skills to
              contribute to innovative and user-friendly Android applications. I am to gain hands-on experience in the entire app
              development lifecycle, from conceptualization and design to implementation and testing. My goal is to continuously enhance my
              proficiency in Android development by staying updated on the latest industry trends, best practices, and emerging
              technologies. I am eager to collaborate with experienced developers, learn from their expertise, and make meaningful
              contributions to the dynamic world of mobile app development
              <br />I try my best to make the code I write easy to read and understand.
            </p>
          </div>
          <h2 className="mb-2 text-xl font-bold">Tech i love</h2>
          <div className="mb-6">
            <p className="mb-1">Java, Core Java, Android, XML, Android, Firebase.</p>
          </div>
          <a
            download
            target="_blank"
            rel="nofollow"
            href={RESUME_URL}
            className="mr-3 inline-block bg-white px-5 py-3 hover:bg-black hover:text-white dark:bg-black dark:hover:bg-white dark:hover:text-black"
          >
            Resume
          </a>
          <Link
            href="/contact"
            rel="nofollow"
            className="inline-block bg-white px-5 py-3 hover:bg-black hover:text-white dark:bg-black dark:hover:bg-white dark:hover:text-black"
          >
            Contact me
          </Link>
        </div>
      </div>
    </>
  )
}
