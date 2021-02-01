import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signupform;
  constructor(private fb: FormBuilder, private userservice: UserService, private router: Router) { }

  ngOnInit(): void {
    this.initform();
  }

  initform() {
    this.signupform = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
      repeat: [''],
    })
  }

  submitForm(formdata) {
    console.log(formdata);
    if (this.signupform.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'OOps!!',
        text: 'Fill form correctly'
      })
      return;
    }
    this.userservice.addUser(formdata).subscribe((res) => {
      console.log(res);
      Swal.fire({
        icon: 'success',
        title: 'Success!!',
        text: 'You have successfully registered'
      }).then(d => {
        this.router.navigate(['/app/login']);
      })
    })
  }
}