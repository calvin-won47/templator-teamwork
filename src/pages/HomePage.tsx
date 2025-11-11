
import React from 'react'
import { Link } from 'react-router-dom'
import { Play, CheckCircle, ArrowRight, Users, Clock, BarChart3, Shield } from 'lucide-react'
import { useConfig } from '../contexts/ConfigContext'

export default function HomePage() {
  const { content } = useConfig()
  const h = content?.home || {}
  const heroTitle = h.heroTitle ?? (
    <>
      Project management made
      <span className="text-blue-600"> simple</span>
    </>
  )
  const heroSubtitle =
    h.heroSubtitle ??
    'Streamline your workflow, collaborate seamlessly, and deliver projects on time with the all-in-one project management platform trusted by thousands of teams worldwide.'
  const ctaPrimaryText = h.ctaPrimaryText ?? 'Start free trial'
  const ctaSecondaryText = h.ctaSecondaryText ?? 'Watch demo'
  const featuresSectionTitle = h.featuresSectionTitle ?? 'Everything you need to manage projects'
  const featuresSectionSubtitle =
    h.featuresSectionSubtitle ??
    'From planning to execution, Teamwork provides all the tools your team needs to collaborate effectively and deliver exceptional results.'
  const productShowcaseTitle = h.productShowcaseTitle ?? 'Visualize your projects like never before'
  const productShowcaseSubtitle =
    h.productShowcaseSubtitle ??
    "Get a bird's eye view of all your projects with interactive Gantt charts, Kanban boards, and timeline views that make project planning intuitive."
  const collaborationTitle = h.collaborationTitle ?? 'Collaborate in real-time'
  const collaborationSubtitle =
    h.collaborationSubtitle ??
    'Keep your team connected with built-in messaging, file sharing, and real-time updates that ensure everyone stays in the loop.'
  const testimonialsTitle = h.testimonialsTitle ?? 'Trusted by teams worldwide'
  const testimonialsSubtitle = h.testimonialsSubtitle ?? 'See what our customers have to say about Teamwork'
  const ctaTitle = h.ctaTitle ?? 'Ready to transform your project management?'
  const ctaSubtitle =
    h.ctaSubtitle ??
    'Join thousands of teams who have already made the switch to Teamwork. Start your free trial today and see the difference.'
  const features = [
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Keep everyone on the same page with real-time collaboration tools and seamless communication.'
    },
    {
      icon: Clock,
      title: 'Time Tracking',
      description: 'Track time accurately across projects and tasks to improve productivity and billing accuracy.'
    },
    {
      icon: BarChart3,
      title: 'Advanced Reporting',
      description: 'Get insights into project progress, team performance, and resource utilization with detailed reports.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Keep your data safe with enterprise-grade security, compliance, and privacy controls.'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Project Manager at TechCorp',
      image: 'https://picsum.photos/64/64?random=1',
      quote: 'Teamwork has transformed how we manage projects. Our team productivity has increased by 40% since we started using it.'
    },
    {
      name: 'Michael Chen',
      role: 'CEO at StartupXYZ',
      image: 'https://picsum.photos/64/64?random=2',
      quote: 'The best project management tool we\'ve ever used. It\'s intuitive, powerful, and scales with our growing team.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Creative Director at DesignStudio',
      image: 'https://picsum.photos/64/64?random=3',
      quote: 'Finally, a tool that brings together all our creative workflows in one place. Game-changer for our agency.'
    }
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">{heroTitle}</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">{heroSubtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup" className="btn-primary text-center">{ctaPrimaryText}</Link>
                <button className="flex items-center justify-center space-x-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-lg border border-gray-300 transition-colors duration-200">
                  <Play className="w-5 h-5" />
                  <span>{ctaSecondaryText}</span>
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                No credit card required • 30-day free trial • Cancel anytime
              </p>
            </div>
            <div className="relative">
              <img
                src="https://picsum.photos/600/400?random=dashboard"
                alt="Teamwork dashboard showing project management interface with tasks, timelines, and team collaboration features"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 border border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Project on track</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{featuresSectionTitle}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{featuresSectionSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{productShowcaseTitle}</h2>
              <p className="text-lg text-gray-600 mb-6">{productShowcaseSubtitle}</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Interactive Gantt charts</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Customizable Kanban boards</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Timeline and calendar views</span>
                </li>
              </ul>
              <Link to="/features" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold">
                <span>Learn more about features</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <img
                src="https://picsum.photos/600/400?random=gantt"
                alt="Gantt chart view showing project timeline with tasks, dependencies, and milestones in Teamwork project management software"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://picsum.photos/600/400?random=collaboration"
                alt="Team collaboration interface showing real-time chat, file sharing, and task comments in Teamwork platform"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{collaborationTitle}</h2>
              <p className="text-lg text-gray-600 mb-6">{collaborationSubtitle}</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Real-time messaging and comments</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">File sharing and version control</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">@mentions and notifications</span>
                </li>
              </ul>
              <Link to="/features" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold">
                <span>Explore collaboration tools</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{testimonialsTitle}</h2>
            <p className="text-xl text-gray-600">{testimonialsSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} - ${testimonial.role}`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{ctaTitle}</h2>
          <p className="text-xl text-blue-100 mb-8">{ctaSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup" className="btn-outline">{ctaPrimaryText}</Link>
            <Link to="/contact" className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              {content?.home?.ctaSecondaryText ?? 'Contact sales'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
