import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowsComponent } from './shows/shows.component';

export const AppRoutes: Routes = [
    {
        path: 'shows',
        component: ShowsComponent
    }
]