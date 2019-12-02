import { Member } from "./member";

export interface Event {
  id: number;
  url: string;
  event_name: string;
  owner: number;
  client: number[];
  start_time: Date;
  end_time: Date;
  image: string;
}
