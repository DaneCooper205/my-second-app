import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickDisplayDetailsComponent } from './click-display-details.component';

describe('ClickDisplayDetailsComponent', () => {
  let component: ClickDisplayDetailsComponent;
  let fixture: ComponentFixture<ClickDisplayDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickDisplayDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClickDisplayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
