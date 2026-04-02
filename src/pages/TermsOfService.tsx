import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/layout/PageHero';
import { useLanguage } from '@/contexts/LanguageContext';

const TermsOfService = () => {
  const { language, isRTL } = useLanguage();

  const content = {
    en: {
      title: 'Terms of Service',
      lastUpdated: 'Effective Date: December 2024',
      intro: 'By using Alpha Core Solutions website, you agree to these terms. Please read them carefully before using our services.',
      sections: [
        {
          title: '1. Services',
          content: 'Information provided on this website is for general purposes only. Actual services are subject to formal agreements between Alpha Core Solutions and clients. Product specifications and availability may change without notice.'
        },
        {
          title: '2. Use of Website',
          content: 'You agree to use this website lawfully and not to misuse any information provided. You shall not attempt to gain unauthorized access to our systems or use the website in any way that could damage, disable, or impair our services.'
        },
        {
          title: '3. Intellectual Property',
          content: 'All content on this website, including text, graphics, logos, images, and software, is the property of Alpha Core Solutions or its content suppliers and is protected by international copyright laws. Unauthorized use is prohibited.'
        },
        {
          title: '4. Limitation of Liability',
          content: 'Alpha Core Solutions shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website. We provide the website "as is" without warranties of any kind.'
        },
        {
          title: '5. Third-Party Links',
          content: 'Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of these external sites. Use them at your own risk.'
        },
        {
          title: '6. Modifications',
          content: 'We reserve the right to modify these terms at any time. Continued use of the website after changes constitutes acceptance of the modified terms.'
        },
        {
          title: '7. Governing Law',
          content: 'These terms are governed by the laws of the Kingdom of Saudi Arabia. Any disputes shall be resolved in the courts of Riyadh, Saudi Arabia.'
        },
        {
          title: '8. Contact',
          content: 'For questions about these terms, please contact us at: info@alphacs.sa'
        }
      ]
    },
    ar: {
      title: 'شروط الخدمة',
      lastUpdated: 'تاريخ السريان: ديسمبر 2024',
      intro: 'باستخدامك لموقع ألفا كور سوليوشنز، فإنك توافق على هذه الشروط. يرجى قراءتها بعناية قبل استخدام خدماتنا.',
      sections: [
        {
          title: '1. الخدمات',
          content: 'المعلومات المقدمة على هذا الموقع هي لأغراض عامة فقط. الخدمات الفعلية تخضع لاتفاقيات رسمية بين ألفا كور سوليوشنز والعملاء. قد تتغير مواصفات المنتجات وتوافرها دون إشعار مسبق.'
        },
        {
          title: '2. استخدام الموقع',
          content: 'توافق على استخدام هذا الموقع بشكل قانوني وعدم إساءة استخدام أي معلومات مقدمة. يجب ألا تحاول الوصول غير المصرح به إلى أنظمتنا أو استخدام الموقع بأي طريقة قد تضر أو تعطل أو تضعف خدماتنا.'
        },
        {
          title: '3. الملكية الفكرية',
          content: 'جميع المحتويات على هذا الموقع، بما في ذلك النصوص والرسومات والشعارات والصور والبرمجيات، هي ملك لألفا كور سوليوشنز أو مورديها ومحمية بموجب قوانين حقوق النشر الدولية. الاستخدام غير المصرح به محظور.'
        },
        {
          title: '4. تحديد المسؤولية',
          content: 'لن تكون ألفا كور سوليوشنز مسؤولة عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية ناتجة عن استخدامك لهذا الموقع. نقدم الموقع "كما هو" دون ضمانات من أي نوع.'
        },
        {
          title: '5. روابط الطرف الثالث',
          content: 'قد يحتوي موقعنا على روابط لمواقع خارجية. نحن غير مسؤولين عن محتوى أو ممارسات الخصوصية لهذه المواقع الخارجية. استخدمها على مسؤوليتك الخاصة.'
        },
        {
          title: '6. التعديلات',
          content: 'نحتفظ بالحق في تعديل هذه الشروط في أي وقت. استمرار استخدام الموقع بعد التغييرات يشكل قبولاً للشروط المعدلة.'
        },
        {
          title: '7. القانون الحاكم',
          content: 'تخضع هذه الشروط لقوانين المملكة العربية السعودية. يتم حل أي نزاعات في محاكم الرياض، المملكة العربية السعودية.'
        },
        {
          title: '8. الاتصال',
          content: 'للأسئلة حول هذه الشروط، يرجى الاتصال بنا على: info@alphacs.sa'
        }
      ]
    }
  };

  const c = content[language];

  return (
    <PageLayout>
      <PageHero
        title={c.title}
        subtitle={c.lastUpdated}
      />
      <section className="section-padding bg-background">
        <div className="container-premium max-w-4xl">
          <p className={`text-lg text-muted-foreground mb-12 ${isRTL ? 'font-arabic' : ''}`}>
            {c.intro}
          </p>
          
          <div className="space-y-8">
            {c.sections.map((section, index) => (
              <div key={index} className="glass-card p-6 md:p-8">
                <h2 className={`text-xl font-semibold text-foreground mb-4 ${isRTL ? 'font-arabic' : ''}`}>
                  {section.title}
                </h2>
                <p className={`text-muted-foreground leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TermsOfService;
