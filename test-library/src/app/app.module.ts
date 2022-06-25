import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DesignSystemModule } from 'iptdevs-design-system';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { FormTemplateComponent } from './components/templates/form-template/form-template.component';
import { LoginFormTemplateComponent } from './components/templates/login-form-template/login-form-template.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FormTemplateComponent,
    LoginFormTemplateComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DesignSystemModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
