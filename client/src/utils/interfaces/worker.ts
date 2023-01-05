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

export interface WorkerCardObject {
  id: number;
  name: string;
  email: string;
  location: string;
  gender: string;
  phone: string;
  specialty: string;
  'years_of_experience': string;
}
