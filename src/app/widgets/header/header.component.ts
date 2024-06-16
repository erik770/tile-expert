import { BreakpointObserver } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { GlobalSearchInputComponent } from '@features/global-search/components/search-input/search-input.component';
import { Breakpoints } from '@shared/enums/breakpoints.enum';
import { combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    GlobalSearchInputComponent,
  ],

  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly breakpointObserver = inject(BreakpointObserver);

  protected readonly vm$ = combineLatest({
    isMobileView: this.breakpointObserver
      .observe(Breakpoints.MOBILE)
      .pipe(map((res) => res.matches)),
    isTabletView: this.breakpointObserver
      .observe(Breakpoints.TABLET)
      .pipe(map((res) => res.matches)),
    isLaptopView: this.breakpointObserver
      .observe(Breakpoints.LAPTOP)
      .pipe(map((res) => res.matches)),
    isDesktopView: this.breakpointObserver
      .observe(Breakpoints.DESKTOP)
      .pipe(map((res) => res.matches)),
  });
}
