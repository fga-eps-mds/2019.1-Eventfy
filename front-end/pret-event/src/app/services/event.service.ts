import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from '../models/event';
import { AngularFireStorage } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  ref: any;
  task: any;
  downloadURL: any;
  url = '/api/eventos/';

  constructor(private http: HttpClient, private afStorage: AngularFireStorage) { }

  getEvents = () =>
    new Promise(resolve =>
      this.http.get<Event[]>(this.url)
        .subscribe(
          data => resolve(data),
          error => resolve(error),
        )
    )

  postEvent = (event: Event) =>
    new Promise(resolve =>
      this.http.post(this.url, event)
        .subscribe(
          data => resolve(data),
          error => resolve(error),
        )
    )

  registerEvent = (event: Event, file: any) =>
    new Promise(resolve => {
      this.ref = this.afStorage.ref(event.title.toString());
      this.task = this.ref.put(file);
      this.task.snapshotChanges().pipe(
        finalize(() => {
          this.ref.getDownloadURL().subscribe(ref => {
            this.downloadURL = ref;
            event.url_image = this.downloadURL;
            resolve(this.postEvent(event));
          });
        })
      ).subscribe();
    })
}