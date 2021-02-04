import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFavoritesComponent } from './all-favorites.component';

describe('AllFavoritesComponent', () => {
  let component: AllFavoritesComponent;
  let fixture: ComponentFixture<AllFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFavoritesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
