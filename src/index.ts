import { WebPlugin } from '@capacitor/core';

export interface FocusLockPlugin {
  requestScreenTimeAccess(): Promise<void>;
  startFocusMode(): Promise<void>;
  stopFocusMode(): Promise<void>;
}

export class FocusLockWeb extends WebPlugin implements FocusLockPlugin {
  async requestScreenTimeAccess(): Promise<void> {
    console.log('Screen Time access requested (web)');
  }

  async startFocusMode(): Promise<void> {
    console.log('Focus mode started (web)');
  }

  async stopFocusMode(): Promise<void> {
    console.log('Focus mode stopped (web)');
  }
}

const FocusLock = new FocusLockWeb();
export { FocusLock };
