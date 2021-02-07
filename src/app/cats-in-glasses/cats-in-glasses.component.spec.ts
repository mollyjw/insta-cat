import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsInGlassesComponent } from './cats-in-glasses.component';

describe('CatsInGlassesComponent', () => {
  let component: CatsInGlassesComponent;
  let fixture: ComponentFixture<CatsInGlassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatsInGlassesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatsInGlassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
