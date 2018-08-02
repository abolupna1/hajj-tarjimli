import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import{LangPage}from '../lang/lang';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lang:string;
  constructor(private storage: Storage,public navCtrl: NavController) {

  }
  codeok()
  {
    this.navCtrl.push(LangPage);
    console.log(this.lang);
  }
}
