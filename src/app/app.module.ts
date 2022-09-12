import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialTranslateModule, TranslationLoaderService } from 'ngx-material-translate';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot(),
    HttpClientModule,
    MaterialTranslateModule.forRoot({
      loader: { provide: TranslationLoaderService, useFactory: (httpClient: HttpClient) => new TranslationLoaderService(httpClient), deps: [HttpClient] },
      translationLoadingClass: 'blurOut',
      translationSuccessClass: 'blurIn'
    }),
    StoreModule.forRoot({}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
