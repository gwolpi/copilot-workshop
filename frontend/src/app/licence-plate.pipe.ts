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
    return licencePlate;
  }
}
