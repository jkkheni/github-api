import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Rx'
import {User} from "../models/user";
import {ApiService} from "./api.service";

@Injectable()
export class RepoService {

    constructor(private api: ApiService) {

    }

    getRepo(filter?: string): Observable<User[]> {
      let endPoint = '/orgs/octokit/repos';
      return this.api.get(endPoint).map(res => res.json() as User[]).catch(err => Observable.throw(err));
    }


    getRepoDetail(name: string,owner:string): Observable<any> {

      let endPoint = '/repos/' +owner+ '/'+  name;
      return this.api.get(endPoint).map(res => res.json()).catch(err => Observable.throw(err));
    }


}
