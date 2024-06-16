import { BreakpointObserver } from '@angular/cdk/layout';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CustomAnimations } from '@shared/animations';
import { MobileModalSheetComponent } from '@shared/components/mobile-modal/mobile-modal.component';
import { Breakpoints } from '@shared/enums/breakpoints.enum';
import { combineLatest, map } from 'rxjs';
import { GlobalSearchFiltersComponent } from '../search-filters/search-filters.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-global-search-input',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    OverlayModule,
    GlobalSearchFiltersComponent,
    MobileModalSheetComponent,
  ],
  providers: [MatIconRegistry],
  animations: [CustomAnimations.slideInOutAnimation],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlobalSearchInputComponent {
  private readonly breakpointObserver = inject(BreakpointObserver);

  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIcon(
      'app-me-icon',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/images/me-icon.svg')
    );
  }

  protected isSearchVisible = false;
  protected isFiltersVisible = false;

  protected readonly vm$ = combineLatest({
    isMobileView: this.breakpointObserver
      .observe(Breakpoints.MOBILE)
      .pipe(map((res) => res.matches)),
  });

  protected showFilters(): void {
    this.isFiltersVisible = true;
  }
  protected hideFilters(): void {
    this.isFiltersVisible = false;
  }
  protected showSearch(): void {
    this.isSearchVisible = true;
  }
  protected hideSearch(): void {
    this.isSearchVisible = false;
    this.hideFilters();
  }
}
