import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsInBoxesComponent } from './cats-in-boxes.component';

describe('CatsInBoxesComponent', () => {
  let component: CatsInBoxesComponent;
  let fixture: ComponentFixture<CatsInBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatsInBoxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatsInBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
