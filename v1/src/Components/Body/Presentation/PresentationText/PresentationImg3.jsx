import React from 'react';
import './Text3.css'; // Importa el archivo CSS para los estilos
import { useTranslation } from "react-i18next";
function Text3() {
  const {t, i18n} = useTranslation('common');
  return (
    <div className="objetivos-container">
      <h2>{t('Presentacion3.Titulo')}</h2>
      <p>
        {t('Presentacion3.Presentacion3_1')}
      </p>
      <p>
        {t('Presentacion3.Presentacion3_2')}
      </p>
      <p>
        {t('Presentacion3.Presentacion3_3')}
      </p>
    </div>
  );
}

export default Text3;