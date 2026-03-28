import {useTranslations} from 'next-intl';

export default function RegisterInfo() {
  const t = useTranslations('register');

  return (
    <section id="register" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            {t('title')}
          </h2>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded">
            <p className="text-yellow-800 font-medium">{t('deadline')}</p>
          </div>

          {/* Registration Process */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">{t('process.title')}</h3>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              {t.raw('process.steps').map((step: string, idx: number) => (
                <div key={idx} className="flex flex-col items-center text-center max-w-[200px]">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-3">
                    {idx + 1}
                  </div>
                  <p className="text-gray-700 font-medium">{step}</p>
                  {idx < t.raw('process.steps').length - 1 && (
                    <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-16 -translate-y-1/2">
                      <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">{t('contact.title')}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">{t('contact.phone')}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">{t('contact.wechat')}</p>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">{t('notes.title')}</h3>
            <div className="space-y-3">
              {t.raw('notes.items').map((note: string, idx: number) => (
                <div key={idx} className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3 mt-1">•</span>
                  <p className="text-gray-700">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
