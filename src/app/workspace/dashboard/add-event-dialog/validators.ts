import { AbstractControl, ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';
import { Event } from 'src/models/event';

export function overlapValidator(event: Event[]): ValidatorFn {
  return (group: FormGroup): ValidationErrors => {
    const start = group.controls.start;
    const end = group.controls.end;

    const overlap = event.reduce((acc, cur) => {
      return acc && cur.start_time <= end.value && start.value <= cur.end_time;
    }, false);
    if (overlap) {
      start.setErrors({ overlap: true });
    }
    return;
  };
}
