import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Changebase64Service {

  constructor() { }
  fonttobase64(text){

    return btoa(unescape(encodeURIComponent(text)));
  }
  base64tofont(base64){
    return decodeURIComponent(escape(atob(base64)));
  }
  picturetobase64(img,mine_type){//minetype =>string image/png or image/jpeg other
    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img,0,0);
    return canvas.toDataURL(mine_type);
  }

  base64topicture(base64img,callback){
    var img = new Image();
    img.onload = function () {
      callback(img);
    }
    img.src = base64img;
  }

}
