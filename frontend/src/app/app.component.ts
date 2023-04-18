import {Component, computed, inject, OnInit, signal, Signal, WritableSignal} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {LicencePlateService} from "./licence-plate/licence-plate.service";

// create a new validator function for reactive forms
export function licencePlateValidator(control: string) {
  // licence place needs to be 6 characters long, and only contain alphanumeric characters
  // there always needs to be at least two numbers
  const regex = /^[a-zA-Z0-9]{6}$/;
  const regex2 = /[0-9]{2}/;
  if (regex.test(control) && regex2.test(control)) {
    return null;
  }

  return {licencePlate: true};
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  licencePlate = signal('');
  carDetails = signal<any>({});
  carDetailsProperties = computed(() => {
    return Object.keys(this.carDetails());
  })
  form = inject(FormBuilder).nonNullable.group({
    licencePlate: ['', Validators.required]
  })

  private readonly licencePlateService = inject(LicencePlateService);

  submit() {
    // update the signal with the value from the form
    const { licencePlate } = this.form.getRawValue();
    this.licencePlate.set(licencePlate);
    this.licencePlateService.getLicencePlateDetails(licencePlate).subscribe((data) => {
      this.carDetails.set(data);
    });
  }
}
