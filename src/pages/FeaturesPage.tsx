
import React from 'react'
import { CheckCircle, Users, Clock, BarChart3, FileText, Calendar, MessageSquare, Shield } from 'lucide-react'

export default function FeaturesPage() {
  const features = [
    {
      icon: Users,
      title: 'Project Management',
      description: 'Plan, organize, and track projects from start to finish with powerful project management tools.',
      image: 'https://picsum.photos/500/300?random=project',
      benefits: [
        'Interactive Gantt charts',
        'Task dependencies',
        'Milestone tracking',
        'Resource allocation'
      ]
    },
    {
      icon: MessageSquare,
      title: 'Team Collaboration',
      description: 'Keep your team connected with real-time messaging, file sharing, and collaborative workspaces.',
      image: 'https://picsum.photos/500/300?random=team',
      benefits: [
        'Real-time messaging',
        'File sharing & version control',
        '@mentions and notifications',
        'Team workspaces'
      ]
    },
    {
      icon: Clock,
      title: 'Time Tracking',
      description: 'Track time accurately across projects and tasks to improve productivity and billing.',
      image: 'https://picsum.photos/500/300?random=time',
      benefits: [
        'Automatic time tracking',
        'Manual time entry',
        'Billable hours tracking',
        'Time reports'
      ]
    },
    {
      icon: BarChart3,
      title: 'Advanced Reporting',
      description: 'Get insights into project progress, team performance, and resource utilization.',
      image: 'https://picsum.photos/500/300?random=reports',
      benefits: [
        'Custom dashboards',
        'Project progress reports',
        'Team performance metrics',
        'Resource utilization'
      ]
    },
    {
      icon: Calendar,
      title: 'Resource Planning',
      description: 'Optimize team workload and resource allocation with advanced planning tools.',
      image: 'https://picsum.photos/500/300?random=planning',
      benefits: [
        'Workload management',
        'Capacity planning',
        'Resource scheduling',
        'Availability tracking'
      ]
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Keep your data safe with enterprise-grade security and compliance features.',
      image: 'https://picsum.photos/500/300?random=security',
      benefits: [
        'SOC 2 Type II compliance',
        'GDPR compliance',
        'Two-factor authentication',
        'Data encryption'
      ]
    }
  ]

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful features for modern teams
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover all the tools and features that make Teamwork the complete 
            project management solution for teams of all sizes.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {features.map((feature, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{feature.title}</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <img
                  src={feature.image}
                  alt={`${feature.title} interface showing ${feature.description.toLowerCase()}`}
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Integrates with your favorite tools
            </h2>
            <p className="text-xl text-gray-600">
              Connect Teamwork with the tools you already use to create a seamless workflow
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'Slack', 'Google Drive', 'Microsoft Teams', 'Dropbox', 'Zoom', 'Salesforce',
              'HubSpot', 'QuickBooks', 'Xero', 'GitHub', 'Jira', 'Trello'
            ].map((tool, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className="text-sm font-semibold text-gray-600">{tool.slice(0, 2)}</span>
                </div>
                <p className="text-sm font-medium text-gray-700">{tool}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience all features with a free trial
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            No credit card required. Start your 30-day free trial and see how 
            Teamwork can transform your project management.
          </p>
          <button className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            Start free trial
          </button>
        </div>
      </section>
    </div>
  )
}
