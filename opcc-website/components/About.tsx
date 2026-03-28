import {useTranslations} from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  const description = t('description');
  const paragraphs = description.split('\n\n');

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            {t('title')}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 mb-10">
            {paragraphs.map((paragraph, idx) => (
              <p key={idx} className="mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="bg-gray-50 rounded-xl p-8 mt-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              {t('form.title')}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {t.raw('form.items').map((item: string, idx: number) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100"
                >
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
