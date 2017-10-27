import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';


@Injectable()
export class SettingService {
  
  constructor(
    public storage: Storage
  ) {}

  setTranslation(translation: boolean): void {
    this.storage.set('translation', translation);
  };

  isTranslation(): Promise<boolean> {
    return this.storage.get('translation').then((value) => {
      return value;
    });
  };

  setNightMode(nightMode: boolean): void {
    this.storage.set('night-mode', nightMode);
  };

  isNightMode(): Promise<boolean> {
    return this.storage.get('night-mode').then((value) => {
      return value;
    });
  };

  setLargerFontSize(largerFontSize: boolean): void {
    this.storage.set('larger-font-size', largerFontSize);
  };

  isLargerFontSize(): Promise<boolean> {
    return this.storage.get('larger-font-size').then((value) => {
      return value;
    });
  };
  
}