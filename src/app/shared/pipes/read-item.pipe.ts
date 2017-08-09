//For transforming JSON data to Object

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readItem'
})
export class ReadItemPipe implements PipeTransform {

 transform(object:any) {
    var newArray = []
    for (var key in object) {
        newArray.push(object[key]);
    }
    return newArray;
  }

}