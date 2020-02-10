import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

export interface SelectBoxItem {
  name: string;
  id: number;
}

@Component({
  selector: 'app-customized-select-box',
  templateUrl: './customized-select-box.component.html',
  styleUrls: ['./customized-select-box.component.scss']
})
export class CustomizedSelectBoxComponent implements OnInit {
  @Input() items: SelectBoxItem[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
