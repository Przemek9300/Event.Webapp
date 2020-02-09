import { createFeatureSelector, createSelector } from '@ngrx/store';

import { WorkspaceState, workspaceFeatureKey } from './workspace-state';

const selectFeature = createFeatureSelector<WorkspaceState>(workspaceFeatureKey);
export const selectOverview = createSelector(selectFeature, state => state.overview);
export const selectedEventId = createSelector(selectOverview, state => state.eventId);
export const selectedRoomId = createSelector(selectOverview, state => state.roomId);
export const selectedDate = createSelector(selectOverview, state => state.date);

export const selectEventStore = createSelector(selectFeature, state => state.event);

export const selectEvents = createSelector(selectEventStore, state => state.events);
export const loadingEvent = createSelector(selectEventStore, state => state.isLoading);

export const selectRoom = createSelector(selectFeature, state => state.room.rooms);
export const selectRoomById = createSelector(
  selectRoom,
  selectedRoomId,
  (state, id) => state.filter(room => room.id === id)[0]
);
export const selectEventById = createSelector(
  selectEvents,
  selectedEventId,
  (state, id) => state.filter(x => x.id === id)[0]
);
export const selectEventRoom = createSelector(selectEventById, selectRoomById, (ev, room) => ({
  ev: ev,
  room: room
}));
export const selectEventsByDate = createSelector(selectEvents, selectedDate, (events, date) =>
  events.filter(event => event.start_time === date)
);

export const selectEventsByRoomSelected = createSelector(selectEvents, selectedRoomId, (events, id) =>
  events.filter(event => event.roomId === id)
);

// export const selectEventDetails = createSelector(
//   selectEventById,
//   selectRoomById,
//   (room, event) => {
//     return { room: room, event: event };
//   }
// );
