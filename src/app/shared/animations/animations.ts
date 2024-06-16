import { trigger, transition, style, animate } from '@angular/animations';

export const slideInOutAnimation = trigger('slideInOutAnimation', [
  transition(':enter', [
    style({
      width: 0,
      position: 'hidden',
    }),
    animate('250ms', style({ width: '*' })),
  ]),
  transition(':leave', [
    style({ width: '*', overflow: 'hidden' }),
    animate('250ms', style({ width: 0 })),
  ]),
]);

export const mobileModalAnimation = trigger('mobileModalAnimation', [
  transition(':enter', [
    style({ transform: 'translateX(120%)', overflow: 'hidden' }),
    animate('150ms', style({ transform: 'translateX(0)' })),
  ]),
  transition(':leave', [
    style({ transform: 'translateX(0)', opacity: 1, overflow: 'hidden' }),
    animate('150ms', style({ transform: 'translateX(120%)' })),
  ]),
]);
