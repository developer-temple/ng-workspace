import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtFlexContainerComponent } from './dt-flex-container.component';

describe('DtFlexContainerComponent', () => {
  let component: DtFlexContainerComponent;
  let fixture: ComponentFixture<DtFlexContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtFlexContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtFlexContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
