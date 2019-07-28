import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'route-one',
    loadChildren: () => import('../features/route-one/route-one.module').then(mod => mod.RouteOneModule),
  },
  {
    path: 'route-two',
    loadChildren: () => import('../features/route-two/route-two.module').then(mod => mod.RouteTwoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
