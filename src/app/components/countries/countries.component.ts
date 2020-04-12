import { Component, OnInit } from "@angular/core";
import { DataServiceService } from "src/app/services/data-service.service";
import { GlobalDataSummary } from "src/app/models/global-data";
import { DateWiseData } from "src/app/models/date-wise-global-data";
import { GoogleChartInterface } from "ng2-google-charts";

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
  dateWiseData: DateWiseData;
  selectedCountryData: DateWiseData[];
  lineChart: GoogleChartInterface = {
    chartType: "LineChart",
  };
  constructor(private dataService: DataServiceService) {}

  ngOnInit() {
    this.dataService.getGlobalData().subscribe((result) => {
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
    this.dataService.getDateWiseGlobalData().subscribe((result) => {
      this.dateWiseData = result;
      this.selectedCountryData = this.dateWiseData["US"];
      this.lineChart = null;
      setTimeout(() => {
        this.updateChart();
      }, 5);
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
    this.selectedCountryData = this.dateWiseData[country];
    this.lineChart = null;
    setTimeout(() => {
      this.updateChart();
    }, 5);
  }
  updateChart() {
    let dataTable = [];
    dataTable.push(["Date", "Cases"]);
    this.selectedCountryData.forEach((cs) => {
      dataTable.push([cs.date, cs.cases]);
    });
    this.lineChart = {
      chartType: "LineChart",
      dataTable,
      options: {
        title: "Tasks",
        animation: {
          duration: 1000,
          easing: "out",
        },
      },
    };
  }
}
