import { Component, OnInit } from '@angular/core';
import { Riders } from '../riders.model';
import { Drivers } from '../drivers.model';
import { LyftService } from '../lyft.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [LyftService]

})
export class AdminComponent implements OnInit {
  private user;
  constructor(private lyftService: LyftService) { }

  ngOnInit() {
  }
  submitDriver(name: string, car: string, description: string, money: number) {
    const newDrivers: Drivers = new Drivers(name, car, description, money);
    this.lyftService.addDrivers(newDrivers);
  }

  submitRider(name: string, car: string, description: string, money: number) {
    const newRiders: Riders = new Riders(name, car, description, money);
    this.lyftService.addRiders(newRiders);
  }
}
