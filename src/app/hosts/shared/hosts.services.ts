import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { expand, takeWhile, mergeMap, take } from 'rxjs/operators';
import { HostModel, HostUIModel } from './hostmodel';

@Injectable()
export class HostServices {

}
