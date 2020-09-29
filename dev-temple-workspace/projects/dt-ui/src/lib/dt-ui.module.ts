import { NgModule } from '@angular/core';
import { DtFlexContainerModule } from './containers/dt-flex-container/dt-flex-container.module';
import { DtGridContainerModule } from './containers/dt-grid-container/dt-grid-container.module';
import { DtAbsoluteContainerModule } from './containers/dt-absolute-container/dt-absolute-container.module';
import { DtBlockContainerModule } from './containers/dt-block-container/dt-block-container.module';
import { DtFixedContainerModule } from './containers/dt-fixed-container/dt-fixed-container.module';
import { DtRelativeContainerModule } from './containers/dt-relative-container/dt-relative-container.module';

@NgModule({
  imports: [
    DtAbsoluteContainerModule,
    DtBlockContainerModule,
    DtFixedContainerModule,
    DtFlexContainerModule,
    DtGridContainerModule,
    DtRelativeContainerModule
  ],
  exports: [
    DtAbsoluteContainerModule,
    DtBlockContainerModule,
    DtFixedContainerModule,
    DtFlexContainerModule,
    DtGridContainerModule,
    DtRelativeContainerModule
  ]
})
export class DtUiModule { }
