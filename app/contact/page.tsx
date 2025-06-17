'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle,
  Clock,
  Globe,
  Linkedin,
  Github,
  CheckCircle,
  User,
  Briefcase
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using mailto
      const emailSubject = `New Project Inquiry: ${formData.subject}`;
      const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent from Muhammad Hammad Portfolio Contact Form
      `;

      const mailtoLink = `mailto:hammadzahid221@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;

      // Create professional WhatsApp message
      const whatsappMessage = `
*New Project Inquiry - Muhammad Hammad Portfolio*

*Client Information:*
• Name: ${formData.name}
• Email: ${formData.email}
• Subject: ${formData.subject}

*Project Details:*
${formData.message}

*Sent via: Professional Portfolio Contact Form*
      `.trim();

      // WhatsApp Business number
      const phoneNumber = '+923118270539';
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      
      // Open WhatsApp after a short delay
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1000);

      toast({
        title: "Message Sent Successfully!",
        description: "Your inquiry has been sent via email and WhatsApp. I'll respond within 24 hours.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hammadzahid221@gmail.com",
      href: "mailto:hammadzahid221@gmail.com",
      color: "from-blue-500 to-cyan-500",
      description: "For business inquiries and collaborations"
    },
    // {
    //   icon: Phone,
    //   label: "Direct Phone",
    //   value: "+92 311 8270539",
    //   href: "tel:+923118270539",
    //   color: "from-green-500 to-teal-500",
    //   description: "Available during business hours"
    // },
    {
      icon: MessageCircle,
      label: "WhatsApp ",
      value: "+923118270539",
      href: "https://wa.me/923118270539",
      color: "from-green-500 to-emerald-500",
      description: "Quick responses and project discussions"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pakistan",
      // href: "#",
      color: "from-purple-500 to-pink-500",
      description: "Available for remote work globally"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Hammadprogrammer",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/hammad-zahid-543a652a6/",
      color: "hover:text-blue-400"
    },
    {
      icon: Globe,
      label: "Portfolio",
      href: "/",
      color: "hover:text-green-400"
    }
  ];

  const whyChooseMe = [
    {
      icon: CheckCircle,
      title: "Professional Excellence",
      description: "Committed to delivering high-quality solutions that exceed expectations"
    },
    {
      icon: User,
      title: "Client-Focused Approach",
      description: "Your success is my priority. I work closely with clients throughout the project"
    },
    {
      icon: Briefcase,
      title: "Proven Track Record",
      description: "30+ successful projects with 100% client satisfaction rate"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-24 h-24 mb-8"
          >
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center"
            >
              <Mail className="w-12 h-12 text-white" />
            </motion.div>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your ideas into exceptional digital experiences? 
            I'm here to help you build innovative solutions that drive success and growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          {/* <form autoComplete='off'></form> */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}  
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-border/50">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold mb-2">Start Your Project</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you via email and WhatsApp within 24 hours 
                  with a detailed project proposal.
                </p>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-6" autoComplete='off'>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                       autoComplete="of"
                      required
                      className="transition-all duration-300 focus:scale-105 bg-background"
                    />
                  </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@company.com"
                        
                        required
                        className="transition-all duration-300 focus:scale-105 bg-background"
                      />
                    </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="space-y-2"
                >
                  <Label htmlFor="subject">Project Type *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g., E-commerce Website, Web Application, API Development"
                    autoComplete='off'
                    required
                    className="transition-all duration-300 focus:scale-105 bg-background"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="space-y-2"
                >
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please describe your project requirements, timeline, budget range, and any specific features you need..."
                    autoComplete='off'
                    required
                    rows={6}
                    className="transition-all duration-300 focus:scale-105 resize-none bg-background"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-600 text-white text-lg py-6"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                        />
                      ) : (
                        <Send className="w-5 h-5 mr-2" />
                      )}
                      {isSubmitting ? 'Sending...' : 'Send'}
                    </Button>
                  </motion.div>
                </motion.div>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer">
                    <motion.a
                      href={info.href}
                      className="flex items-start space-x-4"
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                      >
                        <info.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{info.label}</h3>
                        <p className="text-primary font-medium mb-2">{info.value}</p>
                        <p className="text-muted-foreground text-sm">{info.description}</p>
                      </div>
                    </motion.a>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Why Choose Me */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 border-border/50">
                <h3 className="font-semibold text-lg mb-6 text-center">Why Choose Me?</h3>
                <div className="space-y-4">
                  {whyChooseMe.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.1 + index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0"
                      >
                        <item.icon className="w-4 h-4 text-white" />
                      </motion.div>
                      <div>
                        <h4 className="font-medium mb-1">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Availability Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 border-border/50">
                <div className="flex items-center space-x-4 mb-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center"
                  >
                    <Clock className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-lg">Current Availability</h3>
                    <p className="text-green-500 font-medium">Available for New Projects</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  I'm currently accepting new projects and collaborations. 
                  Let's discuss how I can help bring your vision to life!
                </p>
                <div className="text-sm text-muted-foreground">
                  <p>• Response time: Within 24 hours</p>
                  <p>• Project start: Within 1-2 weeks</p>
                  <p>• Communication: Regular updates throughout</p>
                </div>
              </Card>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 border-border/50">
                <h3 className="font-semibold text-lg mb-4 text-center">Connect With Me</h3>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 rounded-full bg-accent hover:bg-accent/80 transition-all duration-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}