import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'features',
    loadChildren: () => import('./components/pages/features/features.module')
      .then(mod => mod.FeaturesModule)
  },
  // {
  //   path: 'pricing',
  //   loadChildren: () => import('./modules/general/about/about.module')
  //     .then(mod => mod.AboutModule)
  // },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
