import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@widgets/header/header.component';
import { combineLatest, map } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Breakpoints } from '@shared/enums/breakpoints.enum';
import { NotSupportedPageComponent } from '@core/components/not-supported/not-supported-page.component';

@Component({
  selector: 'app-shell-wrapper',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    NotSupportedPageComponent,
    RouterModule,
  ],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellWrapperComponent {
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
