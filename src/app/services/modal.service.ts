import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  isOpen$ = new BehaviorSubject(false)
  content$: BehaviorSubject<any> = new BehaviorSubject(null)
  triggerEl$: BehaviorSubject<HTMLElement | null> = new BehaviorSubject(<HTMLElement | null>null)
  constructor() {
    this.isOpen$.subscribe(
      (isOpen) => {
        if (!isOpen) {
          this.triggerEl$.value?.focus()
          this.triggerEl$.next(null)
          this.content$.next(null)
        }
      }
    )
  }
}
