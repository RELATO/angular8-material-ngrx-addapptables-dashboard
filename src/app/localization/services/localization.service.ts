import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class LocalizationService {

    constructor(private readonly _translateService: TranslateService) { }

    // init default languages for all application
    initDefaultLanguage() {
        this._translateService.addLangs(['en', 'es']);
        this._translateService.setDefaultLang('en');
        const browserLang = this._translateService.getBrowserLang();
        const lang = browserLang.match(/en|es/) ? browserLang : 'en';
        this._translateService.use(lang);
    }
}
