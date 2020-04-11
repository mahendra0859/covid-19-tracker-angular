import { Component, OnInit } from "@angular/core";
import { DataServiceService } from "src/app/services/data-service.service";
import { GlobalDataSummary } from "src/app/models/global-data";

@Component({
  selector: "app-countries",
  templateUrl: "./countries.component.html",
  styleUrls: ["./countries.component.css"],
})
export class CountriesComponent implements OnInit {
  data: GlobalDataSummary[];
  countries: string[] = [];
  totalConfirmed = 0;
  totalActive = 0;
  totalDeaths = 0;
  totalRecovered = 0;
  constructor(private dataService: DataServiceService) {}

  ngOnInit() {
    this.dataService.getGlobalData().subscribe((result) => {
      console.log("result", result);
      this.data = result;
      this.data.forEach((cs) => {
        this.countries.push(cs.country);
        if (cs.country == "US") {
          this.totalRecovered = cs.recovered;
          this.totalActive = cs.active;
          this.totalConfirmed = cs.confirmed;
          this.totalDeaths = cs.deaths;
        }
      });
    });
  }
  updateCases(country: string) {
    this.data.forEach((cs) => {
      if (cs.country == country) {
        this.totalRecovered = cs.recovered;
        this.totalActive = cs.active;
        this.totalConfirmed = cs.confirmed;
        this.totalDeaths = cs.deaths;
      }
    });
  }
}
