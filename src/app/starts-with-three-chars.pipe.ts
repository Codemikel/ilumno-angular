import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'startsWithThreeChars'
})
export class StartsWithThreeCharsPipe implements PipeTransform {
  transform(items: any[], filter: string): string[] {
    if (!items || !filter) {
      return items;
    }

    const filterValue = filter.toLowerCase().substring(0, 3);

    return items.filter(item => item.toLowerCase().startsWith(filterValue));
  }
}
