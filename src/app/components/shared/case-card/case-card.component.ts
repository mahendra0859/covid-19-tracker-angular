import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-case-card",
  templateUrl: "./case-card.component.html",
  styleUrls: ["./case-card.component.css"],
})
export class CaseCardComponent implements OnInit {
  @Input("totalConfirmed") totalConfirmed: number;
  @Input("totalRecovered") totalRecovered: number;
  @Input("totalDeaths") totalDeaths: number;
  @Input("totalActive") totalActive: number;

  constructor() {}

  ngOnInit() {}
}
