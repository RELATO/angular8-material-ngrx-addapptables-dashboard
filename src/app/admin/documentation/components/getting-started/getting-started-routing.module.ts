import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { InstallationComponent } from './installation/installation.component';

const routes: Routes = [{
    path: 'introduction',
    component: IntroductionComponent
}, {
    path: 'installation',
    component: InstallationComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GettingStartedRoutingModule { }
