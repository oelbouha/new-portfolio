import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Footer } from '@/components/layout/Footer';

// Project data (will be expanded with real data)
const projectsData = [
  {
    id: 1,
    slug: 'pong-arena',
    title: 'Pong Arena',
    tags: ['Web Development', 'Full-Stack', 'WebSocket'],
    link: 'https://github.com/oelbouha/ft_transcendence',
    overview: 'A dynamic gaming website featuring Ping Pong and Slap Hands, playable offline or online with friends.',
    conclusion: 'Successfully delivered a real-time multiplayer gaming platform with smooth gameplay and responsive design.',
    images: [
      'https://images.unsplash.com/photo-1534158914592-062992fbe900?w=1200&h=675&fit=crop',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&h=600&fit=crop',
    ]
  },
  {
    id: 2,
    slug: 'inception',
    title: 'Inception Unleashed',
    tags: ['DevOps', 'Docker', 'System Administration'],
    link: 'https://github.com/oelbouha/Inception',
    overview: 'Dockerized web stack with NGINX, WordPress, and MariaDB showcasing containerization and automation.',
    conclusion: 'Built a robust, scalable infrastructure demonstrating modern DevOps practices and container orchestration.',
    images: [
      'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1200&h=675&fit=crop',
      'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop',
    ]
  },
  {
    id: 3,
    slug: 'webserv',
    title: 'Webserv',
    tags: ['System Programming', 'C++98', 'Network Programming'],
    link: 'https://github.com/oelbouha/webserv',
    overview: 'Custom HTTP server built from scratch in C++98, handling multiple connections with non-blocking I/O.',
    conclusion: 'Developed a high-performance web server from the ground up, deepening understanding of HTTP protocol and network programming.',
    images: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=675&fit=crop',
      'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=600&fit=crop',
    ]
  },
];

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const project = projectsData.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-accent hover:underline"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <main className="flex min-h-screen flex-col gap-10 px-5 pt-[120px] pb-20">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto w-full"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {project.title}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground-secondary"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Visit Website Button */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-background font-semibold hover:bg-accent/90 transition-colors"
            >
              Visit Repository
              <ArrowRight className="w-5 h-5" />
            </a>
          )}
        </motion.section>

        {/* Overview & Conclusion Cards */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-7xl mx-auto w-full flex gap-5 max-sm:flex-col"
        >
          {/* Project Overview */}
          <div className="flex h-auto min-h-[300px] flex-1 flex-col justify-between gap-10 rounded-2xl bg-card/50 backdrop-blur-sm border border-border p-8">
            <p className="text-xs font-semibold tracking-wider text-foreground-secondary uppercase">
              PROJECT OVERVIEW
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              {project.overview}
            </p>
          </div>

          {/* Conclusion */}
          <div className="flex h-auto min-h-[300px] flex-1 flex-col justify-between gap-10 rounded-2xl bg-card/50 backdrop-blur-sm border border-border p-8">
            <p className="text-xs font-semibold tracking-wider text-foreground-secondary uppercase">
              CONCLUSION
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              {project.conclusion}
            </p>
          </div>
        </motion.section>

        {/* Section Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-7xl mx-auto w-full py-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Our Deliver.
          </h2>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mt-2">
            Best Result For Our Client.
          </h3>
        </motion.div>

        {/* Image Showcase */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-7xl mx-auto w-full space-y-8"
        >
          {project.images.map((image, index) => (
            <div
              key={index}
              className={cn(
                "relative overflow-hidden rounded-2xl bg-card",
                index === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
              )}
            >
              <img
                src={image}
                alt={`${project.title} showcase ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.section>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-7xl mx-auto w-full"
        >
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-foreground-secondary hover:text-accent transition-colors"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
            Back to Projects
          </button>
        </motion.div>
      </main>
      
      {/* Footer */}
      <Footer />
    </>
  );
}
