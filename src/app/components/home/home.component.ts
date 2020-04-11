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
  pieChart: GoogleChartInterface;
  columnChart: GoogleChartInterface;
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
        this.initChart();
      },
    });
  }

  initChart() {
    let dataTable = [];
    dataTable.push(["Country", "cases"]);
    this.globalData.forEach((cs) => {
      if (cs.confirmed > 2000) {
        dataTable.push([cs.country, cs.confirmed]);
      }
    });
    this.pieChart = {
      chartType: "PieChart",
      dataTable,
      options: { height: 500 },
    };
    this.columnChart = {
      chartType: "ColumnChart",
      dataTable,
      options: { height: 500 },
    };
  }
}
