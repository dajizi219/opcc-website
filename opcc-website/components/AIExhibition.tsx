import {useTranslations} from 'next-intl';

export default function AIExhibition() {
  const t = useTranslations('ai');

  return (
    <section id="ai" className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
            {t('title')}
          </h2>
          <p className="text-center text-lg text-gray-700 mb-10">
            {t('description')}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {t.raw('categories').map((category: string, idx: number) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500"
              >
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-800 font-medium">{category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
