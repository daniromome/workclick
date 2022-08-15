import { JobType } from '../shared/enums/job-type.interface';
export interface IntervalDate {
  month: number
  year: number
}

interface Experience {
  at: string
  location: string
  start: IntervalDate
  end: IntervalDate
}

export interface PreviousJob extends Experience {
  position: string
  type: JobType
  skills: string[]
}

export interface Education extends Experience {
  degree: string
  career: string
}

export interface CV {
  url: string
  about: string
  education: Education[]
  experience: PreviousJob[]
  skills: string[]
}

export interface User {
  uid: string
  name: string
  email: string
  photo: string
  cv?: CV
  phone?: string
  birthdate?: string
  address?: string
  jobs?: string[]
}
