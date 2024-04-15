import { Routes } from '@angular/router';

import { TestConfigurationComponent } from "./components/test-configuration/test-configuration.component"

export const routes: Routes = [
  { path: 'start', component: TestConfigurationComponent },
  { path: '', redirectTo: '/start', pathMatch: 'full' }
];
