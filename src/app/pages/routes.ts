import { Routes } from '@angular/router';
import { ShellWrapperComponent } from '@wrappers/shell/shell.component';
import { TestPageComponent } from './test/test-page.component';

export const mainRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'test-page' },
  {
    path: '',
    component: ShellWrapperComponent,
    children: [
      {
        path: 'text-page',
        component: TestPageComponent,
      },
    ],
  },
];
