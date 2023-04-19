import {ChangeDetectionStrategy, Component, Input, Signal} from '@angular/core';

@Component({
  selector: 'app-licence-plate',
  templateUrl: './licence-plate.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LicencePlateComponent {
  @Input({required: true}) licencePlate: Signal<string>;
}
