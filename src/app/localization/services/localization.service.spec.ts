import { TestBed } from '@angular/core/testing';
import { LocalizationService } from './localization.service';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { createTranslateLoader } from '../i18n.localization';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('LocalizationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
        }
      })
    ],
    providers: [TranslateService]
  }));

  it('should be created', () => {
    const service: LocalizationService = TestBed.get(LocalizationService);
    expect(service).toBeTruthy();
  });
});
