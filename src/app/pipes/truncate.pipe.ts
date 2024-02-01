import { NgModule, Pipe, PipeTransform } from '@angular/core'
import { HeaderComponent } from '../components/header/header.component';
import { MainMenuComponent } from '../components/header/main-menu/main-menu.component';
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
    declarations: [TruncatePipe, HeaderComponent, MainMenuComponent],
    exports: [TruncatePipe, HeaderComponent],
})
export class TruncatePipeModule {}
