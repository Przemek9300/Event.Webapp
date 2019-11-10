import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { WorkspaceState } from "../../store/workspace-state";
import { selectEventById } from "../../store/selectors";
import { Observable } from "rxjs";
import { Event } from "src/models/event";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
  public event: Event;
  public data: any;
  constructor(
    private store: Store<WorkspaceState>,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.store
      .select(selectEventById, { id: this.route.snapshot.paramMap.get("id") })
      .subscribe(event => (this.event = event));
  }
}
