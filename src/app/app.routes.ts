import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { TableComponent } from './table/table.component';

export const routes: Routes = [
    { path: '', component: TableComponent },
    { path: 'details/:id', component: DetailsComponent }
];
