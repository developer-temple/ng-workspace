import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtBlockContainerComponent } from './dt-block-container.component';

describe('DtBlockContainerComponent', () => {
  let component: DtBlockContainerComponent;
  let fixture: ComponentFixture<DtBlockContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtBlockContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtBlockContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
