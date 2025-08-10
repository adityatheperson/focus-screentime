import { WebPlugin } from '@capacitor/core';

import type { focusPlugin } from './definitions';

export class focusWeb extends WebPlugin implements focusPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
