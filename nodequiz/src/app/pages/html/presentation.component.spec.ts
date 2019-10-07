import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlBasicsComponent } from './presentation.component';

describe('HtmlBasicsComponent', () => {
  let component: HtmlBasicsComponent;
  let fixture: ComponentFixture<HtmlBasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlBasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
