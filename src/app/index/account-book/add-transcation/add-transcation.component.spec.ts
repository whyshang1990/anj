import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTranscationComponent } from './add-transcation.component';

describe('AddTranscationComponent', () => {
  let component: AddTranscationComponent;
  let fixture: ComponentFixture<AddTranscationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTranscationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTranscationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
