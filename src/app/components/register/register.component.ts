import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import {Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  users: any;

  constructor(
    private userService: UsersService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  userForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  formDone(e: Event) {
    e.preventDefault();
    if (this.userForm.status == 'VALID') {
      this.userService.addUser(this.userForm.value).subscribe((response) => {
        console.log(response);
      });
      this.router.navigate(['/Login']);
    } else {
      alert('Error Try Again');
    }
  }
}
