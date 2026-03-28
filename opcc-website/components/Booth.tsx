import {useTranslations} from 'next-intl';

export default function Booth() {
  const t = useTranslations('booth');

  return (
    <section id="booth" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          {t('title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Standard Booth */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-blue-300 transition-all">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {t('standard.name')}
            </h3>
            <div className="space-y-2 mb-6">
              <p className="text-lg text-gray-700">{t('standard.price')}</p>
              <p className="text-lg text-blue-600 font-semibold">{t('standard.memberPrice')}</p>
            </div>
          </div>

          {/* Custom Booth */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-blue-300 transition-all">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {t('custom.name')}
            </h3>
            <div className="space-y-2 mb-6">
              <p className="text-lg text-gray-700">{t('custom.price')}</p>
              <p className="text-lg text-blue-600 font-semibold">{t('custom.priceDetail')}</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-blue-50 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            {t('benefits.title')}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {t.raw('benefits.items').map((benefit: string, idx: number) => (
              <div key={idx} className="flex items-start bg-white rounded-lg p-4 shadow-sm">
                <svg
                  className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
