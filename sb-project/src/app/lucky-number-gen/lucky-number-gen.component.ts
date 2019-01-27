import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lucky-number-gen',
  templateUrl: './lucky-number-gen.component.html',
  styleUrls: ['./lucky-number-gen.component.css']
})
export class LuckyNumberGenComponent implements OnInit {

  n: number;

  constructor() { }

  ngOnInit() {
  }

  getLuckyNumber() {
     this.n = Math.floor((Math.random() * 9) + 0);
  }

}
