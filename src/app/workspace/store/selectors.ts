import { createFeatureSelector, createSelector } from "@ngrx/store";

import { WorkspaceState, workspaceFeatureKey } from "./workspace-state";

const selectFeature = createFeatureSelector<WorkspaceState>(
  workspaceFeatureKey
);

export const selectEvent = createSelector(
  selectFeature,
  state => state.event.events
);
export const selectRoom = createSelector(
  selectFeature,
  state => state.room.rooms
);
