import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform;

  constructor(private fb: FormBuilder, private userservice: UserService, private router: Router) { }

  ngOnInit(): void {

    this.initForm();
  }

  initForm() {
    this.loginform = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  submitForm(formdata) {
    console.log(formdata);

    if (this.loginform.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'OOps!!',
        text: 'Invalid Credentials ! fill correctly.'
      })

      return;
    }

    this.userservice.getUserByUserName(formdata.username).subscribe((data: any) => {
      console.log(data);
      if (data) {
        if (data.password == formdata.password) {
          Swal.fire({
            icon: 'success',
            title: 'Hurray!!',
            text: 'successfully logged in'
          }).then(d => {
            sessionStorage.setItem('user', JSON.stringify(data));
            this.userservice.loggedin = true;
            this.router.navigate(['/user']);
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'OOps!!',
            text: 'username or password is incorrect.'
          })
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'OOps!!',
          text: 'username or password is incorrect.'
        })
      }
    })

  }

}