import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';

const materialComponents = [MatMenuModule];

@NgModule({
  imports: [materialComponents],
  exports: [materialComponents],
})
export class MaterialModule {}
