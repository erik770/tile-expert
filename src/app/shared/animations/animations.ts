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
  // transition(':enter', [
  //   style({ width: 0, overflow: 'hidden' }),
  //   animate('150ms', style({ width: '*' })),
  // ]),
  // transition(':leave', [
  //   style({ width: '*', opacity: 1, overflow: 'hidden' }),
  //   animate('150ms', style({ width: 0 })),
  // ]),
]);

// export const slideInOutAnimation = trigger('slideInOutAnimation', [
//   transition(':enter', [
//     style({ height: 0, top: '100%', overflow: 'hidden' }),
//     animate('150ms', style({ height: '*', top: '0' })),
//   ]),
//   transition(':leave', [
//     style({
//       top: 0,
//       height: '*',
//       overflow: 'hidden',
//     }),
//     animate('150ms', style({ height: 0, top: '100%' })),
//   ]),
// ]);
