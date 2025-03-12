import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent {
  public nameLower: string = 'Johan';
  public nameUpper: string = 'JOHAN';
  public fullName: string = 'jOhAn';

  public customDate: Date = new Date();

}
