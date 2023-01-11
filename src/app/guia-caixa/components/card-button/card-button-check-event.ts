import { UntypedFormGroup } from '@angular/forms';
import { CardButtonComponent } from './card-button.component';

export interface CardButtonCheckEvent {
   target: CardButtonComponent;
}

export interface CardButtonFormControlData {
   formGroup: UntypedFormGroup;
   formControlName: string;
}
