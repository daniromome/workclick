import { Answers } from '../../models/answers.model';
import { User } from '../../models/user.model';

export interface UserWithAnswers extends User {
  index: number
  answers?: Answers
}
