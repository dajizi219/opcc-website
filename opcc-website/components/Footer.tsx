import {useTranslations} from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl italic mb-6 text-gray-300">
            {t('slogan')}
          </p>
          <p className="text-gray-400 mb-2">
            {t('organizedBy')}
          </p>
          <p className="text-gray-500 text-sm mt-6">
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
