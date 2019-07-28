import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SvgLoaderModule } from 'src/modules/svg/svg-loader/svg-loader.module';
import { IconQuillModule } from 'src/modules/svg/svgs/icon-quill/icon-quill.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SvgLoaderModule,
    IconQuillModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
