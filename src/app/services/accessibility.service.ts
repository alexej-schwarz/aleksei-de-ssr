import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class AccessibilityService {
  hasOutline = false
  toggleOutline = () => {
    this.hasOutline = !this.hasOutline
  }
}
