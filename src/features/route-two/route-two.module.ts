import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteTwoComponent } from './route-two.component';
import { RouteTwoRoutingModule } from './route-two-routing.module';
import { IconTestModule } from 'src/modules/svg/svgs/icon-test/icon-test.module';
import { IconQuillModule } from 'src/modules/svg/svgs/icon-quill/icon-quill.module';

@NgModule({
  imports: [
    CommonModule,
    RouteTwoRoutingModule,
    IconQuillModule,
    IconTestModule,
  ],
  declarations: [RouteTwoComponent]
})
export class RouteTwoModule { }
