import React from 'react';
import './Text5.css';
import { useTranslation } from "react-i18next";

const Text5 = () => {
  const {t, i18n} = useTranslation('common');
  return (
    <div className="about-me-container">
      <h2>{t('Presentacion5.Titulo')}</h2>
      <p>
        {t('Presentacion5.Presentacion5_1')}
      </p>
      <p>
        {t('Presentacion5.Presentacion5_2')}
      </p>
      <p>
        {t('Presentacion5.Presentacion5_3')}
      </p>
    </div>
  );
}

export default Text5;