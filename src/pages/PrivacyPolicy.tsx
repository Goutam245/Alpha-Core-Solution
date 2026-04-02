import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/layout/PageHero';
import { useLanguage } from '@/contexts/LanguageContext';

const PrivacyPolicy = () => {
  const { language, isRTL } = useLanguage();

  const content = {
    en: {
      title: 'Privacy Policy',
      lastUpdated: 'Last Updated: December 2024',
      intro: 'Alpha Core Solutions respects your privacy. This policy outlines how we collect, use, and protect your personal information.',
      sections: [
        {
          title: '1. Information Collection',
          content: 'We collect information you provide through contact forms, including name, email, phone number, and company details. We may also collect technical information such as IP addresses and browser types when you visit our website.'
        },
        {
          title: '2. Information Use',
          content: 'Your information is used solely to respond to inquiries and provide our services. We do not sell or share your data with third parties for marketing purposes. Your data may be used to improve our services and communicate important updates.'
        },
        {
          title: '3. Data Security',
          content: 'We implement industry-standard security measures to protect your information. This includes encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure.'
        },
        {
          title: '4. Data Retention',
          content: 'We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected and to comply with legal obligations.'
        },
        {
          title: '5. Your Rights',
          content: 'You have the right to access, correct, or delete your personal information. You may also request information about how your data is processed. To exercise these rights, please contact us.'
        },
        {
          title: '6. Contact',
          content: 'For privacy concerns or questions about this policy, please contact us at: info@alphacs.sa'
        }
      ]
    },
    ar: {
      title: 'سياسة الخصوصية',
      lastUpdated: 'آخر تحديث: ديسمبر 2024',
      intro: 'تحترم ألفا كور سوليوشنز خصوصيتك. توضح هذه السياسة كيف نجمع ونستخدم ونحمي معلوماتك الشخصية.',
      sections: [
        {
          title: '1. جمع المعلومات',
          content: 'نجمع المعلومات التي تقدمها من خلال نماذج الاتصال، بما في ذلك الاسم والبريد الإلكتروني ورقم الهاتف وتفاصيل الشركة. قد نجمع أيضًا معلومات تقنية مثل عناوين IP وأنواع المتصفحات عند زيارة موقعنا.'
        },
        {
          title: '2. استخدام المعلومات',
          content: 'تُستخدم معلوماتك فقط للرد على الاستفسارات وتقديم خدماتنا. نحن لا نبيع أو نشارك بياناتك مع أطراف ثالثة لأغراض التسويق. قد تُستخدم بياناتك لتحسين خدماتنا والتواصل بشأن التحديثات المهمة.'
        },
        {
          title: '3. أمان البيانات',
          content: 'نطبق إجراءات أمنية معيارية في الصناعة لحماية معلوماتك. يشمل ذلك التشفير والخوادم الآمنة والتدقيقات الأمنية المنتظمة. ومع ذلك، لا توجد طريقة نقل عبر الإنترنت آمنة بنسبة 100%.'
        },
        {
          title: '4. الاحتفاظ بالبيانات',
          content: 'نحتفظ بمعلوماتك الشخصية فقط للمدة اللازمة لتحقيق الأغراض التي جُمعت من أجلها والامتثال للالتزامات القانونية.'
        },
        {
          title: '5. حقوقك',
          content: 'لديك الحق في الوصول إلى معلوماتك الشخصية أو تصحيحها أو حذفها. يمكنك أيضًا طلب معلومات حول كيفية معالجة بياناتك. لممارسة هذه الحقوق، يرجى الاتصال بنا.'
        },
        {
          title: '6. الاتصال',
          content: 'للمخاوف المتعلقة بالخصوصية أو الأسئلة حول هذه السياسة، يرجى الاتصال بنا على: info@alphacs.sa'
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

export default PrivacyPolicy;
