import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgLoaderService } from '../../svg-loader/svg-loader.service';

@NgModule({
  imports: [
    CommonModule,
  ]
})
export class IconQuillModule {
  definition = {
    symbol: {
      id: 'icon-quill',
      viewBox: '0 0 32 32'
    },
    title: 'Quill',
    shapes: [
      {
        type: 'path',
        d: 'M0 32c4-12 14.469-32 32-32-8.219 6.594-12 22-18 22s-6 0-6 0l-6 10h-2z',
        fill: 'pink'
      }
    ]
  };

  constructor(private svgLoaderService: SvgLoaderService) {
    svgLoaderService.registerSvgDefinition(this.definition);
  }
}
