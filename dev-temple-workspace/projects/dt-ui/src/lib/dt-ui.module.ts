import { NgModule } from '@angular/core';
import { DtFlexContainerModule } from './containers/dt-flex-container/dt-flex-container.module';

@NgModule({
  imports: [
    DtFlexContainerModule
  ],
  exports: [
    DtFlexContainerModule
  ]
})
export class DtUiModule { }
