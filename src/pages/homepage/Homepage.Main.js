import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import LanguageBar from './LanguageBar';
import LogoBar from './LogoBar';
import MenuBar from './Menubar';
import Hero from './Hero';
import Introduction from './Introduction';
import DiseasesSection from './DiseasesSection';
import DoctorsSection from './DoctorsSection';
import AppointmentMessage from './AppointmentMessage';

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
      <DoctorsSection />
      <AppointmentMessage />
      {/* <Trans i18nKey="title">There! I am homepage</Trans>{' '}
      <div>{t('title')}</div>
      <p>Hello World</p> */}
    </div>
  );
}
