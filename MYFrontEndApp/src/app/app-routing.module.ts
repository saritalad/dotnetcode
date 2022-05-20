import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpaddComponent } from './empadd/empadd.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { EmpeditComponent } from './empedit/empedit.component';
import { EmplistComponent } from './emplist/emplist.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
{path:"home",component:HomeComponent},
{path:"emplist",component:EmplistComponent},
{path:"add",component:EmpaddComponent},
{path:"details/:id",component:EmpdetailsComponent},
{path:"edit/:id",component:EmpeditComponent},
{path:"update/:id",component:UpdateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
