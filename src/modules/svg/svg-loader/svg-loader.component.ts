import { Component, OnInit } from '@angular/core';
import { SvgLoaderService } from './svg-loader.service';

@Component({
  selector: 'app-svg-loader',
  templateUrl: './svg-loader.component.html',
  styleUrls: ['./svg-loader.component.scss']
})
export class SvgLoaderComponent implements OnInit {

  constructor(public svgLoaderService: SvgLoaderService) { }

  ngOnInit() {
  }

}
