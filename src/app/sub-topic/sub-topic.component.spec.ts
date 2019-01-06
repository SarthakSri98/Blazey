import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTopicComponent } from './sub-topic.component';

describe('SubTopicComponent', () => {
  let component: SubTopicComponent;
  let fixture: ComponentFixture<SubTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
