import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { users } from 'src/app/models/users.model';
import { Registrationservice } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  users:users |undefined;
  constructor(private registrationservice:Registrationservice,
    private router: Router,private route:ActivatedRoute
    ) { }


  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    this.registrationservice.register(form.value.first_name,form.value.last_name,form.value.mobile_no,form.value.age,form.value.username,form.value.password,form.value.gender).subscribe((reg)  => {
      this.users = reg;
      this.router.navigate(['/user'], { relativeTo: this.route});
    })
  }
}
