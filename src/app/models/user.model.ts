import { JobType } from '../shared/enums/job-type.interface';
interface IntervalDate {
  month: number
  year: number
}

interface Experience {
  at: string
  location: string
  start: IntervalDate
  end: IntervalDate
}

interface PreviousJob extends Experience {
  type: JobType
  skills: string[]
}

interface Education extends Experience {
  degree: string
  career: string
}

interface CV {
  url?: string
  about?: string
  education?: Education[]
  experience?: PreviousJob[]
  skills?: string[]
}

export interface User {
  uid: string
  name: string
  email: string
  photo: string
  cv?: CV
  phone?: string
  birthdate?: Date
  address?: string
}
