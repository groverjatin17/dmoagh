import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

export default function Homepage() {

  const {t, i18n} = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  return (
    <div>
      <button type='button' onClick={() => changeLanguage('en')}>EN</button>
      <button type='button' onClick={() => changeLanguage('de')}>DE</button>
      <hr />
      <Trans i18nKey="title">There! I am homepage</Trans>{' '}
      <div>{t("title")}</div>
    </div>
  );
}
