import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'information' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'information', loadChildren: './candidate/candidate.module#CandidateModule' },
            { path: 'create-candidate', loadChildren: './create-candidate/create-candidate.module#CreateCandidateModule' },
            { path: 'create-interview', loadChildren: './pop-up/pop-up/pop-up.module#PopUpModule' },
            { path: 'status-info', loadChildren: './info-dialog/info-dialog/info-dialog.module#InfoDialogModule' },     
            { path: 'candidate-details/:id', loadChildren: './candidate-details/candidate-details.module#CandidateDetailsModule' }            
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
