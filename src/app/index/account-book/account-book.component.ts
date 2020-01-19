import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-account-book',
  templateUrl: './account-book.component.html',
  styleUrls: ['./account-book.component.css']
})
export class AccountBookComponent implements OnInit {
  // If you need to access it in ngOnInt hook
  visible: boolean = false;

  constructor() {}

  ngOnInit() {
    
  }

  createTrans(): void {
    this.visible = true;
  }
}
