import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpaddComponent } from './empadd/empadd.component';
import { EmpeditComponent } from './empedit/empedit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { UpdateComponent } from './update/update.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmplistComponent,
    EmpaddComponent,
    EmpeditComponent,
    EmpdetailsComponent,
    UpdateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
