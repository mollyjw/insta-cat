import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsInClothesComponent } from './cats-in-clothes.component';

describe('CatsInClothesComponent', () => {
  let component: CatsInClothesComponent;
  let fixture: ComponentFixture<CatsInClothesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatsInClothesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatsInClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
