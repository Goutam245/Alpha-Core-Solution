import { useEffect, useRef, useState } from 'react';
import { MapPin, Building2, GraduationCap, ShoppingBag, Briefcase, Stethoscope, Shield, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

import corporateImg from '@/assets/projects/corporate.jpg';
import datacenterImg from '@/assets/projects/datacenter.jpg';
import hospitalImg from '@/assets/projects/hospital.jpg';

const ProjectsPage = () => {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const isArabic = language === 'ar';

  useEffect(() => {
    document.title = isArabic 
      ? 'مشاريعنا | ألفا كور سوليوشنز' 
      : 'Our Projects | Alpha Core Solutions';
    setIsVisible(true);
  }, [isArabic]);

  const filters = [
    { id: 'all', label: isArabic ? 'جميع المشاريع' : 'All Projects' },
    { id: 'government', label: isArabic ? 'حكومي' : 'Government' },
    { id: 'corporate', label: isArabic ? 'شركات' : 'Corporate' },
    { id: 'healthcare', label: isArabic ? 'رعاية صحية' : 'Healthcare' },
    { id: 'education', label: isArabic ? 'تعليم' : 'Education' },
  ];

  const projects = [
    {
      id: 1,
      title: isArabic ? 'مجمع الوزارات الحكومية' : 'Government Ministry Complex',
      location: isArabic ? 'الرياض، السعودية' : 'Riyadh, Saudi Arabia',
      image: corporateImg,
      category: 'government',
      description: isArabic 
        ? 'نظام أمني متكامل يشمل كاميرات المراقبة والتحكم بالدخول وأجهزة الكشف عن المعادن'
        : 'Integrated security system including CCTV surveillance, access control, and metal detection',
      technologies: ['CCTV', 'Access Control', 'Metal Detection'],
      stats: { cameras: '200+', accessPoints: '500+', uptime: '99.9%' },
    },
    {
      id: 2,
      title: isArabic ? 'مركز البيانات الوطني' : 'National Data Center',
      location: isArabic ? 'جدة، السعودية' : 'Jeddah, Saudi Arabia',
      image: datacenterImg,
      category: 'corporate',
      description: isArabic 
        ? 'حماية متقدمة للبنية التحتية الحيوية مع مراقبة على مدار الساعة'
        : 'Advanced protection for critical infrastructure with 24/7 monitoring',
      technologies: ['Biometric Access', 'CCTV', 'Perimeter Security'],
      stats: { cameras: '150+', accessPoints: '200+', uptime: '99.99%' },
    },
    {
      id: 3,
      title: isArabic ? 'المستشفى التخصصي' : 'Specialized Hospital',
      location: isArabic ? 'الدمام، السعودية' : 'Dammam, Saudi Arabia',
      image: hospitalImg,
      category: 'healthcare',
      description: isArabic 
        ? 'أمان شامل للمرافق الطبية مع التحكم في الوصول للمناطق الحساسة'
        : 'Comprehensive security for medical facilities with sensitive area access control',
      technologies: ['CCTV', 'Access Control', 'X-Ray Screening'],
      stats: { cameras: '100+', accessPoints: '150+', uptime: '99.9%' },
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-b from-secondary/30 to-background">
          <div className="container-premium text-center">
            <span className={`inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-4 ${isArabic ? 'font-arabic' : ''}`}>
              {isArabic ? 'معرض المشاريع' : 'PROJECT PORTFOLIO'}
            </span>
            <h1 className={`text-hero font-bold text-foreground mb-6 ${isArabic ? 'font-arabic' : 'font-display'}`}>
              {isArabic ? 'مشاريعنا المنجزة' : 'Our Completed Projects'}
            </h1>
            <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${isArabic ? 'font-arabic' : ''}`}>
              {isArabic 
                ? 'نفخر بخدمة أكثر من 150 منشأة في جميع أنحاء المملكة العربية السعودية'
                : 'Proudly serving over 150 facilities across the Kingdom of Saudi Arabia'}
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 sticky top-20 z-30 bg-background/95 backdrop-blur-xl border-b border-border/20">
          <div className="container-premium">
            <div className="flex justify-center flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'gradient-primary text-primary-foreground shadow-glow'
                      : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
                  } ${isArabic ? 'font-arabic' : ''}`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding">
          <div className="container-premium">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`group rounded-2xl overflow-hidden bg-card border border-border/30 card-hover transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
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
                        {filters.find(f => f.id === project.category)?.label}
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

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Stats */}
                    <div className="flex gap-4 pt-4 border-t border-border/30">
                      <div className="text-center">
                        <p className="text-lg font-bold gradient-text font-display">{project.stats.cameras}</p>
                        <p className={`text-xs text-muted-foreground ${isArabic ? 'font-arabic' : ''}`}>
                          {isArabic ? 'كاميرات' : 'Cameras'}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold gradient-text font-display">{project.stats.accessPoints}</p>
                        <p className={`text-xs text-muted-foreground ${isArabic ? 'font-arabic' : ''}`}>
                          {isArabic ? 'نقاط تحكم' : 'Access Points'}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold gradient-text font-display">{project.stats.uptime}</p>
                        <p className={`text-xs text-muted-foreground ${isArabic ? 'font-arabic' : ''}`}>
                          {isArabic ? 'الموثوقية' : 'Uptime'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-b from-background to-secondary/30">
          <div className="container-premium text-center">
            <div className="glass-card p-12 max-w-4xl mx-auto">
              <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className={`text-3xl md:text-4xl font-bold text-foreground mb-4 ${isArabic ? 'font-arabic' : 'font-display'}`}>
                {isArabic ? 'هل لديك مشروع أمني؟' : 'Have a Security Project?'}
              </h2>
              <p className={`text-muted-foreground mb-8 max-w-2xl mx-auto ${isArabic ? 'font-arabic' : ''}`}>
                {isArabic 
                  ? 'دعنا نناقش كيف يمكننا تأمين منشأتك بأحدث التقنيات الأمنية'
                  : 'Let\'s discuss how we can secure your facility with the latest security technologies'}
              </p>
              <a
                href="/#contact"
                className={`btn-premium text-primary-foreground inline-flex items-center gap-2 ${isArabic ? 'font-arabic' : ''}`}
              >
                <span className="relative z-10">{isArabic ? 'اطلب استشارة' : 'Request Consultation'}</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default ProjectsPage;