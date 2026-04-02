import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/layout/PageHero';
import { useLanguage } from '@/contexts/LanguageContext';

const CookiePolicy = () => {
  const { language, isRTL } = useLanguage();

  const content = {
    en: {
      title: 'Cookie Policy',
      lastUpdated: 'Last Updated: December 2024',
      intro: 'This website uses cookies to improve user experience. This policy explains what cookies are and how we use them.',
      sections: [
        {
          title: '1. What Are Cookies',
          content: 'Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and improve your browsing experience. Cookies do not contain personal information unless you provide it.'
        },
        {
          title: '2. How We Use Cookies',
          content: 'We use the following types of cookies:\n\n• Essential Cookies: Required for basic website functionality such as navigation and secure areas.\n\n• Analytics Cookies: Help us understand how visitors interact with our website, allowing us to improve our services.\n\n• Preference Cookies: Remember your settings and preferences, such as language selection.'
        },
        {
          title: '3. Third-Party Cookies',
          content: 'Some cookies are placed by third-party services that appear on our pages. We do not control how these third parties use their cookies. Please refer to their privacy policies for more information.'
        },
        {
          title: '4. Managing Cookies',
          content: 'You can control and manage cookies through your browser settings. Most browsers allow you to:\n\n• View what cookies are stored\n• Delete individual or all cookies\n• Block all or specific cookies\n• Set preferences for certain websites\n\nNote: Disabling cookies may affect website functionality.'
        },
        {
          title: '5. Cookie Duration',
          content: 'Session cookies are temporary and deleted when you close your browser. Persistent cookies remain on your device for a set period or until you delete them manually.'
        },
        {
          title: '6. Contact',
          content: 'For questions about our cookie policy, please contact us at: info@alphacs.sa'
        }
      ]
    },
    ar: {
      title: 'سياسة ملفات تعريف الارتباط',
      lastUpdated: 'آخر تحديث: ديسمبر 2024',
      intro: 'يستخدم هذا الموقع ملفات تعريف الارتباط لتحسين تجربة المستخدم. توضح هذه السياسة ما هي ملفات تعريف الارتباط وكيف نستخدمها.',
      sections: [
        {
          title: '1. ما هي ملفات تعريف الارتباط',
          content: 'ملفات تعريف الارتباط هي ملفات نصية صغيرة يتم تخزينها على جهازك عند زيارة موقع ويب. تساعد المواقع على تذكر تفضيلاتك وتحسين تجربة التصفح. لا تحتوي ملفات تعريف الارتباط على معلومات شخصية ما لم تقدمها.'
        },
        {
          title: '2. كيف نستخدم ملفات تعريف الارتباط',
          content: 'نستخدم الأنواع التالية من ملفات تعريف الارتباط:\n\n• ملفات تعريف الارتباط الأساسية: مطلوبة للوظائف الأساسية للموقع مثل التنقل والمناطق الآمنة.\n\n• ملفات تعريف الارتباط التحليلية: تساعدنا على فهم كيفية تفاعل الزوار مع موقعنا، مما يتيح لنا تحسين خدماتنا.\n\n• ملفات تعريف الارتباط التفضيلية: تتذكر إعداداتك وتفضيلاتك، مثل اختيار اللغة.'
        },
        {
          title: '3. ملفات تعريف الارتباط من الطرف الثالث',
          content: 'يتم وضع بعض ملفات تعريف الارتباط بواسطة خدمات طرف ثالث تظهر على صفحاتنا. نحن لا نتحكم في كيفية استخدام هذه الأطراف لملفات تعريف الارتباط الخاصة بها. يرجى الرجوع إلى سياسات الخصوصية الخاصة بها للمزيد من المعلومات.'
        },
        {
          title: '4. إدارة ملفات تعريف الارتباط',
          content: 'يمكنك التحكم في ملفات تعريف الارتباط وإدارتها من خلال إعدادات المتصفح. تسمح لك معظم المتصفحات بما يلي:\n\n• عرض ملفات تعريف الارتباط المخزنة\n• حذف ملفات تعريف الارتباط الفردية أو جميعها\n• حظر جميع ملفات تعريف الارتباط أو محددة منها\n• تعيين تفضيلات لمواقع معينة\n\nملاحظة: قد يؤثر تعطيل ملفات تعريف الارتباط على وظائف الموقع.'
        },
        {
          title: '5. مدة ملفات تعريف الارتباط',
          content: 'ملفات تعريف الارتباط للجلسة مؤقتة وتُحذف عند إغلاق المتصفح. تبقى ملفات تعريف الارتباط الدائمة على جهازك لفترة محددة أو حتى تحذفها يدويًا.'
        },
        {
          title: '6. الاتصال',
          content: 'للأسئلة حول سياسة ملفات تعريف الارتباط، يرجى الاتصال بنا على: info@alphacs.sa'
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
                <p className={`text-muted-foreground leading-relaxed whitespace-pre-line ${isRTL ? 'font-arabic' : ''}`}>
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

export default CookiePolicy;
