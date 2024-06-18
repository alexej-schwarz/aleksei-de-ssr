import {
  Inject,
  Injectable,
  Optional,
  PLATFORM_ID
} from '@angular/core'
import { DeviceDetectorService } from 'ngx-device-detector'
import { isPlatformServer } from '@angular/common'
import { REQUEST } from './express.tokens'

@Injectable({
  providedIn: 'root'
})
export class UniversalDeviceDetectorService extends DeviceDetectorService {
  constructor(
    @Inject(PLATFORM_ID) platformId: any,
    @Optional() @Inject(REQUEST) request: any
  ) {
    super(platformId)
    if (isPlatformServer(platformId)) {
      super.setDeviceInfo((request?.headers['user-agent'] as string) || '')
    }
  }
}
