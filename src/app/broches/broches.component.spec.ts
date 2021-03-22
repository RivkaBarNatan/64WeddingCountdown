import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrochesComponent } from './broches.component';

describe('BrochesComponent', () => {
  let component: BrochesComponent;
  let fixture: ComponentFixture<BrochesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrochesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrochesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
