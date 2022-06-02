import { DecimalPipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoordinateFormatterService {
  constructor(private decimalPipe: DecimalPipe) {}

  /**
   * Форматирование координат
   * @param coordinates
   * @param fractionDigits
   * @param template
   * @returns
   */
  public numberCoordinates(
    coordinates: number[] | undefined,
    fractionDigits: number = 0,
    template?: string
  ) {
    if (!coordinates) {
      return '';
    }
    template = template || '{x} {y}';
    const x = coordinates[0];
    const y = coordinates[1];
    const digitsInfo = `1.${fractionDigits}-${fractionDigits}`;
    const newX = this.decimalPipe.transform(x, digitsInfo);
    const newY = this.decimalPipe.transform(y, digitsInfo);
    if (newX && newY) {
      return template.replace('{x}', newX).replace('{y}', newY);
    }

    return '';
  }
}
