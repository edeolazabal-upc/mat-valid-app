/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app/component/home/home.component';
import { FormComponent } from './app/component/form/form.component';
import { SubComponent } from './app/component/sub/sub.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientJsonpModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { 
    path: 'form', 
    component: FormComponent,
    children: [
      { path: 'sub', component: SubComponent } // Sub-ruta
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientJsonpModule, RouterModule, MatToolbarModule, BrowserAnimationsModule)

  ]
})
  .catch((err) => console.error(err));
