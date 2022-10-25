import { Component, Input, OnInit } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css']
})
export class HomeDashboardComponent implements OnInit {
  
  tipoDashboard! : DashboardSpecifier;

  _signed_user : boolean = false;
  _signed_master : boolean = false;
  _standard_dash: boolean = false;

  constructor(private _route : ActivatedRoute) {

    this.tipoDashboard = this._route.snapshot.data['tipoDashboard'];
    console.log(this.tipoDashboard);

    switch (this.tipoDashboard) {
      case DashboardSpecifier.STANDARD:
        this._standard_dash = true;
        break;
      case DashboardSpecifier.MASTER:
        this._signed_master = true;
        break;
      case DashboardSpecifier.USER:
        this._signed_user = true;
        break;
    }
  }

  ngOnInit(): void {
  
  }
} 

export enum DashboardSpecifier {
  STANDARD,
  MASTER,
  USER
}