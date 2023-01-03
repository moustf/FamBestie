export interface Worker {
  id: number;
  email: string;
  name: string;
  phone: string;
  location: string;
  specialty: string;
  'user_workers': {
    id: number;
    Job: {
      id: number;
      stars: number;
      'review_text': string;
    };
  }[];
}
