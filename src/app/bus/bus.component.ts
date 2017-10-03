import { DataService } from './../services/data-service.service';
import { BusStop } from './../models/bus-stop.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.less'],
  providers: [DataService]
})
export class BusComponent implements OnInit {

  private buses: Array<BusStop>;
  private stopBusId = 7127;
  private busDataLoaded = false;
  private problem: string;
  constructor(private service: DataService) { }

  ngOnInit() {
    this.onUpdate()
    this.initaliseData();
  }

  initaliseData(): void {
    this.service.initaliseBusPolling();
    this.service.busStopListUpdated
      .subscribe(
        buses => {
          this.buses = buses;
          this.busDataLoaded = true;
        },
        error => {
          this.busDataLoaded = true;
          this.handleError(error)}
      );
  }

  onUpdate(): void {
    this.busDataLoaded = false;
    this.service.stopId = this.stopBusId;
  }

  handleError(error: string): void {
    this.problem = 'Uh oh! Somethings gone wrong loading bus list :(';
    console.error('Somethings gone wrong :( ', error);
  }
}
