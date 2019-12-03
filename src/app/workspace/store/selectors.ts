import { createFeatureSelector, createSelector } from '@ngrx/store';

import { WorkspaceState, workspaceFeatureKey } from './workspace-state';

const selectFeature = createFeatureSelector<WorkspaceState>(workspaceFeatureKey);

export const selectEvent = createSelector(selectFeature, state => state.event.events);
export const selectEventById = (id: number) => createSelector(selectEvent, state => state.filter(x => x.id === id)[0]);

export const selectRoom = createSelector(selectFeature, state => state.room.rooms);
export const selectRoomById = createSelector(selectRoom, (state, props) => state.filter(x => x.id === props.roomId)[0]);

// export const selectEventDetails = createSelector(
//   selectEventById,
//   selectRoomById,
//   (room, event) => {
//     return { room: room, event: event };
//   }
// );
