import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenWriterComponent } from './open-writer.component';

describe('OpenWriterComponent', () => {
  let component: OpenWriterComponent;
  let fixture: ComponentFixture<OpenWriterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenWriterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
