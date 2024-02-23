import { ComponentFixture, TestBed } from '@angular/core/testing'

import { YouTubePlayerComponent } from './youtube-player.component'

describe('YoutubePlayerComponent', () => {
  let component: YouTubePlayerComponent
  let fixture: ComponentFixture<YouTubePlayerComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YouTubePlayerComponent]
    })
    fixture = TestBed.createComponent(YouTubePlayerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
