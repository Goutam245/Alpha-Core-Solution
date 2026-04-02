import { useEffect, useRef, useState } from 'react';
import { MapPin, Building2, Stethoscope, GraduationCap, ShoppingBag } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Import images
import corporateImg from '@/assets/projects/corporate.jpg';
import datacenterImg from '@/assets/projects/datacenter.jpg';
import hospitalImg from '@/assets/projects/hospital.jpg';

const Projects = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const sectionRef = useRef<HTMLDivElement>(null);
  const isArabic = language === 'ar';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const tabs = [
    { id: 'all', label: isArabic ? 'جميع المشاريع' : 'All Projects' },
    { id: 'government', label: isArabic ? 'حكومي' : 'Government' },
    { id: 'corporate', label: isArabic ? 'الشركات' : 'Corporate' },
    { id: 'healthcare', label: isArabic ? 'الرعاية الصحية' : 'Healthcare' },
  ];

  const projects = [
    {
      title: isArabic ? 'المقر الحكومي المركزي' : 'Government Ministry Complex',
      location: isArabic ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia',
      image: corporateImg,
      category: 'government',
      icon: Building2,
      description: isArabic 
        ? 'نظام أمني متكامل يشمل التحكم بالدخول والمراقبة'
        : 'Integrated security system with access control and surveillance',
      stats: [
        { value: '50+', label: isArabic ? 'كاميرات' : 'Cameras' },
        { value: '200+', label: isArabic ? 'نقاط تحكم' : 'Access Points' },
      ],
    },
    {
      title: isArabic ? 'مركز البيانات الوطني' : 'National Data Center',
      location: isArabic ? 'جدة، المملكة العربية السعودية' : 'Jeddah, Saudi Arabia',
      image: datacenterImg,
      category: 'corporate',
      icon: Building2,
      description: isArabic 
        ? 'حماية متقدمة للبنية التحتية الحيوية'
        : 'Advanced protection for critical infrastructure',
      stats: [
        { value: '24/7', label: isArabic ? 'مراقبة' : 'Monitoring' },
        { value: '99.9%', label: isArabic ? 'الموثوقية' : 'Uptime' },
      ],
    },
    {
      title: isArabic ? 'المستشفى التخصصي' : 'Specialized Hospital',
      location: isArabic ? 'الدمام، المملكة العربية السعودية' : 'Dammam, Saudi Arabia',
      image: hospitalImg,
      category: 'healthcare',
      icon: Stethoscope,
      description: isArabic 
        ? 'أمان شامل للمرافق الطبية'
        : 'Comprehensive security for medical facilities',
      stats: [
        { value: '100+', label: isArabic ? 'كاميرات' : 'Cameras' },
        { value: '50+', label: isArabic ? 'نقاط' : 'Points' },
      ],
    },
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-gradient-to-b from-background via-card/30 to-background bg-acs-pattern"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="container-premium relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span
            className={`inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } ${isArabic ? 'font-arabic' : ''}`}
          >
            {isArabic ? 'مشاريعنا' : 'OUR PROJECTS'}
          </span>
          <h2
            className={`text-section font-bold text-foreground mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } ${isArabic ? 'font-arabic' : 'font-display'}`}
            style={{ transitionDelay: '100ms' }}
          >
            {isArabic ? (
              <>
                حماية البنية التحتية الحيوية
                <br />
                <span className="gradient-text">في المملكة العربية السعودية</span>
              </>
            ) : (
              <>
                Protecting Saudi Arabia's
                <br />
                <span className="gradient-text">Critical Infrastructure</span>
              </>
            )}
          </h2>
        </div>

        {/* Project Tabs */}
        <div
          className={`flex justify-center flex-wrap gap-2 mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'gradient-primary text-primary-foreground shadow-glow'
                  : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
              } ${isArabic ? 'font-arabic' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden card-hover transition-all duration-700 bg-card border border-border/30 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
                  <span className={`text-xs font-medium text-primary ${isArabic ? 'font-arabic' : ''}`}>
                    {project.category === 'government' ? (isArabic ? 'حكومي' : 'Government') :
                     project.category === 'corporate' ? (isArabic ? 'شركات' : 'Corporate') :
                     (isArabic ? 'صحي' : 'Healthcare')}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className={`text-sm ${isArabic ? 'font-arabic' : ''}`}>{project.location}</span>
                </div>
                
                <h3 className={`text-xl font-bold text-foreground mb-3 ${isArabic ? 'font-arabic' : 'font-display'}`}>
                  {project.title}
                </h3>
                
                <p className={`text-muted-foreground text-sm mb-4 ${isArabic ? 'font-arabic' : ''}`}>
                  {project.description}
                </p>
                
                {/* Stats */}
                <div className="flex gap-4">
                  {project.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <p className="text-lg font-bold gradient-text font-display">{stat.value}</p>
                      <p className={`text-xs text-muted-foreground ${isArabic ? 'font-arabic' : ''}`}>{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
