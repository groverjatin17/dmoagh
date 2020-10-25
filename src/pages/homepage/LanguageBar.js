import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageBar() {
  const { i18n } = useTranslation();

  return (
    <div className="laptop:w-full laptop:h-10 bg-blue-800 flex justify-end items-center laptop:pr-24 mobile: pr-4 text-white">
      <p className="flex items-center justify-center">Select Language:</p>
      <button
        className="p-1"
        type="button"
        onClick={() => i18n.changeLanguage('en')}
      >
        EN
      </button>
      <button
        className="p-1"
        type="button"
        onClick={() => i18n.changeLanguage('de')}
      >
        DE
      </button>
    </div>
  );
}
