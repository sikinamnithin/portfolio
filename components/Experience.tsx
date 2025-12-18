'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Software Engineer & Team Lead',
    company: 'ai4lex',
    companyUrl: 'https://casemanager.sapient-ia.it/',
    period: '2024 - Present',
    description: 'Headed and coded most of the main SaaS platform for law firms that handles case management and document analysis. Designed the Azure infrastructure for production use. The system serves real users with minimal downtime. Currently building AI agents for contracts management.',
    projectUrls: [
      { label: 'Case Manager (In Production)', url: 'https://casemanager.sapient-ia.it/' },
      { label: 'AI Contracts Project', url: 'http://dev.ai4contracts.com/' }
    ],
    technologies: ['Golang', 'Next.js', 'TypeScript', 'Azure', 'PostgreSQL', 'AI Agents', 'RAG'],
  },
  {
    title: 'Co-Founder & Full Stack Developer',
    company: 'Artifin (Side Project)',
    period: '2023',
    description: 'Built AI assistant for accountants from scratch. Established Delaware C-Corp and reached final investor rounds. Successfully sold product to San Francisco-based company following ChatGPT API release.',
    technologies: ['AI/ML', 'Full Stack Development', 'Product Development'],
  },
  {
    title: 'React and Mobile Developer',
    company: 'Avidii',
    companyUrl: 'https://avidii.ch/en-in/',
    period: '2023 - 2024',
    description: 'Developed critical native Android app connecting students with teachers for instant doubt clearing. Maintained existing React Native application and conducted technical interviews for computer science teachers. Company closed due to running out of runway.',
    technologies: ['Android (Native)', 'Kotlin', 'React Native', 'Mobile Development'],
  },
  {
    title: 'Freelance Developer',
    company: 'Various Clients',
    period: '2022 - 2023',
    description: 'Delivered 5 diverse projects during college for 5 different clients. Achieved 5-star ratings across all projects through high-quality work and professional communication.',
    technologies: ['Full Stack', 'Client Management', 'Diverse Tech Stack'],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-gray-600 dark:text-gray-400 mb-2">
            03. Experience
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Work History
          </h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 border-l-2 border-gray-300 dark:border-gray-700 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-4 h-4 -ml-[9px] rounded-full bg-gray-900 dark:bg-white border-4 border-gray-50 dark:border-gray-800"></div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mt-2">
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 underline decoration-blue-600/30 hover:decoration-blue-600 transition-colors"
                      >
                        {exp.company} ↗
                      </a>
                    ) : (
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {exp.company}
                      </span>
                    )}
                    <span className="text-gray-500 dark:text-gray-500 text-sm font-mono">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {exp.description}
                </p>

                {exp.projectUrls && (
                  <div className="flex flex-wrap gap-3">
                    {exp.projectUrls.map((project, idx) => (
                      <a
                        key={idx}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white font-medium rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors text-sm"
                      >
                        {project.label} ↗
                      </a>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-mono bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
