import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core'
import { AsyncPipe, NgIf } from '@angular/common'

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent implements OnInit {
  @Input() icon!: string
  @Input() width?: number
  @Input() height?: number
  @Input() size?: number | string = ''
  @Input() color?: string
  @Input() class?: string
  ngOnInit() {
    if (typeof this.size === 'number') {
      this.width = this.size
      this.height = this.size
    }
  }
}
