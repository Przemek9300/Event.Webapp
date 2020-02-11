import { Member } from './member';

export interface Event {
  id: number;
  url: string;
  title: string;
  description: string;
  roomId: number;
  owner: number;
  members: { id: number; emial: string; avatar: string; status: string }[];
  start_time: Date;
  end_time: Date;
  image: string;
}

export interface EventDto {
  title: string;
  description: string;
  roomId: number;
  start: Date;
  end: Date;
  image?: string;
  owner?: number;
  members: [];
}

export const mockedEvent: Event = {
  id: 1,
  url: '',
  title: '',
  description: '',
  end_time: new Date(),
  start_time: new Date(),
  members: [{ avatar: '', emial: '', id: 1, status: '' }],
  roomId: 1,
  image: '',
  owner: 1
};
