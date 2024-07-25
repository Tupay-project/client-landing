import { useEffect, useState } from 'react';
import { Tab } from 'bootstrap';
import {
  MenuComponent,
  DrawerComponent,
  ScrollComponent,
  ScrollTopComponent,
  StickyComponent,
  ToggleComponent,
  SwapperComponent,
} from '../assets/ts/components';
import { ThemeModeComponent } from '../assets/ts/layout';

import { useLayout } from './core';

export function MasterInit() {
  const { config } = useLayout();
  const [initialized, setInitialized] = useState(false);

  const pluginsInitialization = () => {
    console.log('Initializing ThemeModeComponent');
    ThemeModeComponent.init();

    setTimeout(() => {
      console.log('Initializing ToggleComponent');
      ToggleComponent.bootstrap();

      console.log('Initializing ScrollTopComponent');
      ScrollTopComponent.bootstrap();

      console.log('Initializing DrawerComponent');
      DrawerComponent.bootstrap();

      console.log('Initializing StickyComponent');
      StickyComponent.bootstrap();

      console.log('Initializing MenuComponent');
      MenuComponent.bootstrap();

      console.log('Initializing ScrollComponent');
      ScrollComponent.bootstrap();

      console.log('Initializing SwapperComponent');
      SwapperComponent.bootstrap();

      document.querySelectorAll('[data-bs-toggle="tab"]').forEach((tab) => {
        console.log('Initializing Tab', tab);
        Tab.getOrCreateInstance(tab);
      });
    }, 500);
  };

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
      pluginsInitialization();
    }
  }, [config, initialized]);

  return <></>;
}
