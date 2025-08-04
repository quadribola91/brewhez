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

      <main className="px-6 py-16 max-w-6xl mx-auto">
        {/* About Section */}
        <section className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6 p-3 mt-4">About Our Coffee Shop</h1>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto p-8">
            We're passionate about brewing joy in every cup. Our coffee shop is more than just beans and brews— its a community hub where people connect, relax, and recharge. Every latte, espresso, and smile is crafted with care.
          </p>
        </section>

        {/* Meet the Team */}
        <section>
          <h2 className="text-4xl font-semibold text-center mb-12 mt-8 p-2">Meet the Team</h2>
          <div className="flex flex-row-1 sm:grid-row-2 md:flex-row-3 gap-10 p-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full mb-4 object-cover shadow"
                />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  {member.socials.twitter && (
                    <a href={member.socials.twitter} aria-label="Twitter" className="text-blue-400 hover:text-blue-600">
                      <FontAwesomeIcon icon={faTwitter} size="lg" />
                    </a>
                  )}
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin} aria-label="LinkedIn" className="text-blue-700 hover:text-blue-900">
                      <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </a>
                  )}
                  {member.socials.github && (
                    <a href={member.socials.github} aria-label="GitHub" className="text-gray-800 hover:text-black">
                      <FontAwesomeIcon icon={faGithub} size="lg" />
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

// Team Data
const teamMembers = [
  {
    name: 'Quadri Bola',
    role: 'Founder & CEO',
    image: '/images/aaa.jpg',
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
          twitter: 'https://twitter.com/jandoe',
      linkedin: 'https://linkedin.com/in/jandoe',
      github: 'https://github.com/jandoe'
    }
  },
  {
    name: 'Mark Smith',
    role: 'Lead Barista',
    image: '/images/aaa.jpg',
    socials: {
      twitter: 'https://twitter.com/marksmith',
      linkedin: 'https://linkedin.com/in/marksmith',
      github: 'https://github.com/marksmith'
    }
  }
]
