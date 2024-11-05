// LanguageSelector.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <button onClick={() => changeLanguage(i18n.language === 'en' ? 'ja' : 'en')}>
      {i18n.language === 'en' ? 'English' : '日本語'}
    </button>
  );
};

export default LanguageSelector;
