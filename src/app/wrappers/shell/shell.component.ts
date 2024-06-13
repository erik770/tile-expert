import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@widgets/header/header.component';

@Component({
  selector: 'app-shell-wrapper',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterModule],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellWrapperComponent {}
