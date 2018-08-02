import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {CodePage } from '../code/code';
import{HomePage}from '../home/home';
import { ToastController } from 'ionic-angular';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  phone: string ;
  code:string;
  constructor( private toastCtrl: ToastController,private storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
    storage.get('loged').then((loged:string)=>{
      console.log(loged)
      if(loged=='1')
      {
        this.navCtrl.setRoot(HomePage);
      }else
      {
       
      }
  
    })
  }


  presentToast(msg:string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
login()
{
  
  this.storage.set('phone', this.phone);
  this.storage.set('loged','1');
  
  this.code=''+this.random();
  this.presentToast(this.code);
  this.storage.set('code',this.code);
  //this.http.post('','','');
  this.navCtrl.setRoot(CodePage,{code:this.code});
}
random(): number {
  let rand = Math.floor(Math.random()*900)+1;
  return rand;       
}
}
