import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

// modules
import { AppRoutingModule } from './app-routing.module';
import { SetupModule } from './pages/setup/setup.module';
import { MainModule } from './pages/main/main.module';

// services
import { LocalStorageService } from './services/local-storage/local-storage.service';
''
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';



registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SetupModule,
    MainModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
