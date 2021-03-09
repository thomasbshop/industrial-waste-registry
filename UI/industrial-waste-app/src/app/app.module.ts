import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DataTableComponent } from './pages/data-table/data-table.component';
import { StepperFormComponent } from './pages/stepper-form/stepper-form.component';
import { FormContainerComponent } from './pages/form-container/form-container.component';
import { FormatTitlePipe } from './pipes/form-title-pipe';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { FormComponent } from './pages/form/form.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DataTableComponent,
    StepperFormComponent,
    FormContainerComponent,
    FormatTitlePipe,
    MainPageComponent,
    CallbackComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzButtonModule,
    NzTableModule,
    NzPopconfirmModule,
    NzInputModule,
    NzModalModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
