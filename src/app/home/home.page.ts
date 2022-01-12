import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { modalController } from '@ionic/core';
import { Subscription } from 'rxjs';
import { ModalpageComponent } from '../modalpage/modalpage.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  modalpg = ModalpageComponent;
  constructor(public modaalController : ModalController) {}

  async openmodal(){
    const modal =await this.modaalController.create({
      component: this.modalpg,
      componentProps : {
        annId:123,
        annContent : 'hello world'
      },
      cssClass: 'modalpage',
      backdropDismiss: true
    });

    modal.onDidDismiss().then(() => {
      console.log('Modal dismissed');

    });
    await modal.present();

  }

  ngOnInit(){
    this.openmodal();
  }
}
