import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/form.component';
import { HeroesComponent } from './heroes/heroes.component'
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NewComponent } from './heroes/new/new.component';
import { New2Component } from './heroes/new/new2/new2.component';

const appRoutes: Routes = [
  { path: '', component:TasksComponent
},
{ path: 'about', component:AboutComponent
}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroesComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent,
    FormComponent,
    HeroesComponent,
    NewComponent,
    New2Component
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    NgZorroAntdModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true})


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
