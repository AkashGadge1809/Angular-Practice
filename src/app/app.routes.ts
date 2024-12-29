import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { PagenotFoundComponent } from './components/pagenot-found/pagenot-found.component';
import { FormComponent } from './components/form/form.component';
import { ViewChildComponent } from './components/view-child/view-child.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CRUDComponent } from './components/crud/crud.component';

export const routes: Routes = [

    {  path: '', component:NavbarComponent },

    {  path:'Directives', component: StructuralDirectivesComponent },

    {  path:'Pipes', component:PipesComponent },

    {  path:'Child', component:ChildComponent }, 

    {  path:'Parent', component:ParentComponent },

    {  path:'Child', redirectTo:'Directives'},
    {  path:'form',component:FormComponent, children:[
        {path:'template', component:TemplateFormComponent},
        {path:'reactive', component:ReactiveFormComponent}
    ]},
    
    { path:'viewchild', component: ViewChildComponent},
    
    { path:'user', component: UserDataComponent},

    { path:'crud', component: CRUDComponent},


    // {   path:'form/:id', component:FormComponent},
    {  path:'**', component:PagenotFoundComponent}

];
