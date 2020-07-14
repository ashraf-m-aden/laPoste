import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  errorMessage;
  userForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,

  ) { }
  ngOnInit() {
    this.initForm();
    //  this.compS.getCompany(localStorage.getItem('id')).subscribe(
    //  (data) => this.user = data
    // );
  }
  initForm() {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      age: ['', [Validators.required]],
      genre: ['', [Validators.required]],
      email: ['', [Validators.required]],
      number: ['', Validators.required],
      address: ['', Validators.required]
    });
  }
  onSubmit(): void {
    //
  }

}
