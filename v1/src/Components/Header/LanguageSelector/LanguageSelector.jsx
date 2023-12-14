import React from 'react';
import { useState } from 'react';
import espanaIc from '../../../res/img/espana.png';
import franciaIc from '../../../res/img/francia.png';
import alemaniaIc from '../../../res/img/alemania.png';
import UKIc from '../../../res/img/reino-unido.png';
import { useTranslation } from "react-i18next";
import './Languages.css';

const Languages = () => {
    const [t, i18n] = useTranslation('common');
    const [selectedLanguage, setSelectedLanguage] = useState('ES');

    const handleButtonClick = (language) => {
      setSelectedLanguage(language);
      switch(language){
        case 'UK':
          i18n.changeLanguage('en')
        break;
        case 'ES':
          i18n.changeLanguage('es')
        break;
        case 'FR':
          i18n.changeLanguage('fr')
        break;
        case 'DE':
          i18n.changeLanguage('ge')
        break;
      }
    };
  
    return (
      <div className="languages-container">
        <button
          className={`btn btn-default ${selectedLanguage === 'UK' ? 'btn-pressed' : ''}`}
          onClick={() => handleButtonClick('UK')}>
          <img src={UKIc} width="20" alt="UK"/>
        </button>
        <button
          className={`btn btn-default ${selectedLanguage === 'ES' ? 'btn-pressed' : ''}`}
          onClick={() => handleButtonClick('ES') }>
          <img src={espanaIc} width="20" alt="ES"/>
        </button>
        <button
          className={`btn btn-default ${selectedLanguage === 'DE' ? 'btn-pressed' : ''}`}
          onClick={() => handleButtonClick('DE')}>
          <img src={alemaniaIc} width="20" alt="DE"/>
        </button>
        <button
          className={`btn btn-default ${selectedLanguage === 'FR' ? 'btn-pressed' : ''}`}
          onClick={() => handleButtonClick('FR')}>
          <img src={franciaIc} width="20" alt="FR"/>
        </button>
      </div>
    );
  };
  
  export default Languages;
