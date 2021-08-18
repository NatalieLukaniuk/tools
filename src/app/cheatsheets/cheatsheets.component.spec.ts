import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheatsheetsComponent } from './cheatsheets.component';

describe('CheatsheetsComponent', () => {
  let component: CheatsheetsComponent;
  let fixture: ComponentFixture<CheatsheetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheatsheetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheatsheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
