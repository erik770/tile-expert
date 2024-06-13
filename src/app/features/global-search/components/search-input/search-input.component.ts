import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CustomAnimations } from '@shared/animations';
import { GlobalSearchFiltersComponent } from '../search-filters/search-filters.component';

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
  ],
  animations: [CustomAnimations.slideInOutAnimation],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlobalSearchInputComponent {
  protected isSearchVisible = true;
  protected isFiltersVisible = true;

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
