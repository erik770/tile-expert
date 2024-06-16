import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-not-supported-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './not-supported-page.component.html',
  styleUrl: './not-supported-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotSupportedPageComponent {}
