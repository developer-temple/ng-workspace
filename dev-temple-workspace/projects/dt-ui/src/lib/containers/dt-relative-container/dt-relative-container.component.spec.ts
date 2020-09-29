import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtRelativeContainerComponent } from './dt-relative-container.component';

describe('DtRelativeContainerComponent', () => {
  let component: DtRelativeContainerComponent;
  let fixture: ComponentFixture<DtRelativeContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtRelativeContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtRelativeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
