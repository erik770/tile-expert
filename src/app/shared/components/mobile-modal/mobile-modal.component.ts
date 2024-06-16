import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CustomAnimations } from '@shared/animations';
import { BehaviorSubject, combineLatest } from 'rxjs';

@Component({
  selector: 'app-mobile-modal-sheet',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './mobile-modal.component.html',
  styleUrl: './mobile-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [CustomAnimations.mobileModalAnimation],
})
export class MobileModalSheetComponent implements OnInit, OnDestroy {
  @Input() set isVisible(value: boolean) {
    this.isModalVisible$$.next(value);
  }
  @Input() headerTemplate?: TemplateRef<void>;

  @Output() isVisibleChange = new EventEmitter<boolean>();

  @Output() closeEvent = new EventEmitter<void>();

  private readonly destroyRef = inject(DestroyRef);

  private readonly isModalVisible$$ = new BehaviorSubject<boolean>(false);

  protected readonly vm$ = combineLatest({
    isModalVisible: this.isModalVisible$$.asObservable(),
  });

  ngOnInit(): void {
    this.isModalVisible$$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => {
        this.isVisibleChange.next(value);
      });
  }

  ngOnDestroy(): void {
    this.isModalVisible$$.complete();
  }

  public open(): void {
    this.isModalVisible$$.next(true);
  }

  public close(): void {
    this.isModalVisible$$.next(false);
    this.closeEvent.emit();
  }
}
