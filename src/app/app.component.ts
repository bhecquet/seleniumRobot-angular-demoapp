import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular test app for SeleniumRobot';
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  startDate = new Date();
  date = new FormControl(new Date());
}
