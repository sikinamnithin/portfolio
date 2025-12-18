'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="py-32 bg-white dark:bg-gray-900"
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
            02. About
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Background
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              My journey began during college at <span className="text-gray-900 dark:text-white font-medium">Bhavan's College, Hyderabad</span>, where I started freelancing for 10 months, delivering diverse projects to 5 different clients—all with 5-star reviews. This hands-on experience taught me not just to code, but to understand client needs and deliver quality solutions.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              After graduating in 2023, I joined <span className="text-gray-900 dark:text-white font-medium">Avidii</span>, where I built their native Android app for connecting students with teachers. While working there, I co-founded <span className="text-gray-900 dark:text-white font-medium">Artifin</span>, an AI assistant for accountants. We established a Delaware C-Corp, reached final investor rounds, and eventually sold the product to a San Francisco company.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              At <span className="text-gray-900 dark:text-white font-medium">ai4lex</span>, I lead development of a SaaS platform for law firms. When I joined, the codebase was in Django. We needed better performance and type safety for production, so I moved to Golang for the backend. For the frontend, I chose Next.js over Django templates because we wanted a smoother, more responsive user experience—the kind you'd expect from modern web apps. The application now <a href="https://casemanager.sapient-ia.it/" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white font-medium underline decoration-gray-400 hover:decoration-gray-900 dark:hover:decoration-white transition-colors">runs in production</a> with minimal bugs, which comes down to careful architecture and testing. I also built the Azure infrastructure to be cost-efficient while handling our load.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I read <a href="https://www.amazon.in/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/9352135245" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white font-medium underline decoration-gray-400 hover:decoration-gray-900 dark:hover:decoration-white transition-colors">Designing Data-Intensive Applications</a> because I wanted to understand how to build systems that scale. The book helped me think about trade-offs—like when to use strong vs eventual consistency, how to partition data effectively, and which database fits which access pattern. I apply these concepts when making architectural decisions at work. If you're building distributed systems, it's worth picking up.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              During college, I taught Android to juniors because I enjoyed explaining technical concepts. Outside of work, I study the mathematics behind generative models like Stable Diffusion—primarily diffusion processes and score-based models. I find it interesting to understand how these systems work at a theoretical level, not just at an application layer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-sm font-mono text-gray-600 dark:text-gray-400 mb-4">
                Education
              </h3>
              <div className="space-y-2">
                <p className="text-gray-900 dark:text-white font-medium">
                  Bhavan's College
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Hyderabad, India
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-mono">
                  Graduated 2023
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-mono text-gray-600 dark:text-gray-400 mb-4">
                Quick Facts
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 dark:text-gray-600 font-mono text-sm mt-1">→</span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm">
                    Production app with <span className="text-gray-900 dark:text-white font-medium">virtually zero bugs</span> serving real users
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 dark:text-gray-600 font-mono text-sm mt-1">→</span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm">
                    Deep knowledge of distributed systems (DDIA)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 dark:text-gray-600 font-mono text-sm mt-1">→</span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm">
                    Designed scalable Azure architecture from scratch
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 dark:text-gray-600 font-mono text-sm mt-1">→</span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm">
                    Taught Android development to college juniors
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 dark:text-gray-600 font-mono text-sm mt-1">→</span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm">
                    Co-founded startup, raised funding, successful exit
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
