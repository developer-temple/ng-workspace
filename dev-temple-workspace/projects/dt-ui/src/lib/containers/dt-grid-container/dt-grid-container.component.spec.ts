import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtGridContainerComponent } from './dt-grid-container.component';

describe('DtGridContainerComponent', () => {
  let component: DtGridContainerComponent;
  let fixture: ComponentFixture<DtGridContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtGridContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtGridContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
