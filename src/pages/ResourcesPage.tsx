
import React from 'react'
import { Calendar, User, ArrowRight, Download, Play } from 'lucide-react'
import { useConfig } from '../contexts/ConfigContext'

export default function ResourcesPage() {
  const { content } = useConfig()
  const r = content?.resources || {}
  const heroTitle = r.heroTitle ?? 'Resources to help you succeed'
  const heroSubtitle = r.heroSubtitle ?? 'Discover guides, templates, webinars, and best practices to get the most out of your projects.'
  const blogPosts = [
    {
      title: '10 Project Management Best Practices for 2024',
      excerpt: 'Discover the latest trends and best practices that successful project managers are using to deliver better results.',
      author: 'Sarah Johnson',
      date: 'March 15, 2024',
      readTime: '5 min read',
      image: 'https://picsum.photos/400/250?random=blog1',
      category: 'Best Practices'
    },
    {
      title: 'How to Build High-Performing Remote Teams',
      excerpt: 'Learn the strategies and tools that help remote teams stay connected, productive, and engaged.',
      author: 'Michael Chen',
      date: 'March 12, 2024',
      readTime: '7 min read',
      image: 'https://picsum.photos/400/250?random=blog2',
      category: 'Remote Work'
    },
    {
      title: 'The Complete Guide to Agile Project Management',
      excerpt: 'Everything you need to know about implementing agile methodologies in your project management workflow.',
      author: 'Emily Rodriguez',
      date: 'March 10, 2024',
      readTime: '10 min read',
      image: 'https://picsum.photos/400/250?random=blog3',
      category: 'Agile'
    }
  ]

  const templates = [
    {
      title: 'Project Kickoff Template',
      description: 'Get your projects started right with this comprehensive kickoff template.',
      downloads: '2.3k',
      image: 'https://picsum.photos/300/200?random=template1'
    },
    {
      title: 'Sprint Planning Template',
      description: 'Plan your agile sprints effectively with this ready-to-use template.',
      downloads: '1.8k',
      image: 'https://picsum.photos/300/200?random=template2'
    },
    {
      title: 'Project Status Report',
      description: 'Keep stakeholders informed with professional status report templates.',
      downloads: '3.1k',
      image: 'https://picsum.photos/300/200?random=template3'
    },
    {
      title: 'Risk Management Matrix',
      description: 'Identify and manage project risks with this comprehensive matrix template.',
      downloads: '1.5k',
      image: 'https://picsum.photos/300/200?random=template4'
    }
  ]

  const webinars = [
    {
      title: 'Mastering Project Timelines and Deadlines',
      date: 'March 25, 2024',
      time: '2:00 PM EST',
      presenter: 'David Wilson',
      description: 'Learn how to create realistic timelines and meet project deadlines consistently.',
      image: 'https://picsum.photos/400/250?random=webinar1',
      isUpcoming: true
    },
    {
      title: 'Building Effective Team Communication',
      date: 'March 18, 2024',
      time: '1:00 PM EST',
      presenter: 'Lisa Thompson',
      description: 'Discover strategies for improving team communication and collaboration.',
      image: 'https://picsum.photos/400/250?random=webinar2',
      isUpcoming: false
    },
    {
      title: 'Advanced Reporting and Analytics',
      date: 'March 11, 2024',
      time: '3:00 PM EST',
      presenter: 'Robert Kim',
      description: 'Deep dive into project analytics and how to create meaningful reports.',
      image: 'https://picsum.photos/400/250?random=webinar3',
      isUpcoming: false
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

      {/* Blog Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{r.blogTitle ?? 'Latest from our blog'}</h2>
              <p className="text-xl text-gray-600">{r.blogSubtitle ?? 'Stay up to date with the latest project management insights and tips.'}</p>
            </div>
            <button className="hidden md:flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold">
              <span>View all posts</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={post.image}
                  alt={`Blog post: ${post.title}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{r.templatesTitle ?? 'Free project templates'}</h2>
            <p className="text-xl text-gray-600">{r.templatesSubtitle ?? 'Jump-start your projects with our collection of professionally designed templates.'}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {templates.map((template, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={template.image}
                  alt={`Template: ${template.title}`}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{template.title}</h3>
                  <p className="text-gray-600 mb-4">{template.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{template.downloads} downloads</span>
                    <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-semibold">
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{r.webinarsTitle ?? 'Webinars & events'}</h2>
            <p className="text-xl text-gray-600">{r.webinarsSubtitle ?? 'Join our experts for live sessions on project management best practices.'}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {webinars.map((webinar, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    src={webinar.image}
                    alt={`Webinar: ${webinar.title}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                  {webinar.isUpcoming && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        Upcoming
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{webinar.title}</h3>
                  <p className="text-gray-600 mb-4">{webinar.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{webinar.date} at {webinar.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      <span>Presented by {webinar.presenter}</span>
                    </div>
                  </div>
                  <button className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors ${
                    webinar.isUpcoming
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}>
                    {webinar.isUpcoming ? 'Register now' : 'Watch recording'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Center CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{r.helpTitle ?? 'Need more help?'}</h2>
          <p className="text-xl text-blue-100 mb-8">{r.helpSubtitle ?? 'Visit our comprehensive help center for detailed guides, tutorials, and FAQs.'}</p>
          <button className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            {r.helpPrimaryText ?? 'Visit help center'}
          </button>
        </div>
      </section>
    </div>
  )
}
