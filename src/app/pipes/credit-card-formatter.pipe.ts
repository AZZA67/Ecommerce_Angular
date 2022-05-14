import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormatter'
})
export class CreditCardFormatterPipe implements PipeTransform {

  transform(value: string): string {
    let s:string;
    s="-";
    let f:string;
   f=value.substring(0,5)+s+value.substring(5,9)+s+value.substring(9,13)
   return f;
  }

}
