import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { GuitarComponent } from './guitar/guitar.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
    {path:"", component: GuitarComponent},
    {path:"form", component: FormComponent}
];
