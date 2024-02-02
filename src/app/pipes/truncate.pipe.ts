import { NgModule, Pipe, PipeTransform } from '@angular/core'
@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value = '', limit = 100, ellipsis = ' …') {
    const limitWithSpase = value.substr(0, limit).lastIndexOf(' ')
    return value.length > limit && limit >= limitWithSpase ? value.substr(0, limitWithSpase) + ellipsis : value
  }
}

@NgModule({
  declarations: [TruncatePipe],
  exports: [TruncatePipe],
})
export class TruncatePipeModule {}
