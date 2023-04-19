import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readableProperty'
})
export class ReadablePropertyPipe implements PipeTransform {

  transform(value: string): string {
    // Split the string on _
    // Capitalise the start of each word
    // join with spaces
    return value.split('_').map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  }

}
