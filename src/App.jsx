import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Award, Briefcase, GraduationCap, Code, ExternalLink, ChevronDown, Menu, X, Sun, Moon, Star, Zap } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
          
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const skills = [
    { name: 'Flutter', icon: '📱', level: 90 },
    { name: 'React.js', icon: '⚛️', level: 85 },
    { name: 'Python', icon: '🐍', level: 90 },
    { name: 'Django', icon: '🎸', level: 80 },
    { name: 'C', icon: '⚙️', level: 75 },
    { name: 'Machine Learning', icon: '🤖', level: 80 },
    { name: 'AWS', icon: '☁️', level: 70 },
    { name: 'GitHub', icon: '🐙', level: 85 }
  ];
  
  const projects = [
    {
      title: 'Vehicle Pooling App using Blockchain',
      date: 'Mar 2025',
      description: 'Built a decentralized carpooling application using Solidity smart contracts, IPFS for decentralized file storage, and Flutter for mobile frontend.',
      tech: ['Solidity', 'IPFS', 'Flutter', 'Blockchain'],
      gradient: 'from-purple-500 to-pink-500',
      icon: '🚗'
    },
    {
      title: 'Matrix 2.0 – Official Hackathon Website',
      date: '2024',
      description: 'Designed and developed the official website for Matrix Hackathon hosted by IEEE SB GEC Palakkad. Ensured responsive design and smooth user experience.',
      tech: ['React', 'Web Design', 'Responsive Design'],
      gradient: 'from-blue-500 to-cyan-500',
      icon: '🌐'
    },
    {
      title: 'Blink – Eye Care Website',
      date: 'Apr 2024',
      description: 'Developed a platform for vision testing and eye exercises. Features include interactive games to encourage healthy eye habits and early detection of visual issues.',
      tech: ['Web Development', 'Interactive Games', 'Healthcare'],
      gradient: 'from-green-500 to-emerald-500',
      icon: '👁️'
    }
  ];

  const experiences = [
    {
      title: 'Flutter Intern',
      company: 'Current Position',
      period: 'Jun 2, 2025 – Present',
      description: 'Contributing to developing cross-platform mobile applications using Flutter and Dart. Responsible for UI implementation, API integration, and performance optimization.',
      icon: '📱',
      status: 'current'
    },
    {
      title: 'Web Developer',
      company: 'IEEE SB GEC PALAKKAD',
      period: 'Jan 2024 – Feb 2025',
      description: 'Contributed to official websites and design systems for IEEE initiatives.',
      icon: '💻',
      status: 'completed'
    },
    {
      title: 'Execom Member',
      company: 'Kerala Blockchain Academy Innovation Club (KBAIC)',
      period: 'Jan 2024 – Feb 2025',
      description: 'Active member contributing to blockchain innovation projects at GEC Palakkad.',
      icon: '🔗',
      status: 'completed'
    }
  ];

  const certifications = [
    { name: 'Programming, Data Structures, and Algorithms using Python', provider: 'NPTEL', icon: '🐍' },
    { name: 'Python Programming', provider: 'Edgaadi', icon: '🎓' },
    { name: 'Machine Learning', provider: 'SuperDataScience', icon: '🤖' }
  ];

  const themeClasses = {
    bg: isDarkMode ? 'bg-gray-900' : 'bg-gray-50',
    cardBg: isDarkMode ? 'bg-gray-800' : 'bg-white',
    text: isDarkMode ? 'text-gray-100' : 'text-gray-800',
    textSecondary: isDarkMode ? 'text-gray-300' : 'text-gray-600',
    border: isDarkMode ? 'border-gray-700' : 'border-gray-200',
    hover: isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${themeClasses.bg}`}>
      {/* Cursor Trail Effect */}
      <div 
        className="fixed pointer-events-none z-50 w-6 h-6 rounded-full mix-blend-difference bg-white"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transition: 'all 0.1s ease-out'
        }}
      />

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 ${isDarkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full opacity-20`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.6); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .glass-morphism {
          backdrop-filter: blur(16px);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .glass-morphism-dark {
          backdrop-filter: blur(16px);
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full ${isDarkMode ? 'glass-morphism-dark' : 'glass-morphism'} z-50 shadow-lg`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Jubuhan TT
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 px-3 py-2 rounded-lg ${
                    activeSection === section 
                      ? `text-blue-600 font-semibold ${isDarkMode ? 'bg-gray-800' : 'bg-blue-50'}` 
                      : `${themeClasses.textSecondary} hover:text-blue-600 ${themeClasses.hover}`
                  }`}
                >
                  {section}
                </button>
              ))}
              
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-all duration-300 ${themeClasses.hover} ${themeClasses.text}`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg ${themeClasses.text}`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                className={themeClasses.text}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-2">
                {['home', 'about', 'experience', 'projects', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize text-left py-2 px-3 rounded-lg transition-colors ${themeClasses.textSecondary} hover:text-blue-600 ${themeClasses.hover}`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className={`min-h-screen flex items-center justify-center bg-gradient-to-br ${isDarkMode ? 'from-gray-900 to-blue-900' : 'from-blue-50 to-indigo-100'} pt-20 relative overflow-hidden`}>
        {/* Geometric Background Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-20 left-10 w-32 h-32 ${isDarkMode ? 'bg-blue-600/20' : 'bg-blue-200/50'} rounded-lg transform rotate-45 animate-pulse`} />
          <div className={`absolute top-40 right-20 w-24 h-24 ${isDarkMode ? 'bg-purple-600/20' : 'bg-purple-200/50'} rounded-full animate-bounce`} />
          <div className={`absolute bottom-32 left-1/4 w-20 h-20 ${isDarkMode ? 'bg-pink-600/20' : 'bg-pink-200/50'} transform rotate-12`} />
          <div className={`absolute bottom-20 right-1/3 w-16 h-16 ${isDarkMode ? 'bg-green-600/20' : 'bg-green-200/50'} rounded-full`} />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className={`transition-all duration-1000 ${isVisible.home ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            
            {/* Profile Section with Creative Layout */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-12">
              
              {/* Left Side - Decorative Boxes */}
              <div className="hidden lg:flex flex-col gap-4">
                <div className={`w-20 h-20 ${isDarkMode ? 'bg-gradient-to-br from-blue-600 to-blue-800' : 'bg-gradient-to-br from-blue-400 to-blue-600'} rounded-lg transform rotate-12 animate-pulse`} />
                <div className={`w-16 h-16 ${isDarkMode ? 'bg-gradient-to-br from-purple-600 to-purple-800' : 'bg-gradient-to-br from-purple-400 to-purple-600'} rounded-full animate-bounce`} style={{animationDelay: '0.5s'}} />
                <div className={`w-12 h-12 ${isDarkMode ? 'bg-gradient-to-br from-pink-600 to-pink-800' : 'bg-gradient-to-br from-pink-400 to-pink-600'} transform -rotate-12`} />
              </div>

              {/* Center - Profile Image and Name */}
              <div className="relative">
                {/* Profile Image Container */}
                <div className="relative group">
                  {/* Animated Border */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
                  
                  {/* Profile Image */}
                  <div className={`relative w-48 h-48 md:w-56 md:h-56 rounded-full ${themeClasses.cardBg} shadow-2xl overflow-hidden border-4 border-white/20`}>
                    {/* Placeholder Profile Image - You can replace this with your actual image */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <div className="text-6xl md:text-7xl font-bold text-white opacity-90">
                        JT
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <div className="text-white text-sm font-medium">Software Engineer</div>
                    </div>
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg animate-pulse" />
                </div>

                {/* Name with Creative Typography */}
                <div className="text-center mt-8">
                  <h1 className="text-4xl md:text-6xl font-bold mb-2">
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Jubuhan
                    </span>
                  </h1>
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                      TT
                    </span>
                  </h1>
                </div>
              </div>

              {/* Right Side - More Decorative Boxes */}
              <div className="hidden lg:flex flex-col gap-4">
                <div className={`w-12 h-12 ${isDarkMode ? 'bg-gradient-to-br from-green-600 to-green-800' : 'bg-gradient-to-br from-green-400 to-green-600'} transform rotate-45`} />
                <div className={`w-16 h-16 ${isDarkMode ? 'bg-gradient-to-br from-yellow-600 to-yellow-800' : 'bg-gradient-to-br from-yellow-400 to-yellow-600'} rounded-lg animate-pulse`} style={{animationDelay: '1s'}} />
                <div className={`w-20 h-20 ${isDarkMode ? 'bg-gradient-to-br from-indigo-600 to-indigo-800' : 'bg-gradient-to-br from-indigo-400 to-indigo-600'} rounded-full transform -rotate-12 animate-bounce`} style={{animationDelay: '1.5s'}} />
              </div>
            </div>

            {/* Mobile Decorative Boxes */}
            <div className="flex lg:hidden justify-center gap-4 mb-8">
              <div className={`w-16 h-16 ${isDarkMode ? 'bg-gradient-to-br from-blue-600 to-blue-800' : 'bg-gradient-to-br from-blue-400 to-blue-600'} rounded-lg transform rotate-12 animate-pulse`} />
              <div className={`w-14 h-14 ${isDarkMode ? 'bg-gradient-to-br from-purple-600 to-purple-800' : 'bg-gradient-to-br from-purple-400 to-purple-600'} rounded-full animate-bounce`} />
              <div className={`w-12 h-12 ${isDarkMode ? 'bg-gradient-to-br from-pink-600 to-pink-800' : 'bg-gradient-to-br from-pink-400 to-pink-600'} transform -rotate-12`} />
              <div className={`w-14 h-14 ${isDarkMode ? 'bg-gradient-to-br from-green-600 to-green-800' : 'bg-gradient-to-br from-green-400 to-green-600'} rounded-lg animate-pulse`} style={{animationDelay: '0.5s'}} />
            </div>

            {/* Role and Description */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Star className="w-6 h-6 text-yellow-500 animate-spin" />
                <h2 className={`text-2xl md:text-3xl font-light ${themeClasses.text}`}>
                  Software Engineer
                </h2>
                <Zap className="w-6 h-6 text-yellow-500 animate-bounce" />
              </div>
              
              <p className={`text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed ${themeClasses.textSecondary}`}>
                Recent Computer Science graduate skilled in web and app development using ReactJS, Flutter, Django, and Python. 
                Passionate about building scalable, user-centric solutions with a focus on UI/UX, 
                machine learning, and blockchain innovation.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a 
                href="mailto:jubuhantt@gmail.com" 
                className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <Mail size={20} className="group-hover:animate-bounce" />
                Get In Touch
              </a>
              <a 
                href="https://github.com/jubuhan" 
                className={`group flex items-center gap-2 px-8 py-4 border-2 ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
              >
                <Github size={20} className="group-hover:rotate-12 transition-transform" />
                View GitHub
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center">
              <button 
                onClick={() => scrollToSection('about')}
                className="animate-bounce hover:animate-pulse"
              >
                <ChevronDown size={32} className={`${themeClasses.textSecondary} hover:text-blue-600 transition-colors`} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${themeClasses.cardBg}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className={`transition-all duration-1000 ${isVisible.about ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            <h2 className={`text-4xl font-bold text-center mb-16 ${themeClasses.text}`}>About Me</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <MapPin size={20} className="text-blue-600" />
                  <span className={themeClasses.textSecondary}>Vengera, Kerala, India</span>
                </div>
                
                <p className={`text-lg mb-8 leading-relaxed ${themeClasses.textSecondary}`}>
                  Graduate with Bachelor of Technology in Computer Science and Engineering 
                  from Government Engineering College, Sreekrishnapuram (CGPA: 8.12/10). 
                  I'm passionate about innovation and research-driven development, particularly 
                  in sustainable technology and blockchain applications.
                </p>

                <div className="mb-8">
                  <h3 className={`text-xl font-semibold mb-6 ${themeClasses.text}`}>Education</h3>
                  <div className="space-y-6">
                    <div className={`flex items-start gap-4 p-4 rounded-xl ${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'} hover:shadow-lg transition-all duration-300`}>
                      <GraduationCap className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h4 className={`font-semibold ${themeClasses.text}`}>B.Tech in Computer Science and Engineering</h4>
                        <p className={themeClasses.textSecondary}>Government Engineering College, Sreekrishnapuram</p>
                        <p className={`text-sm ${themeClasses.textSecondary} opacity-75`}>2021–2025 | CGPA: 8.12/10 | Graduated</p>
                      </div>
                    </div>
                    <div className={`flex items-start gap-4 p-4 rounded-xl ${isDarkMode ? 'bg-gray-700' : 'bg-green-50'} hover:shadow-lg transition-all duration-300`}>
                      <GraduationCap className="text-green-600 mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h4 className={`font-semibold ${themeClasses.text}`}>Plus Two (HSE)</h4>
                        <p className={themeClasses.textSecondary}>PPTMYHSS, Cherur</p>
                        <p className={`text-sm ${themeClasses.textSecondary} opacity-75`}>2018–2020 | Score: 83%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className={`text-xl font-semibold mb-6 ${themeClasses.text}`}>Technical Skills</h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div 
                      key={skill.name} 
                      className={`p-4 rounded-xl ${themeClasses.cardBg} ${themeClasses.border} border hover:shadow-lg transition-all duration-300 group`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className={`font-medium ${themeClasses.text} group-hover:text-blue-600 transition-colors`}>
                            {skill.name}
                          </span>
                        </div>
                        <span className={`text-sm ${themeClasses.textSecondary}`}>{skill.level}%</span>
                      </div>
                      <div className={`w-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2`}>
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: isVisible.about ? `${skill.level}%` : '0%' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <h3 className={`text-xl font-semibold mb-4 ${themeClasses.text}`}>Achievements</h3>
                  <div className={`p-6 bg-gradient-to-r ${isDarkMode ? 'from-blue-900/50 to-purple-900/50' : 'from-blue-50 to-purple-50'} rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                    <div className="flex items-start gap-4">
                      <Award className="text-yellow-500 mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h4 className={`font-semibold text-lg ${isDarkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                          Best Web Designer 2024–2025
                        </h4>
                        <p className={themeClasses.textSecondary}>IEEE SB GEC PALAKKAD</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 ${themeClasses.bg}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className={`transition-all duration-1000 ${isVisible.experience ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            <h2 className={`text-4xl font-bold text-center mb-16 ${themeClasses.text}`}>Experience</h2>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className={`${themeClasses.cardBg} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${
                    exp.status === 'current' ? 'border-green-500' : 'border-blue-500'
                  } group hover:transform hover:-translate-y-2`}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{exp.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className={`text-xl font-semibold ${themeClasses.text} group-hover:text-blue-600 transition-colors`}>
                          {exp.title}
                        </h3>
                        {exp.status === 'current' && (
                          <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full animate-pulse">
                            Current
                          </span>
                        )}
                      </div>
                      <h4 className="text-blue-600 font-medium mb-2">{exp.company}</h4>
                      <p className={`text-sm mb-4 ${themeClasses.textSecondary} opacity-75`}>{exp.period}</p>
                      <p className={`leading-relaxed ${themeClasses.textSecondary}`}>{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <h3 className={`text-2xl font-semibold mb-8 ${themeClasses.text} text-center`}>Certifications</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <div 
                    key={index} 
                    className={`${themeClasses.cardBg} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:transform hover:-translate-y-2`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">{cert.icon}</div>
                      <div>
                        <h4 className={`font-semibold mb-2 ${themeClasses.text} group-hover:text-blue-600 transition-colors`}>
                          {cert.name}
                        </h4>
                        <p className={`text-sm ${themeClasses.textSecondary}`}>{cert.provider}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${themeClasses.cardBg}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className={`transition-all duration-1000 ${isVisible.projects ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            <h2 className={`text-4xl font-bold text-center mb-16 ${themeClasses.text}`}>Featured Projects</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className={`${themeClasses.cardBg} rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border overflow-hidden group hover:transform hover:-translate-y-4`}
                >
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{project.icon}</span>
                      <h3 className={`text-xl font-semibold ${themeClasses.text} group-hover:text-blue-600 transition-colors`}>
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-sm text-blue-600 mb-4 font-medium">{project.date}</p>
                    <p className={`mb-6 leading-relaxed ${themeClasses.textSecondary}`}>{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className={`px-3 py-1 text-xs rounded-full font-medium ${
                            isDarkMode 
                              ? 'bg-blue-900/50 text-blue-300' 
                              : 'bg-blue-100 text-blue-800'
                          } hover:scale-105 transition-transform cursor-default`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 bg-gradient-to-br ${isDarkMode ? 'from-gray-900 to-blue-900' : 'from-blue-600 to-purple-700'} text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible.contact ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
            <p className="text-xl mb-12 opacity-90">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <a 
                href="mailto:jubuhantt@gmail.com" 
                className="group flex items-center justify-center gap-3 p-6 glass-morphism rounded-xl hover:glass-morphism-dark transition-all duration-300 transform hover:scale-105"
              >
                <Mail size={24} className="group-hover:animate-bounce" />
                <span className="font-medium">jubuhantt@gmail.com</span>
              </a>
              <a 
                href="tel:+917034361499" 
                className="group flex items-center justify-center gap-3 p-6 glass-morphism rounded-xl hover:glass-morphism-dark transition-all duration-300 transform hover:scale-105"
              >
                <Phone size={24} className="group-hover:animate-bounce" />
                <span className="font-medium">+91 70343 61499</span>
              </a>
            </div>
            
            <div className="flex justify-center space-x-6">
              <a 
                href="https://linkedin.com/in/jubuhan-tt" 
                className="group p-4 glass-morphism rounded-xl hover:glass-morphism-dark transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={24} className="group-hover:text-blue-400 transition-colors" />
              </a>
              <a 
                href="https://github.com/jubuhan" 
                className="group p-4 glass-morphism rounded-xl hover:glass-morphism-dark transition-all duration-300 transform hover:scale-110"
              >
                <Github size={24} className="group-hover:text-purple-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${isDarkMode ? 'bg-black' : 'bg-gray-900'} text-white py-8`}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Jubuhan TT. Built with React, Tailwind CSS, and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;