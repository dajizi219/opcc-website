import {useTranslations} from 'next-intl';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Tickets from '@/components/Tickets';
import Booth from '@/components/Booth';
import AIExhibition from '@/components/AIExhibition';
import RegisterInfo from '@/components/RegisterInfo';

export default function Home() {
  const t = useTranslations();

  return (
    <div className="bg-white dark:bg-gray-900">
      <Hero />
      <About />
      <Tickets />
      <Booth />
      <AIExhibition />
      <RegisterInfo />
    </div>
  );
}
