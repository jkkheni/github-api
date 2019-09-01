import { Component, OnInit } from '@angular/core';
import {Repo} from '../models/repo';
import {RepoService} from '../services/repo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
title = 'GitHub repos';
cache = {
  repo: [],
  selectedRepo: [],
};
repodetail: any;
selectedRepo: Repo = new Repo();

constructor(private repoService: RepoService, public router: Router) {}

ngOnInit() {
    const rOwner = localStorage.getItem('dro');
    const rName = localStorage.getItem('dr');
    if(rOwner != null && rName != null){
      this.repoService.getRepoDetail(rName, rOwner).subscribe(res => {
        this.repodetail = res;
      }, error => {
        console.log(error); // for development only.
      });
    } else{
      this.router.navigate(['/']);
    }
}

editrepo(name: string) {
  this.router.navigate(['/repo/' + name, 'edit']);
}

}
