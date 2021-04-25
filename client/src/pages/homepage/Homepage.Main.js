import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import Hero from './Hero';
import Introduction from './Introduction';
import DiseasesSection from './DiseasesSection';
import DoctorsInfoSection from './DoctorsInfoSection';
import AppointmentMessage from './AppointmentMessage';
import Testimonials from './Testimonials'

export default function Homepage() {
  const { t } = useTranslation();

  return (
    <div>
      <Hero />
      <Introduction />
      <DiseasesSection />
      <DoctorsInfoSection />
      <AppointmentMessage />
      <Testimonials />
      {/* <Footer /> */}
      {/* <Trans i18nKey="title">There! I am homepage</Trans>{' '}
      <div>{t('title')}</div>
      <p>Hello World</p> */}
    </div>
  );
}
