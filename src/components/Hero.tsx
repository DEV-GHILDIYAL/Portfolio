import { motion } from 'framer-motion';
import { MapPin, FileText, ArrowRight } from 'lucide-react';
import { GithubIcon } from './ui/Icons';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-6 overflow-hidden bg-dot-pattern">
      {/* Background Gradient Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col"
        >
          {/* Status Strip */}
          <div className="flex flex-wrap items-center gap-4 mb-8 text-xs font-mono">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border-subtle bg-bg-card text-text-secondary shadow-lg">
              <MapPin size={14} className="text-brand-green" />
              <span>Mumbai, India</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-brand-green/30 bg-brand-green/10 text-brand-green shadow-[0_0_15px_rgba(34,197,94,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
              </span>
              <span>Open to Work</span>
            </div>
          </div>

          <h2 className="text-brand-green font-mono mb-4 text-sm md:text-base flex items-center gap-2">
            <span className="animate-pulse">_</span> ./deploy_infrastructure.sh --env=production
          </h2>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-text-primary mb-6 leading-[1.1]">
            Building <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-blue-500">
                resilient
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-brand-green/20 -rotate-2"></span>
            </span> <br />
            infrastructure.
          </h1>
          
          <p className="text-lg md:text-xl text-text-secondary max-w-lg mb-10 leading-relaxed font-light">
            I design, build, and ship complete CI/CD pipelines, robust monitoring stacks, and scalable cloud architecture using <span className="text-text-primary font-medium border-b border-brand-green/30">Terraform, Docker, and AWS</span>. Zero fluff, just systems that work.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="#projects"
              className="flex items-center gap-2 px-6 py-3.5 bg-brand-green text-bg-dark font-bold rounded-lg hover:bg-brand-green/90 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.3)] group"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="/assets/Dev%20Ghildiyal%20Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 border border-border-subtle bg-bg-card hover:bg-bg-card-hover text-text-primary font-medium rounded-lg hover:border-brand-green/50 transition-all duration-300"
            >
              <FileText size={18} className="text-text-secondary group-hover:text-brand-green" />
              Resume
            </a>

            <a 
              href="https://github.com/DEV-GHILDIYAL"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 border border-border-subtle bg-bg-card hover:bg-bg-card-hover text-text-primary font-medium rounded-lg hover:border-brand-green/50 transition-all duration-300"
            >
              <GithubIcon size={18} className="text-text-secondary" />
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Right Column: Visual / Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center mt-12 lg:mt-0"
        >
          {/* Orbital glowing ring */}
          <div className="absolute inset-0 border border-brand-green/20 rounded-full animate-[spin_20s_linear_infinite] pointer-events-none" style={{ width: '450px', height: '450px', left: '50%', top: '50%', marginLeft: '-225px', marginTop: '-225px' }} />
          <div className="absolute inset-0 border border-brand-green/10 rounded-full animate-[spin_15s_linear_infinite_reverse] pointer-events-none" style={{ width: '350px', height: '350px', left: '50%', top: '50%', marginLeft: '-175px', marginTop: '-175px' }} />

          {/* Floating Tech Icons */}
          {/* 1. Terraform - Top Left */}
          <motion.div 
            animate={{ y: [-12, 12, -12], rotate: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-2 left-2 lg:-left-6 bg-bg-card/90 border border-brand-green/30 p-3 rounded-xl shadow-[0_0_25px_rgba(34,197,94,0.18)] z-20 backdrop-blur-md hover:border-brand-green hover:scale-110 transition-all duration-300 group cursor-pointer"
            title="Terraform"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" alt="Terraform" className="w-8 h-8 md:w-10 md:h-10 group-hover:rotate-6 transition-transform" />
          </motion.div>

          {/* 2. Kubernetes - Top Right */}
          <motion.div 
            animate={{ y: [-10, 10, -10], rotate: [0, -8, 0] }}
            transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
            className="absolute top-2 right-2 lg:-right-6 bg-bg-card/90 border border-brand-green/30 p-3 rounded-xl shadow-[0_0_25px_rgba(34,197,94,0.18)] z-20 backdrop-blur-md hover:border-brand-green hover:scale-110 transition-all duration-300 group cursor-pointer"
            title="Kubernetes"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes" className="w-8 h-8 md:w-10 md:h-10 group-hover:rotate-6 transition-transform" />
          </motion.div>

          {/* 3. Linux - Middle Left */}
          <motion.div 
            animate={{ y: [10, -10, 10], x: [-4, 4, -4] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
            className="absolute top-1/2 -translate-y-1/2 -left-6 lg:-left-14 bg-bg-card/90 border border-brand-green/30 p-3 rounded-xl shadow-[0_0_25px_rgba(34,197,94,0.18)] z-20 backdrop-blur-md hover:border-brand-green hover:scale-110 transition-all duration-300 group cursor-pointer"
            title="Linux"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" className="w-8 h-8 md:w-10 md:h-10 group-hover:rotate-6 transition-transform" />
          </motion.div>

          {/* 4. AWS - Middle Right */}
          <motion.div 
            animate={{ y: [-10, 10, -10], x: [4, -4, 4] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/2 -translate-y-1/2 -right-6 lg:-right-14 bg-bg-card/90 border border-brand-green/30 p-3 rounded-xl shadow-[0_0_25px_rgba(34,197,94,0.18)] z-20 backdrop-blur-md hover:border-brand-green hover:scale-110 transition-all duration-300 group cursor-pointer"
            title="AWS"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" className="w-9 h-9 md:w-11 md:h-11 object-contain group-hover:rotate-6 transition-transform" />
          </motion.div>

          {/* 5. Jenkins - Bottom Left */}
          <motion.div 
            animate={{ y: [12, -12, 12], rotate: [0, 8, 0] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
            className="absolute bottom-2 left-2 lg:-left-6 bg-bg-card/90 border border-brand-green/30 p-3 rounded-xl shadow-[0_0_25px_rgba(34,197,94,0.18)] z-20 backdrop-blur-md hover:border-brand-green hover:scale-110 transition-all duration-300 group cursor-pointer"
            title="Jenkins"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" alt="Jenkins" className="w-8 h-8 md:w-10 md:h-10 group-hover:rotate-6 transition-transform" />
          </motion.div>

          {/* 6. Docker - Bottom Right */}
          <motion.div 
            animate={{ y: [14, -14, 14], rotate: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            className="absolute bottom-2 right-2 lg:-right-6 bg-bg-card/90 border border-brand-green/30 p-3 rounded-xl shadow-[0_0_25px_rgba(34,197,94,0.18)] z-20 backdrop-blur-md hover:border-brand-green hover:scale-110 transition-all duration-300 group cursor-pointer"
            title="Docker"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="w-8 h-8 md:w-10 md:h-10 group-hover:rotate-6 transition-transform" />
          </motion.div>

          {/* Main Profile Image Container */}
          <div className="relative z-10 w-64 h-72 md:w-80 md:h-96 rounded-2xl overflow-hidden border border-brand-green/40 shadow-[0_0_50px_rgba(34,197,94,0.2)] rotate-3 hover:rotate-0 transition-transform duration-500 group">
            <img 
              src="/assets/Dev%20Ghildiyal%20Image.png" 
              alt="Dev Ghildiyal" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            {/* Moody overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-brand-green/10 opacity-80 group-hover:opacity-50 transition-opacity duration-500" />
            
            {/* Glitchy terminal accent overlay */}
            <div className="absolute bottom-4 left-4 font-mono text-brand-green text-xs opacity-70">
              <div className="flex flex-col gap-1">
                <span>[root@sys ~]# _</span>
                <span className="text-[10px] text-text-secondary">SYSTEM.STATUS == ONLINE</span>
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
