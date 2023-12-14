import React from 'react';
import './Text1.css'; // Importa el archivo CSS para los estilos
import { useTranslation } from "react-i18next";
function TextoAtractivo() {
  const {t, i18n} = useTranslation('common');
  return (
    <div className="texto-container">
      <h2>{t('Presentacion1.Titulo')}</h2>
      <p>
        {t('Presentacion1.Presentacion1_1')}
      </p>
      <p>
        {t('Presentacion1.Presentacion1_2')}
      </p>
      <p>
        {t('Presentacion1.Presentacion1_3')}
      </p>
    </div>
  );
}

export default TextoAtractivo;
