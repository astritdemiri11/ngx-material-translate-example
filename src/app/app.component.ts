import { Component, OnInit } from '@angular/core';
import { INTERNAL_FEATURE, LanguageCode, LanguageService, TranslateService } from 'ngx-material-translate';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  subscription: Subscription | null;

  constructor(
    public languageService: LanguageService,
    public translateService: TranslateService) {
    this.subscription = null;
  }

  ngOnInit() {
    this.languageService.business.selectLanguage(LanguageCode.English);
    this.languageService.business.loadLanguages();

    this.translateService.business.loadTranslations(INTERNAL_FEATURE);
    this.translateService.business.loadTranslations('app');
    this.translateService.business.loadTranslations('feature');

    this.subscription = this.languageService.model.activeLanguageCode$.subscribe(languageCode => {
      const lastActiveLanguageCode = this.languageService.business.getLastActiveLanguageCode();

      if (lastActiveLanguageCode !== languageCode) {
        this.translateService.business.loadTranslations(INTERNAL_FEATURE);
        this.translateService.business.loadTranslations('app');
        this.translateService.business.loadTranslations('feature');
        this.languageService.business.translateLanguages();
      }
    })
  }
}
