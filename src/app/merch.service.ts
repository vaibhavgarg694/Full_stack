import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api_url } from './config';

@Injectable({
  providedIn: 'root'
})
export class MerchService {

  url = api_url + '/order';

  constructor(private http: HttpClient) { }

  addOrder(formdata) {
    return this.http.post(this.url + '/add', formdata);
  }

  getAllOrders() {
    return this.http.get(this.url + '/getall');
  }

  getOrderNumber() {
    return this.http.get(this.url + '/getnum');
  }

  getOrderByUser(id) {
    return this.http.get(this.url + '/getbyuser/' + id);
  }

  b64toBlob(b64Data, contentType, sliceSize = 512) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);

      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      var byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  uploadImage(base64URL, merchname) {
    let block = base64URL.split(";");

    let contentType = block[0].split(":")[1];

    let realData = block[1].split(",")[1];

    let blob = this.b64toBlob(realData, contentType);

    let formDataToUpload = new FormData();
    formDataToUpload.append("merch-image", blob, merchname);

    return this.http.post(this.url + '/upload', formDataToUpload);

  }
}
