import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsInSpaceComponent } from './cats-in-space.component';

describe('CatsInSpaceComponent', () => {
  let component: CatsInSpaceComponent;
  let fixture: ComponentFixture<CatsInSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatsInSpaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatsInSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
