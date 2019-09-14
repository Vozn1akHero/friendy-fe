import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'  // <- ADD THIS
})
export class ImageService{
/*  encodeImageFileAsURL(element) {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
      console.log('RESULT', reader.result)
    };
    reader.readAsDataURL(file);
  }*/

  encodeImageFileAsURL(file, cb) {
    return function(){
      var reader  = new FileReader();
      reader.onloadend = function () {
        console.log(reader.result)
        cb(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  uploadFiles(file, callback) {
    let canvas = document.createElement('canvas');
    let img = document.createElement('img');
    img.src = file;
    img.onload = function () {
      canvas.height = img.height;
      canvas.width = img.width;
      let dataURL = canvas.toDataURL('image/png');
      //console.log('>>><<<',dataURL);
      canvas = null;
      callback(dataURL);
    };
  }
}
