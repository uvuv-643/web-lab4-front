import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from '../components/app/app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {TopBarComponent} from "../components/top-bar/top-bar.component";
import {HomeComponent} from "../components/home/home.component";
import {CheckboxModule} from "primeng/checkbox";
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {HomeLoginComponent} from "../components/home.login/home.login.component";
import {HomeRegisterComponent} from "../components/home.register/home.register.component";
import {InputMaskModule} from "primeng/inputmask";
import {AuthGuard} from "../helpers/auth.guard";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {GraphicComponent} from "../components/graphic/graphic.component";
import {GraphicAxesComponent} from "../components/graphic.axes/graphic.axes.component";
import {GraphicInputsComponent} from "../components/graphic.inputs/graphic.inputs.component";
import {GraphicTableComponent} from "../components/graphic.table/graphic.table.component";
import {GraphicPointComponent} from "../components/graphic.point/graphic.point.component";
import {GraphicPlaneComponent} from "../components/graphic.plane/graphic.plane.component";
import {TableModule} from "primeng/table";
import {SplitButtonModule} from "primeng/splitbutton";
import {ToolbarModule} from "primeng/toolbar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MenuModule} from "primeng/menu";
import {RippleModule} from "primeng/ripple";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ConfirmationService} from "primeng/api";
import {TokenInterceptor} from "../helpers/token.interceptor";
import {HomeRegisterMainComponent} from "../components/home.register.main/home.register.main.component";
import {HomeRegisterSmsComponent} from "../components/home.register.sms/home.register.sms.component";
import {DialogModule} from "primeng/dialog";

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        PasswordModule,
        RouterModule.forRoot([
            {path: '', component: HomeComponent, canActivate: [AuthGuard]},
            {path: 'login', component: HomeLoginComponent},
            {path: 'register', component: HomeRegisterComponent}
        ]),
        CheckboxModule,
        InputTextModule,
        InputTextModule,
        ButtonModule,
        InputMaskModule,
        HttpClientModule,
        TableModule,
        SplitButtonModule,
        ToolbarModule,
        BrowserAnimationsModule,
        MenuModule,
        RippleModule,
        ConfirmDialogModule,
        DialogModule,
    ],
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    HomeLoginComponent,
    HomeRegisterComponent,
    GraphicComponent,
    GraphicAxesComponent,
    GraphicInputsComponent,
    GraphicTableComponent,
    GraphicPointComponent,
    GraphicPlaneComponent,
    HomeRegisterMainComponent,
    HomeRegisterSmsComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
})

export class AppModule { }
