import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsInSinkComponent } from './cats-in-sink.component';

describe('CatsInSinkComponent', () => {
  let component: CatsInSinkComponent;
  let fixture: ComponentFixture<CatsInSinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatsInSinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatsInSinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
