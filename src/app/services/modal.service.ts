import { Injectable, signal, WritableSignal } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  isOpen = signal(false)
  content: WritableSignal<any> = signal(null)
  triggerEl: WritableSignal<HTMLElement | null> = signal(null)
}
