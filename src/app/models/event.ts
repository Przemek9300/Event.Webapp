export interface Event {
  id: string;
  roomId: string;
  title: string;
  description?: string;
  image?: string;
  start: string;
  end: string;
  url?: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
}
