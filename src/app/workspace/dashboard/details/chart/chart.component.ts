import { Component, OnInit, Input } from "@angular/core";
import { Member, Status } from "src/models/member";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"]
})
export class ChartComponent implements OnInit {
  public data: any;
  @Input() members: Member[];
  constructor() {}

  ngOnInit() {
    this.data = {
      labels: ["ACCEPTED", "INVITED", "DECLINED"],
      datasets: [
        {
          data: [
            this.members.filter(x => x.status === Status.Accepted).length,
            this.members.filter(x => x.status === Status.Invited).length,
            this.members.filter(x => x.status === Status.Declined).length
          ],
          backgroundColor: ["#26de81", "#d1d8e0", "#fc5c65"],
          hoverBackgroundColor: ["#20bf6b", "#a5b1c2", "#eb3b5a"]
        }
      ]
    };
  }
}
