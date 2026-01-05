import React, { useState, useEffect } from 'react';
import { 
  Github, Linkedin, Mail, ExternalLink, Moon, Sun, 
  Code2, Database, Brain, Microscope, Briefcase, 
  GraduationCap, FileText, Download, Eye, Server, 
  Cloud, Terminal, Activity, Layers, Cpu 
} from 'lucide-react';

const App = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    isDark ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
  }, [isDark]);

  const projects = [
    {
      title: "Neural Edge Detection",
      subtitle: "Transfer Learning & Medical Imaging",
      tech: ["PyTorch", "ResNet18", "OpenCV", "Canny"],
      desc: "Hybrid pipeline combining ResNet18 and Canny algorithm for medical boundary extraction. Reduced cross-entropy loss by 44%.",
      icon: <Layers className="text-purple-500" />
    },
    {
      title: "Lung Disease Detection AI",
      subtitle: "Deep Learning Research",
      tech: ["Python", "TensorFlow", "Keras", "OpenCV"],
      desc: "CNN-based system to detect pneumonia from chest X-rays. Built preprocessing pipelines and a React interface for visualization.",
      icon: <Microscope className="text-rose-500" />
    },
    {
      title: "Predictive Analytics Engine",
      subtitle: "Data Mining & Modeling",
      tech: ["Scikit-learn", "Pandas", "NumPy"],
      desc: "Applied ML pipelines for data mining and predictive modeling as part of UAB graduate research.",
      icon: <Brain className="text-sky-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050507] text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans">
      
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/80 dark:bg-[#050507]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-black tracking-tighter">S V N CHANDANA LAVANYA LELLA</span>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest">
              <a href="#about" className="hover:text-sky-500 transition">About</a>
              <a href="#work" className="hover:text-sky-500 transition">Work</a>
              <a href="#education" className="hover:text-sky-500 transition">Education</a>
              <a href="#projects" className="hover:text-sky-500 transition">Research</a>
              <a href="#skills" className="hover:text-sky-500 transition">Skills</a>
              <a href="#resume" className="text-sky-500 font-black">Resume</a>
            </div>
            <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 transition-all">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <header id="about" className="pt-40 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-500 text-[10px] font-bold tracking-widest mb-6 border border-sky-500/20 uppercase">
              Software Engineer • AI/ML Researcher
          </div>
           <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9]">
            Solving complex <span className="text-slate-400 dark:text-slate-700 italic">problems</span> with code.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-3xl leading-relaxed">
            Software Engineer with experience at **Wipro** and **UAB**. Bridging the gap between scalable cloud applications (**AWS/Spring Boot**) and deep learning research in **Medical Imaging**.
          </p>
          <div className="flex gap-4">
            <a href="mailto:lavanyalella.svn@gmail.com" className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-sky-500/20 flex items-center gap-2">
              <Mail size={18} /> Contact Me
            </a>
            <SocialLink href="https://linkedin.com/in/lavanyalella" icon={<Linkedin />} />
            <SocialLink href="https://github.com" icon={<Github />} />
          </div>
        </div>
      </header>

      {/* Professional Experience */}
      <section id="work" className="py-24 px-6 bg-white dark:bg-slate-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black mb-12 flex items-center gap-3"><Briefcase className="text-sky-500"/> Professional Experience</h2>
          <div className="space-y-12">
            <div className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800 group hover:border-sky-500 transition-colors">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-800 group-hover:bg-sky-500 transition-all"></div>
              <h3 className="text-2xl font-bold">Web Developer @ UAB Library</h3>
              <p className="text-sky-500 font-bold mb-4">React.js | Java Spring Boot | AWS</p>
              <ul className="text-slate-600 dark:text-slate-400 space-y-2 list-disc ml-4 font-sans">
                <li>Improved API response time by **35%** using Java Spring Boot microservices.</li>
                <li>Managed deployment on **AWS EC2 and S3**, achieving 99.5% uptime.</li>
                <li>Optimized resource efficiency by **20%** via cloud configuration tuning.</li>
              </ul>
            </div>

            <div className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800 group hover:border-sky-500 transition-colors">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-800 group-hover:bg-sky-500 transition-all"></div>
              <h3 className="text-2xl font-bold">Technical Associate @ Wipro</h3>
              <p className="text-sky-500 font-bold mb-4">AngularJS | REST APIs | Agile</p>
              <ul className="text-slate-600 dark:text-slate-400 space-y-2 list-disc ml-4 font-sans">
                <li>Developed enterprise web modules using AngularJS and JavaScript.</li>
                <li>Integrated frontend with RESTful APIs for efficient data communication.</li>
                <li>Performed UI defect resolution and functional testing across Agile cycles.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black mb-12 flex items-center gap-3"><GraduationCap className="text-sky-500"/> Education</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 transition-all hover:border-sky-500/50">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold leading-tight">Masters in Computer Science</h3>
                <span className="text-xs font-mono bg-sky-500/10 text-sky-500 px-3 py-1 rounded-full">2024 - 2025</span>
              </div>
              <p className="text-sky-500 font-bold mb-4">University of Alabama at Birmingham (UAB)</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-sans mb-4">Focus: Artificial Intelligence, Machine Learning, Advanced Algorithms, Cloud Computing, and Computer Vision.</p>
              <div className="flex flex-wrap gap-2">
                {['Deep Learning', 'Cloud Computing', 'Database Systems', 'Network Security'].map(tag => (
                  <span key={tag} className="text-[10px] font-bold px-2 py-1 bg-white dark:bg-slate-800 rounded uppercase border border-slate-200 dark:border-slate-700">{tag}</span>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 transition-all hover:border-sky-500/50">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold leading-tight">B.Tech in Computer Science</h3>
                <span className="text-xs font-mono bg-sky-500/10 text-sky-500 px-3 py-1 rounded-full">2018 - 2022</span>
              </div>
              <p className="text-sky-500 font-bold mb-4">Geethanjali College of Engineering</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-sans mb-4">Strong foundation in software engineering principles, OOPs, and system design.</p>
              <div className="flex flex-wrap gap-2">
                {['Java', 'DSA', 'SQL', 'SDLC'].map(tag => (
                  <span key={tag} className="text-[10px] font-bold px-2 py-1 bg-white dark:bg-slate-800 rounded uppercase border border-slate-200 dark:border-slate-700">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Projects */}
      <section id="projects" className="py-24 px-6 bg-slate-100 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-black mb-4 flex items-center gap-3"><Brain className="text-sky-500"/> Research & AI Projects</h2>
            <div className="h-1.5 w-20 bg-sky-500"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:scale-[1.02] transition-all">
                <div className="mb-6">{p.icon}</div>
                <h4 className="text-xs font-black text-sky-500 uppercase tracking-widest mb-2">{p.subtitle}</h4>
                <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed font-sans">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map(t => (
                    <span key={t} className="text-[10px] font-bold px-2 py-1 bg-slate-100 dark:bg-slate-900 rounded uppercase tracking-tighter">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section id="skills" className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-16 text-center">Technical Arsenal</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <SkillCategory title="Languages" skills={['Python', 'Java', 'JavaScript', 'SQL', 'TypeScript', 'C++']} />
            <SkillCategory title="AI / ML" skills={['TensorFlow', 'PyTorch', 'CNNs', 'Transfer Learning', 'Computer Vision']} />
            <SkillCategory title="Cloud & Web" skills={['AWS (EC2/S3)', 'React.js', 'Spring Boot', 'REST APIs', 'Microservices']} />
            <SkillCategory title="Engineering" skills={['Agile', 'Docker', 'Git', 'Postman', 'Linux']} />
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-24 px-6 bg-sky-500/5 dark:bg-sky-500/5 border-y border-sky-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex p-4 rounded-full bg-sky-500/10 text-sky-500 mb-6">
            <FileText size={40} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter uppercase">Resume</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-xl mx-auto font-sans leading-relaxed">
            Detailed overview of my Masters research at **UAB**, technical associate role at **Wipro**, and specialized technical expertise in ML and Web Systems.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/Chandana_Lavanya_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg font-bold hover:border-sky-500 transition-all shadow-sm"
            >
              <Eye size={18} /> View Resume
            </a>
            <a 
              href="/Chandana_Lavanya_Resume.pdf" 
              download="Chandana_Lavanya_Resume.pdf"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-sky-500 text-white rounded-lg font-bold hover:bg-sky-600 transition-all shadow-lg shadow-sky-500/25"
            >
              <Download size={18} /> Download Resume.pdf
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-500 text-sm border-t border-slate-100 dark:border-slate-800">
         [ UAB Masters Computer Science // 2024 - 2025 ] • Chandana Lavanya
      </footer>
    </div>
  );
};

const SocialLink = ({ href, icon }) => (
  <a href={href} target="_blank" rel="noreferrer" className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-sky-500 hover:text-white transition-all">
    {React.cloneElement(icon, { size: 20 })}
  </a>
);

const SkillCategory = ({ title, skills }) => (
  <div>
    <h3 className="text-sky-400 font-bold mb-4 uppercase tracking-widest text-xs">{title}</h3>
    <ul className="space-y-2">
      {skills.map(s => <li key={s} className="text-slate-300 flex items-center gap-2 font-mono text-sm"><div className="w-1 h-1 bg-sky-500"></div> {s}</li>)}
    </ul>
  </div>
);

export default App;