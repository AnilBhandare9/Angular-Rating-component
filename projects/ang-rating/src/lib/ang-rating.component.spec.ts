import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngRatingComponent } from './ang-rating.component';

describe('AngRatingComponent', () => {
  let component: AngRatingComponent;
  let fixture: ComponentFixture<AngRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
