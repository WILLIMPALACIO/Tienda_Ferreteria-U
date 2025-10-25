import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AboutUs } from './pages/about-us/about-us';
import { Detalles } from './pages/detalles/detalles';
import { Contact } from './pages/contact/contact';
import { Herramientas } from './pages/herramientas/herramientas';
import { Component } from '@angular/core';

export const routes: Routes = [
  {
    component: Home,
    path: 'home',
  },
  {
    component: Contact,
    path: 'contact',
  },
  {
    component: Herramientas,
    path: 'herramientas',
  },
  
  
  { component: AboutUs, path: 'about-us' },
  
  {
    component: Detalles,
    path: 'detalles/:id',
  },
  
  
  {
    redirectTo: 'home',
    path: '',
    pathMatch: 'full',
  },
  {
    redirectTo: 'home',
    path: '**',
    pathMatch: 'full',
  },
];
