export interface JobDashboard {
  id: number,
  title: string,
  details: string,
  stars: number,
  'review_text': string,
  'working_hours': number,
  bill: number,
  'user_worker': {
    id: number,
    worker: {
      id: number,
      name: string,
      email: string,
      phone: string,
      specialty: string,
    },
  },
}
