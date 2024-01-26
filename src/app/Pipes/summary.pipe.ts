import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, lengthvalue: number): unknown {
    if(!lengthvalue) return value;
    return value.substring(0, lengthvalue) + '...';
  }

}
