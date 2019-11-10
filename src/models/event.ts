import { User } from './user';

export interface Event {
  id: string;
  roomId: string;
  title: string;
  members: User[]
  description?: string;
  image?: string;
  start: string;
  end: string;
  url?: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
}
