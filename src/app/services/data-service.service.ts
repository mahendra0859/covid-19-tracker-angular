import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { GlobalDataSummary } from "../models/global-data";
import { DateWiseData } from "../models/date-wise-global-data";

@Injectable({
  providedIn: "root",
})
export class DataServiceService {
  private globalDataUrl =
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/04-11-2020.csv";
  private dateWiseGlobalDataUrl =
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv";
  constructor(private http: HttpClient) {}

  getGlobalData() {
    return this.http.get(this.globalDataUrl, { responseType: "text" }).pipe(
      map((result) => {
        let data: GlobalDataSummary[] = [];
        let raw = {};
        let rows = result.split("\n");
        rows.splice(0, 1);
        rows.forEach((row) => {
          let cols = row.split(/,(?=\S)/);
          if (cols[3]) {
            let cs = {
              country: cols[3],
              confirmed: +cols[7],
              deaths: +cols[8],
              recovered: +cols[9],
              active: +cols[10],
            };
            let temp: GlobalDataSummary = raw[cs.country];
            if (temp) {
              temp.confirmed += cs.confirmed;
              temp.deaths += cs.deaths;
              temp.recovered += cs.recovered;
              temp.active += cs.active;
              raw[cs.country] = temp;
            } else {
              raw[cs.country] = cs;
            }
          }
        });
        data = Object.values(raw);
        return data;
      }),
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  getDateWiseGlobalData() {
    return this.http
      .get(this.dateWiseGlobalDataUrl, { responseType: "text" })
      .pipe(
        map((result) => {
          let rows = result.split("\n");
          let dates = rows[0].split(/,(?=\S)/);
          dates.splice(0, 4);
          rows.splice(0, 1);
          let data = {};
          rows.forEach((row) => {
            if (row) {
              let cols = row.split(/,(?=\S)/);
              let country = cols[1];
              cols.splice(0, 4);
              data[country] = [];
              cols.forEach((value, index) => {
                let dateWise: DateWiseData = {
                  cases: +value,
                  country: country,
                  date: new Date(Date.parse(dates[index])),
                };
                data[country].push(dateWise);
              });
            }
          });
          return data;
        })
      );
  }
}
