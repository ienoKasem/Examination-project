import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourcesComponent } from './components/cources/cources.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ExamComponent } from './components/exam/exam.component';
import { GradeComponent } from './components/grade/grade.component';
import { AuthGuard } from './Gards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [

  {path:"",redirectTo:"Home",pathMatch:'full'},
  {path:"Home",canActivate: [AuthGuard],component:HomeComponent,title:"Home"},

  {path:"Courses",canActivate: [AuthGuard],component:CourcesComponent,title:"Courses"},
  {path:"Courses/:id",canActivate: [AuthGuard],component:ExamComponent,title:"Exam"},
  {path:"Grade",canActivate: [AuthGuard],component:GradeComponent,title:"Grade"},


  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },

  {path:"**",component:NotFoundComponent,title:"NotFound"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
