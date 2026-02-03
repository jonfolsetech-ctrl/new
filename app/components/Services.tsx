'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'Machine Learning',
    description: 'Custom ML models tailored to your business needs',
    icon: '🤖',
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Natural Language Processing',
    description: 'Advanced text analysis and language understanding',
    icon: '💬',
    color: 'from-purple-500 to-purple-600',
  },
  {
    title: 'Computer Vision',
    description: 'Image and video analysis solutions',
    icon: '👁️',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    title: 'AI Consulting',
    description: 'Strategic guidance for AI implementation',
    icon: '💡',
    color: 'from-indigo-500 to-indigo-600',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #1e40af 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cutting-edge AI solutions designed to drive innovation and growth
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="card p-8 group cursor-pointer"
            >
              <div className={`text-6xl mb-6 p-4 rounded-2xl bg-gradient-to-br ${service.color} inline-block transform group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-brand-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
