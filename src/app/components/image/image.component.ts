import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core'
import { AsyncPipe } from '@angular/common'
import { LazyLoadImageModule } from 'ng-lazyload-image'
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [LazyLoadImageModule, AsyncPipe]
})
export class ImageComponent implements OnInit {
  @Input() width: number | string = '100%'
  @Input() height: number | string = '100%'
  @Input() src: string | undefined = ''
  @Input() alt: string | undefined = ''
  @Input() round = false
  widthParsed = this.width
  paddingBottom = this.height

  getValueWithUnit = (value: string | number) => value + (typeof value === 'number' || parseInt(value + '', 10).toString() === value
    ? 'px'
    : '')
  ngOnInit() {
    this.widthParsed = this.getValueWithUnit(this.width)
    this.paddingBottom = this.getValueWithUnit(this.height)
  }
}

