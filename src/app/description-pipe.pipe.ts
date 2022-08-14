import { LiteralPrimitive } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descriptionPipe'
})
export class DescriptionPipePipe implements PipeTransform {

  transform(value: string, num?: number ):string {
    if(!value) return null;
    num=num?num:20;
    if(num>value.length) return value;

    return value.substring(0,num)+"...";
  }

}
