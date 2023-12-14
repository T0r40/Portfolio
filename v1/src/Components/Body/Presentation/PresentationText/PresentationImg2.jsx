import './Text2.css'; // Importa el archivo CSS para los estilos
import { useTranslation } from "react-i18next";
function Text2() {
   const {t, i18n} = useTranslation('common');
    // Lista de tus softskills
    const softskills = [
        t('Presentacion2.Presentacion2_1'),
        t('Presentacion2.Presentacion2_2'),
        t('Presentacion2.Presentacion2_4'),
        t('Presentacion2.Presentacion2_4'),
        t('Presentacion2.Presentacion2_5'),
        t('Presentacion2.Presentacion2_6'),
      ];
    
      return (
        <div className="softskills-container">
        <h2>{t('Presentacion2.Titulo')}</h2>
        <ul className="softskills-list">
          {softskills.map((skill, index) => (
            <li key={index} className="softskills-item">
              {skill}
            </li>
          ))}
        </ul>
      </div>
      );
    }

export default Text2;