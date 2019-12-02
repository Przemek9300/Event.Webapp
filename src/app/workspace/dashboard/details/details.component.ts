import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { WorkspaceState } from "../../store/workspace-state";
import { selectEventById } from "../../store/selectors";
import { Event } from "src/models/event";
import { ActivatedRoute } from "@angular/router";
import { Member, Status } from "src/models/member";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
  public event: Event;
  public data: any;
  ngxQrcode2 = "https://www.npmjs.com/package/ngx-qrcode2";
  constructor(
    private store: Store<WorkspaceState>,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.store
      .select(selectEventById(1))
      .subscribe(event => (this.event = event));
  }
  public statusClass(member: Member) {
    return {
      "accepted-status": member.status === Status.Accepted,
      "invited-status": member.status === Status.Invited,
      "declined-status": member.status === Status.Declined
    };
  }
}
