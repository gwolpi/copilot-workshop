import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readableProperty'
})
export class ReadablePropertyPipe implements PipeTransform {

  transform(value: string): string {
    return value;
  }

}
