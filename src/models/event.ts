import { Member } from './member';

export interface Event {
  id: number;
  url: string;
  title: string;
  description: string;
  roomId: number;
  owner: number;
  client: number[];
  start: Date;
  end: Date;
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
  clients: [];
}
