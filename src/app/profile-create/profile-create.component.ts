import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';

const URL = 'http://localhost:3000/profile/upload';


@Component({
  selector: 'app-profile-create',
  templateUrl: './profile-create.component.html',
  styleUrls: ['./profile-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileCreateComponent implements OnInit {
  public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  profile = {};
  fileToUpload: File = null;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
       this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
       this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
            this.profile.image = response;
        };
  }

  saveProfile() {
    this.http.post('http://localhost:3000/profile', this.profile)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/profile-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}