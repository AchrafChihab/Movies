import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cardtv',
  templateUrl: './cardtv.component.html',
  styleUrls: ['./cardtv.component.css']
})
export class CardtvComponent {
@Input() itemtv: any = {}
}
