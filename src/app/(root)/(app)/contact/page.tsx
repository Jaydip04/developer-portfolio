import type { Metadata } from 'next'
import { FORMSPREE_KEY, SOCIALS } from '@/constans/common'
import ContactForm from './components/ContactForm'
import PageTitle from '../components/PageTitle'

export const metadata: Metadata = {
  title: 'Contact - Jaydip Tank',
  openGraph: {
    title: 'Contact - Jaydip Tank',
    url: '/contact',
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <PageTitle title="Contact" />
      <div className="flex flex-col lg:flex-row">
        <div className="mb-4 w-full text-center lg:w-[480px] lg:text-left">
          <div className="mb-8">
            <h2 className="mb-3 text-lg font-bold">STREET ADDRESS</h2>
            <p className="text-sm leading-5">
              Sathvara Socity,
              <br /> Railway Station opp,
              <br /> Dhandhuka,
              <br /> Ahmedabad, Gujarat, India 382460
            </p>
          </div>
          <div className="mb-8">
            <h2 className="mb-3 text-lg font-bold">EMAIL ADDRESS</h2>
            <p className="text-sm leading-5">
              <a href={SOCIALS.Mail} rel="noopener" className="hover:text-yellow-600">
                jaydiptank2004@gmail.com
              </a>
            </p>
          </div>
          <div className="mb-8">
            <h2 className="mb-3 text-lg font-bold">MOBILE PHONE</h2>
            <p className="text-sm leading-5">
              <span>Call: </span>
              <a href={SOCIALS.Phone} target="_blank" rel="noopener" className="hover:text-yellow-600">
                +91 7623047611
              </a>
              <br />
              <span>WhatsApp: </span>
              <a href={SOCIALS.WA} target="_blank" rel="noopener" className="hover:text-yellow-600">
                +91 7623047611
              </a>
            </p>
          </div>
        </div>
        <div className="lg:flex-1">
          <ContactForm formspreeKey={FORMSPREE_KEY} />
        </div>
      </div>
    </>
  )
}
