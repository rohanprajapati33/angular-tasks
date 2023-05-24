import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'RohanPrajapati angular'
})
export class UsdInrPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value;
  }
}
