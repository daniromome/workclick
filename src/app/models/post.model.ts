import { Gender } from '../shared/enums/gender.interface';
import { JobType } from '../shared/enums/job-type.interface';

export interface Post {
  id?: string
  title: string
  company: string
  address: string
  position: string
  salary: number[]
  type: JobType
  quantity: number
  career: string
  gender: Gender
  age: number[]
  experience: number
  schedule: string[]
  skills: string
  activities: string
  benefits: string
  user: string
  applicants?: string[]
}
