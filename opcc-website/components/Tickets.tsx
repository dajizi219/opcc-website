import {useTranslations} from 'next-intl';

export default function Tickets() {
  const t = useTranslations('tickets');

  return (
    <section id="tickets" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          {t('title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Individual Ticket */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200 hover:border-blue-300 transition-all hover:shadow-xl transform hover:-translate-y-1">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {t('individual.name')}
              </h3>
              <div className="text-3xl font-bold text-blue-600">
                {t('individual.price')}
              </div>
            </div>
            <ul className="space-y-4">
              {t.raw('individual.benefits').map((benefit: string, idx: number) => (
                <li key={idx} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
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
                </li>
              ))}
            </ul>
          </div>

          {/* Creator Ticket */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-blue-500 transition-all hover:shadow-xl transform hover:-translate-y-1 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              {t('creator.name')}
            </div>
            <div className="text-center mb-6 mt-2">
              <div className="text-lg text-gray-600 mb-1">
                {t('creator.earlyPrice')}
              </div>
              <div className="text-xl text-gray-600 mb-2">
                {t('creator.regularPrice')}
              </div>
            </div>
            <ul className="space-y-4">
              {t.raw('creator.benefits').map((benefit: string, idx: number) => (
                <li key={idx} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
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
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
