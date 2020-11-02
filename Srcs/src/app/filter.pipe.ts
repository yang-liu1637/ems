
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(subject: any, cource: any): any {
    if (!cource) {
      return subject;
    }
    // tslint:disable-next-line:only-arrow-functions
    return subject.filter(function(subjects): boolean {
      return subjects.toLowerCase().includes(cource.toLowerCase());   // 实现模糊查询
    });
  }
}
