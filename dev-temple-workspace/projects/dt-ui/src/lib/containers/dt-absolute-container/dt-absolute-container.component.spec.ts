import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtAbsoluteContainerComponent } from './dt-absolute-container.component';

describe('DtAbsoluteContainerComponent', () => {
  let component: DtAbsoluteContainerComponent;
  let fixture: ComponentFixture<DtAbsoluteContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtAbsoluteContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtAbsoluteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
