import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LicencePlateComponent } from './licence-plate.component';
import { LicencePlatePipe } from './licence-plate.pipe';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { ReadablePropertyPipe } from './readable-property.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LicencePlateComponent,
    LicencePlatePipe,
    ReadablePropertyPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
