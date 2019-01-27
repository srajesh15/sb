import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckyNumberGenComponent } from './lucky-number-gen.component';

describe('LuckyNumberGenComponent', () => {
  let component: LuckyNumberGenComponent;
  let fixture: ComponentFixture<LuckyNumberGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuckyNumberGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuckyNumberGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
