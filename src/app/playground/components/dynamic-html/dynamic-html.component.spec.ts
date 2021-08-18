import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicHtmlComponent } from './dynamic-html.component';

describe('DynamicHtmlComponent', () => {
  let component: DynamicHtmlComponent;
  let fixture: ComponentFixture<DynamicHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicHtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
