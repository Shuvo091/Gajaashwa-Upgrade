import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const childrenRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },

  {
    path: '',
    loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'about-us',
    loadComponent: () => import('./about-us/about-us.component').then(m => m.AboutUsComponent)
  },
  {
    path: 'contact-us',
    loadComponent: () => import('./contact-us/contact-us.component').then(m => m.ContactUsComponent)
  },
  {
    path: 'faqs',
    loadComponent: () => import('./faqs/faqs.component').then(m => m.FaqsComponent)
  },
  {
    path: 'testimonials',
    loadComponent: () => import('./testimonials/testimonials.component').then(m => m.TestimonialsComponent)
  },
  {
    path: 'products-and-services',
    loadComponent: () => import('./products-and-services/products-and-services.component').then(m => m.ProductsAndServicesComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./error404/page-under-construction.component').then(m => m.PageUnderConstructionComponent)
  }
];
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: childrenRoutes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
