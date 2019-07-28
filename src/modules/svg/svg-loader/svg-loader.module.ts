import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgLoaderComponent } from './svg-loader.component';
import { SvgLoaderService } from './svg-loader.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SvgLoaderComponent],
  providers: [SvgLoaderService],
  exports: [SvgLoaderComponent],
})
export class SvgLoaderModule { }
