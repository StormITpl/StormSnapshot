import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  items : any;

  constructor(public navCtrl: NavController) {
      this.items = [];
      for(let i=0; i<100; i++){
        let item = {
            title: 'Row item numer : ' + i
          };
        this.items.push(item);
      }
  }
}
