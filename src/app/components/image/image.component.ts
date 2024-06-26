import {
  Component,
  Input,
  NgModule,
  OnInit
} from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { CommonModule } from '@angular/common'
import { LazyLoadImageModule } from 'ng-lazyload-image'
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() width: number | string = '100%'
  @Input() height: number | string = '100%'
  @Input() src: string | undefined = ''
  @Input() alt: string | undefined = ''
  width$: BehaviorSubject<string> = new BehaviorSubject('')
  paddingBottom$: BehaviorSubject<string> = new BehaviorSubject('')
  imgSrc$: BehaviorSubject<string> = new BehaviorSubject('')
  constructor() {}
  getValueWithUnit = (value: string | number) => value + (typeof value === 'number' || parseInt(value + '', 10).toString() === value
    ? 'px'
    : '')
  ngOnInit() {
    this.imgSrc$.next(this.src || '')
    this.width$.next(this.getValueWithUnit(this.width))
    this.paddingBottom$.next(this.getValueWithUnit(this.height))
  }
}
@NgModule({
  imports: [CommonModule, LazyLoadImageModule],
  declarations: [ImageComponent],
  exports: [ImageComponent]
})
export class ImageComponentModule {}
