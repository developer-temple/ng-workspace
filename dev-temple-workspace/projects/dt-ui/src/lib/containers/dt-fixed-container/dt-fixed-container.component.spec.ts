import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtFixedContainerComponent } from './dt-fixed-container.component';

describe('DtFixedContainerComponent', () => {
  let component: DtFixedContainerComponent;
  let fixture: ComponentFixture<DtFixedContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtFixedContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtFixedContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
