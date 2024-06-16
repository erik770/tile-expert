import { BreakpointObserver } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Breakpoints } from '@shared/enums/breakpoints.enum';
import { combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-global-search-filters',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIcon,
    MatCheckboxModule,
  ],

  templateUrl: './search-filters.component.html',
  styleUrl: './search-filters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlobalSearchFiltersComponent {
  private readonly breakpointObserver = inject(BreakpointObserver);
  private readonly fb = inject(NonNullableFormBuilder);

  protected readonly vm$ = combineLatest({
    isMobileView: this.breakpointObserver
      .observe(Breakpoints.MOBILE)
      .pipe(map((res) => res.matches)),
  });

  protected form = this.fb.group({
    author: this.fb.control('', { validators: [Validators.maxLength(50)] }),
    isMember: this.fb.control<boolean>(false),
    onlyHeaders: this.fb.control<boolean>(false),
    isStrict: this.fb.control<boolean>(false),
    onlyTags: this.fb.control<boolean>(false),
    onlyRequests: this.fb.control<boolean>(false),
    onlyContacts: this.fb.control<boolean>(false),
  });
}
