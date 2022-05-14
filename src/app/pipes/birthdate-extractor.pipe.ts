import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'birthdateExtractor'
})
export class BirthdateExtractorPipe implements PipeTransform {

  transform(value: string):string
   {
   
   let  day:string;
   day=value.substring(4,6);
let month:string;
month=value.substring(6,8);
   
let y:string;


    let year:string;
    // if(value.substring(0,1) != '2')
    // {
    //   y='19'
    //   year=y+value.substring(0,3);
    // }
    // else {
    //   y='20'
    //   year=y+value.substring(0,3);
    // }
let s:string;
s="/"
       year=value.substring(2,4);

    let date:string;
    date=day+ s+month+s+ year;
    return date
  }

}
