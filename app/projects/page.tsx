'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ExternalLink,
  FolderOpen,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

function ProjectImage({ src, alt, color }: { src: string; alt: string; color: string }) {
  const [errored, setErrored] = useState(false);
  if (errored || !src) {
    return (
      <div className={`w-full h-full bg-gradient-to-br ${color} flex items-center justify-center`}>
        <FolderOpen className="w-16 h-16 text-white/40" />
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      onError={() => setErrored(true)}
      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
    />
  );
}

export default function Projects() {
  const projects = [
    {
      title: "7ctech Service Website",
      description: "Modern, service-based website built with Next.js and styled using MUI, Reactstrap, and SASS. Features responsive design, interactive UI, and dynamic contact forms powered by Email.js. Optimized for performance, user experience, and scalability.",
      image: "/7ctech.png",
      technologies: ["Next.js", "Reactstrap", "MUI", "SASS", "Email.js", "JavaScript"],
      color: "from-indigo-500 to-purple-500",
      features: [
        "Responsive multi-page layout",
        "Interactive UI with Reactstrap and MUI",
        "Email.js-powered contact form"
      ],
      // github: "https://github.com/your-username/7ctech-service-site",
      live: "https://www.7ctech.com/"
    },
    {
      title: "PearlEPP Construction Services",
      description: "Service-based website for a UK-based construction company, built using Next.js, MUI, Reactstrap, and SASS. Features a responsive design and a contact form integrated with Email.js. Optimized for user engagement, service clarity, and performance.",
      image: "/preal.png",
      technologies: ["Next.js", "Reactstrap", "MUI", "SASS", "Email.js", "JavaScript"],
      color: "from-yellow-600 to-amber-500",
      features: [
        "Responsive and mobile-first layout",
        "Service-based dynamic pages",
        "Contact and inquiry form with Email.js"
      ],
      // github: "https://github.com/your-username/pearlepp-construction",
      live: "https://www.pearlepp.co.uk/"
    },
    {
      title: "All Exam Help — Academic Platform",
      description: "A professional academic assistance platform offering exam help, tutoring, and study resources. Features a clean modern UI with service listings, expert profiles, and a seamless booking/contact flow. Built for students seeking reliable academic support.",
      image: "https://api.microlink.io/?url=https://all-exam-help-ihio.vercel.app/&screenshot=true&meta=false&embed=screenshot.url",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Vercel"],
      color: "from-rose-500 to-orange-500",
      features: [
        "Service listings with expert profiles",
        "Responsive academic resource pages",
        "Seamless contact & booking flow"
      ],
      live: "https://all-exam-help-ihio.vercel.app/"
    },
    {
      title: "Hire Class Buddy — Tutoring Platform",
      description: "A tutoring marketplace that connects students with class buddies and tutors. Features subject-based browsing, tutor profiles, real-time availability, and an intuitive hire flow — all wrapped in a professional, mobile-first design.",
      image: "https://api.microlink.io/?url=https://hire-class-buddy.vercel.app/&screenshot=true&meta=false&embed=screenshot.url",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Vercel"],
      color: "from-violet-500 to-indigo-600",
      features: [
        "Subject-based tutor browsing",
        "Tutor profile & availability cards",
        "Mobile-first responsive design"
      ],
      live: "https://hire-class-buddy.vercel.app/"
    },
    {
      title: "Weather Forecast App",
      description: "A simple and responsive weather app built with React and Tailwind CSS. Users can enter any city name to fetch real-time temperature data using a weather API. Designed for speed, clarity, and a smooth user experience.",
      image: "/weather.png",
      technologies: ["React", "Tailwind CSS", "OpenWeatherMap API", "JavaScript"],
      color: "from-sky-400 to-blue-600",
      features: [
        "City-based weather search",
        "Real-time temperature display",
        "Responsive design with Tailwind CSS"
      ],
      live: "https://weather-app-react-three-gules.vercel.app/"
    }
  ];

  return (
    <div className="min-h-screen py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20 scroll-animate">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <FolderOpen className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-slate-300">Portfolio</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            My <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A showcase of my recent work in web development. Each project represents a unique challenge and innovative solution.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: 5,
                scale: 1.02
              }}
              className="perspective-1000"
            >
              <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-2 border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 group">
                {/* Color accent bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${project.color}`} />

                {/* Project Image */}
                <div className="relative h-52 overflow-hidden">
                  <ProjectImage src={project.image} alt={project.title} color={project.color} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                  {/* Live Button */}
                  {project.live && (
                    <div className="absolute bottom-4 right-4">
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button size="sm" className={`bg-gradient-to-r ${project.color} text-white text-xs shadow-lg border-0 flex items-center gap-1.5`}>
                          <ExternalLink className="w-3 h-3" />
                          Live Preview
                        </Button>
                      </motion.a>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl font-bold mb-3 group-hover:text-primary transition-colors"
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-muted-foreground mb-4 leading-relaxed"
                  >
                    {project.description}
                  </motion.p>

                  {/* Features */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-4"
                  >
                    <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {project.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + featureIndex * 0.1 }}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Technologies */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap gap-2"
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge variant="outline" className="text-xs hover:bg-accent transition-colors">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Interested in working together?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and create innovative solutions.
            Let's discuss your next project!
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-600 text-white text-lg px-8 py-6">
              <a href="/contact">Let's Work Together</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
