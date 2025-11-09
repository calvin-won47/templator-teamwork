
import React from 'react'
import { Users, Award, Globe, Heart } from 'lucide-react'
import { useConfig } from '../contexts/ConfigContext'

export default function AboutPage() {
  const { content } = useConfig()
  const heroTitle =
    content?.about?.heroTitle ?? "We're on a mission to help teams work better together"
  const heroSubtitle =
    content?.about?.heroSubtitle ??
    "Since 2007, we've been building tools that help teams collaborate, communicate, and deliver exceptional results."
  const stats = [
    { number: '50,000+', label: 'Teams worldwide' },
    { number: '2M+', label: 'Projects completed' },
    { number: '15+', label: 'Years of experience' },
    { number: '99.9%', label: 'Uptime guarantee' }
  ]

  const team = [
    {
      name: 'Peter Coppinger',
      role: 'CEO & Co-founder',
      image: 'https://picsum.photos/300/300?random=ceo',
      bio: 'Peter founded Teamwork with a vision to help teams collaborate better and achieve more together.'
    },
    {
      name: 'Dan Mackey',
      role: 'CTO & Co-founder',
      image: 'https://picsum.photos/300/300?random=cto',
      bio: 'Dan leads our technical vision and ensures Teamwork remains at the forefront of innovation.'
    },
    {
      name: 'Sarah Mitchell',
      role: 'VP of Product',
      image: 'https://picsum.photos/300/300?random=vp',
      bio: 'Sarah drives product strategy and ensures we build features that truly matter to our users.'
    },
    {
      name: 'James O\'Sullivan',
      role: 'VP of Engineering',
      image: 'https://picsum.photos/300/300?random=eng',
      bio: 'James leads our engineering team in building scalable, reliable software that teams love to use.'
    }
  ]

  const values = [
    {
      icon: Users,
      title: 'Customer First',
      description: 'Everything we do is focused on helping our customers succeed and achieve their goals.'
    },
    {
      icon: Heart,
      title: 'Passion for Excellence',
      description: 'We\'re passionate about building the best possible product and delivering exceptional experiences.'
    },
    {
      icon: Globe,
      title: 'Global Mindset',
      description: 'We think globally and build products that work for teams around the world.'
    },
    {
      icon: Award,
      title: 'Continuous Innovation',
      description: 'We\'re always looking for new ways to improve and innovate in the project management space.'
    }
  ]

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{heroTitle}</h1>
          <p className="text-xl text-gray-600">{heroSubtitle}</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our story
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Teamwork was founded in 2007 in Cork, Ireland, by Peter Coppinger and Dan Mackey. 
                  What started as a small web design agency quickly evolved into something much bigger 
                  when they realized the project management tools available weren't meeting their needs.
                </p>
                <p>
                  Frustrated by the lack of intuitive, powerful project management software, 
                  they decided to build their own. That decision led to the creation of Teamwork, 
                  a platform designed by project managers, for project managers.
                </p>
                <p>
                  Today, Teamwork is used by over 50,000 teams worldwide, from small startups 
                  to Fortune 500 companies. We're proud to be helping teams collaborate better 
                  and achieve more together.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://picsum.photos/600/400?random=office"
                alt="Teamwork office in Cork, Ireland showing modern workspace with collaborative areas and team members working together"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet our leadership team
            </h2>
            <p className="text-xl text-gray-600">
              The people behind Teamwork's success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role} at Teamwork`}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join our team
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            We're always looking for talented people who share our passion for 
            helping teams work better together.
          </p>
          <button className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            View open positions
          </button>
        </div>
      </section>
    </div>
  )
}
