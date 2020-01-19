import { Injectable } from "@angular/core";
import { BehaviorSubject, observable } from "rxjs";
import { Person } from "../model/signturePerson";
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: "root"
})
export class GroupService {
  list: BehaviorSubject<Array<Person>> = new BehaviorSubject([]);

  public get listsing$() {
    return this.list.asObservable();
  }

  constructor(private http: HttpClient) {}

  addsignture(name, good, snigog) {
    this.list.value.push({ name: name, good: good, singog: snigog });
    this.list.next(this.list.value);
  }

  test():void{
    this.http.get('/api/test').subscribe(d=>{
      console.log("in angular");
      console.log(d);
    })
  }
}
