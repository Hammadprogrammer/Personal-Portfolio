'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { 
  Code2, 
  Database, 
  Server, 
  Globe, 
  Cloud, 
  Trophy,
  Calendar,
  MapPin,
  Briefcase,
  GitBranch,
  Download,
  Mail,
  Phone,
  MessageCircle
} from 'lucide-react';
import Link from 'next/link';

export default function About() {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "7ctech",
      period: "2024 - Present",
      description: "Developing responsive web applications and collaborating with design teams to create exceptional user experiences using modern technologies like React, Next.js, and Tailwind CSS."
    },
    {
      title: "Freelance Developer",
      company: "Self-Employed",
      period: "2023 - 2024",
      description: "Worked independently on web and mobile projects for small businesses, focusing on responsive design, performance optimization, and delivering high-quality solutions that exceed client expectations."
    }
  ];

  const skills = [
    { name: "React/Next.js", level: 95, icon: Code2 },
    { name: "TypeScript/JavaScript", level: 92, icon: Code2 },
    { name: "Node.js/Express", level: 90, icon: Server },
    { name: "MongoDB/Database", level: 88, icon: Database },
    { name: "HTML/CSS", level: 95, icon: Globe },
    { name: "Tailwind CSS", level: 90, icon: Code2 },
    { name: "Material-UI (MUI)", level: 85, icon: Code2 },
    { name: "Framer Motion", level: 82, icon: Code2 },
    { name: "Git/GitHub", level: 88, icon: GitBranch },
    { name: "Vercel/Deployment", level: 85, icon: Cloud },
  ];

  const technologies = [
    // Frontend Technologies
    "React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3",
    // Styling & UI
    "Tailwind CSS", "Material-UI (MUI)", "Framer Motion", "Styled Components",
    // Backend Technologies
    "Node.js", "Express.js", 
    // Databases
    "MongoDB", "Firebase",
    // Cloud & Deployment
    "Vercel", "Netlify", 
    // Version Control & Tools
    "Git", "GitHub", "VS Code", "Postman", "Figma"
  ];

  const personalInfo = [
    { icon: MapPin, label: "Location", value: "Pakistan" },
    { icon: Calendar, label: "Experience", value: "1+ Years Professional" },
    { icon: Briefcase, label: "Projects", value: "30+ Successfully Completed" },
    { icon: Trophy, label: "Clients", value: "20+ Satisfied Clients" }
  ];

  const contactInfo = [
    { icon: Mail, label: "Email", value: "hammadzahid221@gmail.com", href: "mailto:hammadzahid221@gmail.com" },
    { icon: Phone, label: "Phone", value: "+92 311 8270539", href: "tel:+923118270539" },
    { icon: MessageCircle, label: "WhatsApp", value: "+923118270539", href: "https://wa.me/923118270539" }
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Hammad Full stack developer (2).pdf';
    link.download = '/Hammad Full stack developer (2).pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mx-auto w-32 h-32 mb-8"
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-full p-1"
            >
              <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                <motion.div
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="text-4xl font-bold bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent"
                >
                  MH
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              About Muhammad Hammad
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Passionate fullstack developer with 1+ years of professional experience creating scalable web applications 
            and innovative digital solutions. I specialize in transforming complex business requirements into elegant, 
            user-friendly applications that drive growth and success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={handleDownloadCV}
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-600 text-white"
              >
                <Download className="mr-2 w-4 h-4" />
                Download CV
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline">
                <Link href="/contact">
                  Get In Touch
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>     

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {personalInfo.map((info, index) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-2 border-border/50 hover:border-primary/50 transition-all duration-300">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <info.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="font-semibold text-lg mb-2">{info.label}</h3>
                <p className="text-muted-foreground">{info.value}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-border/50">
            <h2 className="text-3xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                Professional Summary
              </span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">What I Do</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in creating modern, responsive web applications using cutting-edge technologies. 
                  My expertise spans the entire development lifecycle, from initial concept and design to 
                  deployment and maintenance.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With a strong foundation in both frontend and backend development, I deliver comprehensive 
                  solutions that are not only visually appealing but also performant, scalable, and maintainable.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">My Approach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in writing clean, efficient code and following industry best practices. 
                  Every project is approached with attention to detail, focusing on user experience, 
                  performance optimization, and long-term maintainability.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Collaboration and communication are key to my process. I work closely with clients 
                  to understand their vision and translate it into exceptional digital experiences.
                </p>
              </div>
            </div>
          </Card>
        </motion.section>

 <motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="mb-20"
>
  <h2 className="text-3xl font-bold text-center mb-12">
    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
      Technical Expertise
    </span>
  </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto px-6">
        {skills.map((skill, index) => (
          <div key={index} className="mb-6">
            {/* Skill name and percentage */}
            <div className="flex justify-between mb-2">
              <span className="font-medium">{skill.name}</span>
              <span className="text-sm text-gray-400">{skill.level}%</span>
            </div>

            {/* Custom progress bar */}
            <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full bg-white"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Technologies & Tools
            </span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Badge 
                  variant="secondary" 
                  className="text-sm py-2 px-4 bg-accent/50 hover:bg-accent transition-colors"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'} pl-12 md:pl-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 border-border/50 hover:border-primary/50 transition-all duration-300">
                      <div className="flex items-center space-x-2 mb-3">
                        <Briefcase className="w-5 h-5 text-primary" />
                        <Badge variant="outline">{exp.period}</Badge>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                      <p className="text-primary font-medium mb-3">{exp.company}</p>
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                    </Card>
                  </motion.div>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 180 }}
                  className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center z-10"
                >
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-border/50">
            <h2 className="text-3xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-accent/50 hover:bg-accent transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center"
                  >
                    <contact.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold">{contact.label}</h3>
                    <p className="text-muted-foreground text-sm">{contact.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}