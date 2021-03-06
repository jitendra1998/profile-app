import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profiles: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  	this.http.get('http://localhost:3000/profile').subscribe(data => {
      this.profiles = data;
  	});
  };
console.log(profiles);
}
