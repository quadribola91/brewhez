import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us - Coffee Shop</title>
        <meta name="description" content="Learn more about our coffee shop and amazing team." />
      </Head>

      <main className="px-6 py-12 max-w-5xl mx-auto">
        {/* Company Description */}
        <section aria-labelledby="about-heading" className="mb-12">
          <h1 id="about-heading" className="text-4xl font-bold mb-4">About Our Coffee Shop</h1>
          <p className="text-lg text-gray-700">
            We’re passionate about coffee. At our cozy little shop, we serve only the finest beans roasted to perfection.
            Our mission is to deliver warmth in every cup while building a community that connects people over great coffee.
          </p>
        </section>

        {/* Team Section */}
        <section aria-labelledby="team-heading">
          <h2 id="team-heading" className="text-3xl font-semibold mb-8">Meet the Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Example Team Member */}
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl shadow p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img src={member.image} alt={member.name} className="w-24 h-24 mx-auto rounded-full mb-4 object-cover" />
                <h3 className="text-xl font-medium">{member.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  {member.socials.twitter && (
                    <a href={member.socials.twitter} aria-label="Twitter" className="text-blue-400 hover:text-blue-600">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  )}
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin} aria-label="LinkedIn" className="text-blue-700 hover:text-blue-900">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  )}
                  {member.socials.github && (
                    <a href={member.socials.github} aria-label="GitHub" className="text-gray-800 hover:text-black">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

// Team Data (Reusable / Maintainable)
const teamMembers = [
  {
    name: 'Quadri Bola',
    role: 'Founder & CEO',
    image: '/images/aaa.jpg', // Add image to public/images
    socials: {
      twitter: 'https://twitter.com/quadri',
      linkedin: 'https://linkedin.com/in/quadri',
      github: 'https://github.com/quadri'
    }
  },
  {
    name: 'Jane Doe',
    role: 'Head of Coffee',
    image: '/images/aaa.jpg',
    socials: {
      twitter: '',
      linkedin: 'https://linkedin.com/in/janedoe',
      github: ''
    }
  },
  {
    name: 'Mark Smith',
    role: 'Lead Barista',
    image: '/images/aaa.jpg',
    socials: {
      twitter: '',
      linkedin: '',
      github: 'https://github.com/marksmith'
    }
  }
]
