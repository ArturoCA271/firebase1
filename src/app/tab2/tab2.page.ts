import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  scannerCode = null;
  constructor(private barcode: BarcodeScanner, private image: Base64ToGallery,
    private toast: ToastController) {}

  scanerCode(){
    this.barcode.scan().then(
      barcodeData => {
        this.scannerCode = barcodeData.text;
      }
    );
  }

  downloadQR(){
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    const imageData = canvas.toDataURL('image/jpeg').toString();
    console.log('data: ', imageData);

    let data = imageData.split(',')[1];
    this.image.base64ToGallery(data, 
      { prefix:  '_img', mediaScanner:true})
      .then(async res => {
        let toast = await this.toast.create({
          header: 'QR Code  saved  in your photolibrary'
        });
      }, err => console.log('err: ', err)
      );

  }

}
