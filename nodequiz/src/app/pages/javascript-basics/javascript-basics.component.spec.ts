import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptBasicsComponent } from './javascript-basics.component';

describe('JavascriptBasicsComponent', () => {
  let component: JavascriptBasicsComponent;
  let fixture: ComponentFixture<JavascriptBasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavascriptBasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
