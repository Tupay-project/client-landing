import React from "react";
import clsx from "clsx";
import { useLang, setLanguage } from '../../../i18n/Metronici18n';
import { toAbsoluteUrl } from '../../../helpers';

const languages = [
  {
    lang: 'col',
    name: 'Colombian',
    flag: toAbsoluteUrl('media/flags/colombia.svg'),
  },
  {
    lang: 'en',
    flag: toAbsoluteUrl('media/flags/united-states.svg'),
  },
  {
    lang: 'es',
    flag: toAbsoluteUrl('media/flags/spain.svg'),
  },
 
];

const Languages = () => {
  const lang = useLang();
  const currentLanguage = languages.find((x) => x.lang === lang);

  return (
    <div className="menu-item dropdown px-5">
      <button
        className="btn btn-icon btn-active-color-primary d-flex align-items-center"
        id="kt_language_menu_toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          className="w-20px h-20px rounded-1"
          src={currentLanguage?.flag}
          alt={`Flag of ${currentLanguage?.lang}`}
        />
      </button>

      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="kt_language_menu_toggle">
        {languages.map((l) => (
          <li key={l.lang}>
            <a
              className={clsx('dropdown-item d-flex align-items-center', { 'active': l.lang === currentLanguage?.lang })}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setLanguage(l.lang);
              }}
            >
              <img
                className="w-20px h-20px rounded-1 me-2"
                src={l.flag}
                alt={`Flag of ${l.lang}`}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Languages };
