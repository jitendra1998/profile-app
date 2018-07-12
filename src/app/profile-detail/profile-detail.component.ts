import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ProfileDetailComponent implements OnInit {

  profile = {};

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
  	this.getProfileDetail(this.route.snapshot.params['id']);
  }
  

  getProfileDetail(id) {
  	this.http.get('http://localhost:3000/profile/' + id).subscribe(data => {
  		this.profile = data;
  	});
  }
}
