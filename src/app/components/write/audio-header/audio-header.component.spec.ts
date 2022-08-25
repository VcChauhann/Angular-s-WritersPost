import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioHeaderComponent } from './audio-header.component';

describe('AudioHeaderComponent', () => {
  let component: AudioHeaderComponent;
  let fixture: ComponentFixture<AudioHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
