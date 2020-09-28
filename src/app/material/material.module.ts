import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

const materialComponents = [MatSidenavModule];

@NgModule({
  imports: [MatSidenavModule],
  exports: [MatSidenavModule],
})
export class MaterialModule {}
