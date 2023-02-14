import { Testing2Component } from './testing2/testing2.component';
import { Testing1Component } from './testing1/testing1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:'',component : Testing1Component},
{path:'test1',component : Testing1Component},
{path:'test2',component : Testing2Component},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class TestRoutingModule { }
