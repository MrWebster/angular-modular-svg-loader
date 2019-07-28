import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteOneComponent } from './route-one.component';
import { RouteOneRoutingModule } from './route-one-routing.module';
import { IconTestModule } from 'src/modules/svg/svgs/icon-test/icon-test.module';

@NgModule({
  imports: [
    CommonModule,
    RouteOneRoutingModule,
    IconTestModule
  ],
  declarations: [RouteOneComponent]
})
export class RouteOneModule { }
