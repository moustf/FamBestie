export interface RegisterWorker {
  name: string,
  email: string,
  gender: string,
  location: string,
  phone: string,
  date_of_birth: Date,
  years_of_experience: number,
  specialty: string,
  state: 'unemployed' | 'hired',
  hiring_date: Date | null,
}
