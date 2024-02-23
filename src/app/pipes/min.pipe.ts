import { Pipe, PipeTransform } from '@angular/core'
@Pipe({
  name: 'min',
  standalone: true
})
export class MinPipe implements PipeTransform {
  transform = (number1 = 0, number2 = 0) => Math.min(number1, number2)
}
