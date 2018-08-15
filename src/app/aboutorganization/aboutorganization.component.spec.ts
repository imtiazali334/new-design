import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutorganizationComponent } from './aboutorganization.component';

describe('AboutorganizationComponent', () => {
  let component: AboutorganizationComponent;
  let fixture: ComponentFixture<AboutorganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutorganizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutorganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
