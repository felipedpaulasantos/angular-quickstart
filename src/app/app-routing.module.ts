import { AlbumModule } from './pages/album/album.module';
import { AlbumComponent } from './pages/album/album.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "album",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent,
    data: {
      title: "Início",
      animation: "Home"
    }
  },
	{
    path: "album",
    loadChildren: () => import('./pages/album/album.module').then(m => m.AlbumModule),
    data: {
      title: "Album",
      animation: "Album"
    }
  },
  {
    path: "**",
    redirectTo: "home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    scrollPositionRestoration: "enabled",
    useHash: true,
    initialNavigation: 'enabledNonBlocking'
})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
