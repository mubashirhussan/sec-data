import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeuix/themes/lara';

import { routes } from './app.routes';
import { definePreset } from '@primeuix/themes';
const MyLaraPreset = definePreset(Lara, {
  semantic: {
    primary: {
      50: '#e8f0fb',
      100: '#c6d4f3',
      200: '#a3b8ec',
      300: '#7f9ce4',
      400: '#5c80dd',
      500: '#2b6aca', //  main color
      600: '#255bb0',
      700: '#1f4b92',
      800: '#193b74',
      900: '#122b56',
      950: '#0c1b38',
    },
  },
});
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: MyLaraPreset,
        options: { darkModeSelector: '.p-dark' },
      },
    }),
  ],
};
