import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElseComponent } from './else.component';

describe('ElseComponent', () => {
  let component: ElseComponent;
  let fixture: ComponentFixture<ElseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
