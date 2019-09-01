import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Rx'
import {Repo} from '../models/repo';
import {ApiService} from './api.service';

@Injectable()
export class RepoService {

    constructor(private api: ApiService) {}

    getRepo(): Observable<Repo[]> {
      const endPoint = '/orgs/octokit/repos';
      return this.api.get(endPoint).map(res => res.json() as Repo[]).catch(err => Observable.throw(err));
    }

    getRepoDetail(name: string, owner: string): Observable<any> {
      const endPoint = '/repos/' + owner + '/' +  name;
      return this.api.get(endPoint).map(res => res.json()).catch(err => Observable.throw(err));
    }
}
