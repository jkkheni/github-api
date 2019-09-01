import { Component, OnInit } from '@angular/core';
import {Repo} from '../models/repo';
import {RepoService} from '../services/repo.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  title = 'GitHub repos';
  cache = {
    repo: [],
    selectedRepo: [],
};
editForm: FormGroup;
submitted = false;
repodetail: any;
selectedRepo: Repo = new Repo();
constructor(private repoService: RepoService, public router: Router, private formBuilder: FormBuilder) {

}

ngOnInit() {
    this.editForm = this.formBuilder.group({
      repoName: ['', Validators.required],
      description: ['', Validators.required],
    });
    const rOwner = localStorage.getItem('dro');
    const rName = localStorage.getItem('dr');

    if (rOwner != null && rName != null) {
      this.repoService.getRepoDetail(rName, rOwner).subscribe(res => {
        this.repodetail = res;
        this.editForm.setValue ({
          repoName: this.repodetail.name,
          description : this.repodetail.description
        });

      }, error => {
        console.log(error); // for development only.
      });
    } else {
      this.router.navigate(['/']);
    }
}
 // convenience getter for easy access to form fields
 get f() { return this.editForm.controls; }

 onSubmit() {
     this.submitted = true;
     // stop here if form is invalid
     if (this.editForm.invalid) {
         return;
     }
     const value = this.editForm.value;

     alert('Your repo ' + value.repoName + ' will be updated soon!');
     this.router.navigate(['/']);
 }
}
