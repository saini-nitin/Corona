import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCandidateComponent } from './create-candidate.component';


const routes: Routes = [
    {
        path: '', component: CreateCandidateComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreateCandidateRoutingModule {
}
