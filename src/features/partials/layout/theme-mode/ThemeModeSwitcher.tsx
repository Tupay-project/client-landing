import React from 'react';
import { KTIcon } from '../../../helpers';
import { ThemeModeComponent } from '../../../assets/ts/layout';
import { ThemeModeType, useThemeMode } from './ThemeModeProvider';
import clsx from 'clsx';

type Props = {
  toggleBtnClass?: string;
  toggleBtnIconClass?: string;
};

const systemMode = ThemeModeComponent.getSystemMode() as 'light' | 'dark';

const ThemeModeSwitcher = ({
  toggleBtnClass = '',
  toggleBtnIconClass = 'fs-3', // Cambiado a 'fs-3' para un tamaño de fuente más pequeño
}: Props) => {
  const { mode, menuMode, updateMode, updateMenuMode } = useThemeMode();
  const calculatedMode = mode === 'system' ? systemMode : mode;

  const switchMode = (_mode: ThemeModeType) => {
    updateMenuMode(_mode);
    updateMode(_mode);
  };

  return (
    <div className="dropdown">
      {/* Menu toggle */}
      <button
        className={clsx('btn btn-icon dropdown-toggle', toggleBtnClass)}
        type="button"
        id="themeModeSwitcher"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {calculatedMode === 'dark' && (
          <KTIcon iconName="moon" className={clsx('theme-light-hide', toggleBtnIconClass)} />
        )}
        {calculatedMode === 'light' && (
          <KTIcon iconName="night-day" className={clsx('theme-dark-hide', toggleBtnIconClass)} />
        )}
      </button>

      {/* Dropdown menu */}
      <ul className="dropdown-menu" aria-labelledby="themeModeSwitcher">
        <li>
          <a
            className={clsx('dropdown-item', { active: menuMode === 'light' })}
            href="#"
            onClick={() => switchMode('light')}
          >
            <KTIcon iconName="night-day" className="fs-6 me-2" /> {/* Tamaño de fuente ajustado aquí */}
            Light
          </a>
        </li>
        <li>
          <a
            className={clsx('dropdown-item', { active: menuMode === 'dark' })}
            href="#"
            onClick={() => switchMode('dark')}
          >
            <KTIcon iconName="moon" className="fs-6 me-2" /> {/* Tamaño de fuente ajustado aquí */}
            Dark
          </a>
        </li>
      </ul>
    </div>
  );
};

export { ThemeModeSwitcher };
