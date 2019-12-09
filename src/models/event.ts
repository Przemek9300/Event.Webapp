import { Member } from './member';

export interface Event {
  id: number;
  url: string;
  title: string;
  description: string;
  room: number;
  owner: number;
  client: number[];
  start_time: Date;
  end_time: Date;
  image: string;
}

export interface EventDto {
  name: string;
  description: string;
  room: number;
  start: Date;
  end: Date;
  image?: string;
  owner?: number;
  clients: [];
}
