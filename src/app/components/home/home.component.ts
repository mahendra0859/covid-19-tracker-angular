import { Component, OnInit } from "@angular/core";
import { DataServiceService } from "src/app/services/data-service.service";
import { GlobalDataSummary } from "src/app/models/global-data";
import { GoogleChartInterface } from "ng2-google-charts";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  totalConfirmed = 0;
  totalActive = 0;
  totalDeaths = 0;
  totalRecovered = 0;
  globalData: GlobalDataSummary[];
  pieChart: GoogleChartInterface = {
    chartType: "PieChart",
  };
  columnChart: GoogleChartInterface = {
    chartType: "ColumnChart",
  };
  constructor(private dataService: DataServiceService) {}

  ngOnInit() {
    this.dataService.getGlobalData().subscribe({
      next: (result) => {
        this.globalData = result;
        result.forEach((cs) => {
          this.totalActive += cs.active;
          this.totalConfirmed += cs.confirmed;
          this.totalDeaths += cs.deaths;
          this.totalRecovered += cs.active;
        });
        this.pieChart = null;
        this.columnChart = null;
        setTimeout(() => {
          this.initChart();
        }, 5);
      },
      error: (error) => {
        console.log("error", error);
      },
    });
  }

  initChart(caseType: string = "c") {
    let dataTable = [];
    dataTable.push(["Country", "cases"]);
    this.globalData.forEach((cs) => {
      let value: number;
      if (caseType == "c") if (cs.confirmed > 2000) value = cs.confirmed;
      if (caseType == "a") if (cs.active > 2000) value = cs.active;
      if (caseType == "d") if (cs.deaths > 1000) value = cs.deaths;
      if (caseType == "r") if (cs.recovered > 200) value = cs.recovered;
      if (value) dataTable.push([cs.country, value]);
    });
    this.pieChart = {
      chartType: "PieChart",
      dataTable,
      options: {
        height: 500,
        animation: {
          duration: 1000,
          easing: "out",
        },
      },
    };
    this.columnChart = {
      chartType: "ColumnChart",
      dataTable,
      options: {
        height: 500,
        animation: {
          duration: 1000,
          easing: "out",
        },
      },
    };
  }
  updateChart(input: HTMLInputElement) {
    this.pieChart = null;
    this.columnChart = null;
    setTimeout(() => {
      this.initChart(input.value);
    }, 5);
  }
}
