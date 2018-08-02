import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';
import{ HomePage} from '../home/home';
import { ToastController } from 'ionic-angular';


/**
 * Generated class for the CodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-code',
  templateUrl: 'code.html',
})
export class CodePage {
code:string;
codeenter:string;
  constructor(private toastCtrl: ToastController,public storage:Storage, public navCtrl: NavController, public navParams: NavParams) {
    
  storage.get('loged').then((loged:string)=>{
    if(loged!='1')
    {
        this.navCtrl.setRoot(LoginPage);
    }else
    {
      storage.get('code').then((co:string)=>{
      this.code=co;
      });
    }

  })

}

codeok()
{
  if(this.codeenter==this.code)
  {
    this.navCtrl.setRoot(HomePage);
  }else
  {
    this.presentToast('الرجاء التاكد من الرمز');
  }

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
}
