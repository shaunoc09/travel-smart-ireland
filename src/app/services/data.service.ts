import { Http, Headers } from '@angular/http';
import { BusStop } from './../models/bus-stop.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';

const interval = 10000;
const busStopUrl = 'https://data.dublinked.ie/cgi-bin/rtpi/realtimebusinformation?stopid=';

@Injectable()
export class DataService {
  private _stopId: number;
  public busStopListUpdated: EventEmitter<Array<BusStop>> = new EventEmitter();

  constructor(private http: Http) {  }

  public get stopId(): number {
    return this._stopId;
  }

  public set stopId(stopId: number) {
    this._stopId = stopId;
    this.getBusStopList(stopId);
  }

  private getBusStopList(stopId: number): void   {
    this.http.get(busStopUrl + stopId)
      .map(response => response.json().results as Array<BusStop>)
      .subscribe(data => this.busStopListUpdated.emit(data));
  }

  public initaliseBusPolling(): void  {
    Observable.interval(interval).startWith(0).subscribe(() =>
      this.getBusStopList(this.stopId)
    )
  }
}
