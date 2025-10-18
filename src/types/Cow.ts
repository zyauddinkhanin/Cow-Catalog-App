export interface Cow {
  id: string; // ear tag
  sex: string;
  pen: string;
  status: string;
  weight?: number;
  lastEventDate?: string;
  events?: Event[];
  dailyGain?: number;
}

export interface Event {
  id: string;
  type: string;
  date: string;
  details?: string;
}
