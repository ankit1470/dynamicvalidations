import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.detailsForm = this.fb.group({
      name: ["", Validators.required],
      check: [""],
      age: [""]
    })
  }
  title = 'dymValidations';
  detailsForm: any;
  show: any
  submit: any

  onSubmit() {
    if (this.detailsForm.valid) {
      this.submit = "submitted"
      console.log("submitted");
    }
    else {
      this.submit = "not submitted"
      console.log("not submitted");
      this.detailsForm.markAllAsTouched();
    }
  }

  check(event: any) {
    console.log(event.checked)
    this.show = event.checked
    if (event.checked) {
      this.detailsForm.controls['age'].setValidators([Validators.required])
      this.detailsForm.controls['age'].updateValueAndValidity();
    }
    else {
      this.detailsForm.controls['age'].clearValidators();
    }
  }
  get controls() {
    return this.detailsForm.controls
  }
}
