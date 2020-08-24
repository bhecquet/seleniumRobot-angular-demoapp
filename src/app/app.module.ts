import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { NgSelectModule } from '@ng-select/ng-select';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
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
	MatInputModule,
	ReactiveFormsModule,
	MatAutocompleteModule,
	MatDatepickerModule,
	MatNativeDateModule,
    FormsModule,
	NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
