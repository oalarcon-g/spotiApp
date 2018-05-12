import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nophoto'
})
export class NophotoPipe implements PipeTransform {

  transform(images : any[]): any {
    const noimage = 'assets/img/noimage.png';

    if (!images) {
      return noimage;
    }
    return (images.length > 0) ? images[1].url : noimage;
  }

}
