import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import LanguageBar from './LanguageBar';
import LogoBar from './LogoBar';
import MenuBar from './Menubar';
import Hero from './Hero';
import Introduction from './Introduction';
import DiseasesSection from './DiseasesSection';
import DoctorsInfoSection from './DoctorsInfoSection';
import AppointmentMessage from './AppointmentMessage';
import Footer from './Footer';


// import NewPage from './NewPage';

export default function Homepage() {
  const { t } = useTranslation();

  return (
    <div>
      <LanguageBar />
      <LogoBar />
      <MenuBar />
      <hr />
      <Hero />
      <Introduction />
      <DiseasesSection />
      <DoctorsInfoSection />
      <AppointmentMessage />
      {/* <NewPage /> */}
      <Footer />
      {/* <Trans i18nKey="title">There! I am homepage</Trans>{' '}
      <div>{t('title')}</div>
      <p>Hello World</p> */}
    </div>
  );
}
