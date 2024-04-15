import {Routes} from '@angular/router';

import {TestConfigurationComponent} from "./components/test-configuration/test-configuration.component"
import {QuestionComponent} from "./components/question/question.component"
import {ResultsComponent} from "./components/results/results.component";

export const routes: Routes = [
  {path: 'start', component: TestConfigurationComponent},
  {path: '', redirectTo: '/start', pathMatch: 'full'},
  {path: 'game/:question', component: QuestionComponent},
  {path: 'results', component: ResultsComponent},
];

