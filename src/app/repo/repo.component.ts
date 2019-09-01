import { Component, OnInit } from '@angular/core';
import {Repo} from '../models/repo';
import {RepoService} from '../services/repo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  title = 'GitHub repos';
  cache = {
    repo: [],
    selectedRepo: [],
};

repo: any;
selectedRepo: Repo = new Repo();
constructor(private repoService: RepoService, public router:Router) {

}

ngOnInit() {
    this.repoService.getRepo().subscribe(res => {
      this.repo = res;
      this.cache.repo = res;
    }, error => {
      console.log(error); // for development only.
    });
}
repodetail(name,owner){
  localStorage.setItem('dr', name);
  localStorage.setItem('dro', owner);
  this.router.navigate(['/repo', name]);
}
cacheSelectRepo(repo: Repo) {
  if (!this.findRepoInCache(repo)) {
      this.cache.selectedRepo.push(repo);
  }
}

findRepoInCache(repo: Repo): Repo {
  // tslint:disable-next-line: prefer-for-of
  for (let i = 0; i < this.cache.selectedRepo.length; i++) {
      if (this.cache.selectedRepo[i].name == repo.name) {
          return this.cache.selectedRepo[i];
      }
  }
  return null;
}

}
