import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
	MatCheckboxModule,
	MatSelectModule,
	MatRadioModule,
	MatSliderModule,
	MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
