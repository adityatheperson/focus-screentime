import { registerPlugin } from '@capacitor/core';

import type { focusPlugin } from './definitions';

const focus = registerPlugin<focusPlugin>('focus', {
  web: () => import('./web').then((m) => new m.focusWeb()),
});

export * from './definitions';
export { focus };
