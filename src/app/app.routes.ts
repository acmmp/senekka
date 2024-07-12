import { Routes } from '@angular/router';
import { ProductsComponent } from './features/products/products.component';
import { ContactoComponent } from './features/contacto/contacto.component';

export const routes: Routes = [
    { path: 'Productos', component: ProductsComponent },
    { path: 'Contacto', component: ContactoComponent }
];
