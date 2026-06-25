'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Database, 
  Server, 
  Globe, 
  Zap, 
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  CheckCircle,
  Users,
  Award,
  Briefcase,
  Sparkles,
  Rocket,
  Terminal,
  MousePointer2
} from 'lucide-react';
import Link from 'next/link';
import { 
  SpotlightCard,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  MagneticButton,
  TiltCard,
  AnimatedText,
  TextGradient,
  AnimatedBackground,
  BentoCard,
  FloatingBadge,
  SlideIn,
  ScaleIn,
  BlurIn,
  HoverScale,
  GradientBorder,
  MorphingBlob,
  TextReveal
} from '@/components/ui/spotlight-card';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const skills = [
    { icon: Code, name: 'Frontend Development', description: 'React, Next.js, TypeScript, JavaScript', color: 'from-blue-500 to-cyan-500' },
    { icon: Server, name: 'Backend Development', description: 'Node.js, Express.js, API Development', color: 'from-purple-500 to-pink-500' },
    { icon: Database, name: 'Database Management', description: 'MongoDB, Firebase, Data Modeling', color: 'from-emerald-500 to-teal-500' },
    { icon: Globe, name: 'Cloud & Deployment', description: 'Vercel, Netlify, Performance Optimization', color: 'from-orange-500 to-red-500' },
    { icon: Zap, name: 'Modern UI/UX', description: 'Tailwind CSS, Framer Motion, Responsive Design', color: 'from-violet-500 to-purple-500' },
  ];

  const achievements = [
    { icon: Briefcase, number: '30+', label: 'Projects Completed', suffix: '' },
    { icon: Users, number: '20+', label: 'Happy Clients', suffix: '' },
    { icon: Award, number: '1+', label: 'Years Experience', suffix: '' },
    { icon: CheckCircle, number: '100', label: 'Client Satisfaction', suffix: '%' },
  ];

  const socials = [
    { icon: Github, href: "https://github.com/Hammadprogrammer", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/hammad-zahid-543a652a6/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hammadzahid221@gmail.com", label: "Email" },
  ];

  return (
    <div ref={containerRef} className="relative">
      <AnimatedBackground />

      {/* Hero Section with Bento Grid */}
      <section className="relative min-h-screen flex items-center py-32 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 min-h-[80vh]">
            
            {/* Main Hero Card - Spans 2x2 */}
            <BentoCard size="large" className="md:col-span-2 md:row-span-2 flex flex-col justify-center">
              <FloatingBadge className="mb-6">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium text-slate-300">Available for new projects</span>
              </FloatingBadge>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
                <TextGradient>Muhammad</TextGradient>
                <br />
                <span className="text-white">Hammad</span>
              </h1>
              
              <div className="flex items-center gap-3 mb-6">
                <Terminal className="w-5 h-5 text-cyan-400" />
                <span className="text-xl text-slate-400">Full Stack Developer</span>
              </div>
              
              <p className="text-lg text-slate-400 max-w-lg mb-8 leading-relaxed">
                Building exceptional digital experiences with modern technologies. 
                Transforming ideas into scalable, performant web applications.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <MagneticButton>
                  <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:from-blue-500 hover:via-purple-500 hover:to-cyan-400 text-white text-lg px-8 py-6 shadow-lg shadow-blue-500/25">
                    <Link href="/projects">
                      View Projects
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </MagneticButton>
                
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm">
                  <Link href="/contact">
                    Hire Me
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </BentoCard>

            {/* Stats Cards */}
            <TiltCard className="h-full">
              <div className="h-full p-6 bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] rounded-3xl flex flex-col justify-center items-center text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
                  <Briefcase className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-white mb-1">30+</h3>
                <p className="text-slate-400">Projects Completed</p>
              </div>
            </TiltCard>

            <TiltCard className="h-full">
              <div className="h-full p-6 bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] rounded-3xl flex flex-col justify-center items-center text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-white mb-1">20+</h3>
                <p className="text-slate-400">Happy Clients</p>
              </div>
            </TiltCard>

            {/* Social Links Card */}
            <SpotlightCard className="h-full">
              <div className="h-full p-6 bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] rounded-3xl flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-white mb-4">Connect with me</h3>
                <div className="flex gap-3">
                  {socials.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-slate-300" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </SpotlightCard>

            {/* Location Card */}
            <TiltCard className="h-full">
              <div className="h-full p-6 bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] rounded-3xl flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-400">Location</span>
                </div>
                <p className="text-xl font-semibold text-white">Pakistan</p>
                <p className="text-sm text-slate-500 mt-1">Available worldwide</p>
              </div>
            </TiltCard>

            {/* Tech Stack Preview */}
            <SpotlightCard className="h-full md:col-span-1">
              <div className="h-full p-6 bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] rounded-3xl flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-white mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind'].map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-white/5 text-sm text-slate-300 border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex justify-center mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-slate-400"
            >
              <MousePointer2 className="w-5 h-5" />
              <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-20">
            <FloatingBadge className="mb-6">
              <Rocket className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-slate-300">Track Record</span>
            </FloatingBadge>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Numbers That <TextGradient>Speak</TextGradient>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Consistent delivery of high-quality solutions that drive business growth
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {achievements.map((achievement) => (
              <StaggerItem key={achievement.label}>
                <SpotlightCard className="h-full">
                  <div className="h-full p-8 bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] rounded-3xl text-center group hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform">
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-4xl sm:text-5xl font-bold text-white mb-2">
                      {achievement.number}
                      <TextGradient>{achievement.suffix}</TextGradient>
                    </h3>
                    <p className="text-slate-400">{achievement.label}</p>
                  </div>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-20">
            <FloatingBadge className="mb-6">
              <Code className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-slate-300">Expertise</span>
            </FloatingBadge>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Skills & <TextGradient>Technologies</TextGradient>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Full-stack capabilities with modern tools and frameworks
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {skills.map((skill) => (
              <StaggerItem key={skill.name}>
                <TiltCard className="h-full">
                  <div className={`h-full p-8 bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] rounded-3xl group hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300 overflow-hidden relative`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                      <skill.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{skill.name}</h3>
                    <p className="text-slate-400 leading-relaxed">{skill.description}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScaleIn>
            <GradientBorder className="h-full">
              <div className="relative p-12 md:p-16 rounded-2xl bg-[#0a0a0a] overflow-hidden">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10" />
                
                <div className="relative space-y-8 text-center">
                  <ScaleIn delay={0.2}>
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                      <Rocket className="w-10 h-10 text-white" />
                    </div>
                  </ScaleIn>
                  
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                    Ready to Build Something <TextGradient>Amazing?</TextGradient>
                  </h2>
                  <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                    Let&apos;s collaborate and turn your ideas into reality. I&apos;m always excited to work on new projects.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <MagneticButton>
                      <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:from-blue-500 hover:via-purple-500 hover:to-cyan-400 text-white text-lg px-8 py-6 shadow-lg shadow-blue-500/25">
                        <Link href="/contact">
                          Start Your Project
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                      </Button>
                    </MagneticButton>
                    <HoverScale>
                      <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm">
                        <Link href="/about">About Me</Link>
                      </Button>
                    </HoverScale>
                  </div>
                </div>
              </div>
            </GradientBorder>
          </ScaleIn>
        </div>
      </section>
    </div>
  );
}