'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    title: 'Backend',
    skills: ['Golang', 'Node.js', 'Python', 'RESTful APIs', 'Microservices'],
  },
  {
    title: 'Mobile',
    skills: ['Android (Native)', 'Kotlin', 'React Native', 'Mobile Architecture'],
  },
  {
    title: 'AI & ML',
    skills: ['LLM Agents', 'RAG', 'GraphRAG', 'Fine-tuning', 'Prompt Engineering'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['Azure', 'Docker', 'CI/CD', 'System Architecture', 'Cost Optimization'],
  },
  {
    title: 'Database',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Qdrant', 'Database Design'],
  },
  {
    title: 'Blockchain',
    skills: ['Solana (Familiar)'],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
            05. Skills
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Tech Stack
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-sm font-mono text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="px-3 py-1.5 text-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
