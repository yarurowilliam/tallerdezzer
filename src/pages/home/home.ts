import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { CancionesService } from '../../providers/canciones-service';
import { LoadingController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[CancionesService]
})
export class HomePage {

  public playlist: any;
  public songs: any;

  constructor(
    public userService: CancionesService,
    public loadingCtrl: LoadingController,
    public modalCtrl:   ModalController
  ) {
  }

  ionViewDidLoad() {
    let loader= this.loadingCtrl.create();
    loader.present();
    this.userService.traerCanciones().subscribe( data => {
      this.songs = data.data;
      loader.dismiss();
    })
  }
}
