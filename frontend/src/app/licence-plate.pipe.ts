import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'licencePlate'
})
export class LicencePlatePipe implements PipeTransform {

  /**
   * Assignment 1: Using GitHub Copilot, implement the transform method
   * @param licencePlate {string} The licence plate to transform
   */
  transform(licencePlate: string): string {
    // Take the first 6 alphanumeric characters
    licencePlate = licencePlate.replace(/[^a-zA-Z0-9]/g, '').substring(0, 6);
    // When a letter is followed by a number or vice versa, insert a '-' between them
    licencePlate = licencePlate.replace(/([a-zA-Z])([0-9])/g, '$1-$2');
    licencePlate = licencePlate.replace(/([0-9])([a-zA-Z])/g, '$1-$2');
    // Uppercase the licence plate
    licencePlate = licencePlate.toUpperCase();
    return licencePlate;
  }
}
