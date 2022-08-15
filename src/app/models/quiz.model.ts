export interface Option {
  description: string;
  correct: boolean;
}

export interface Question {
  prompt: string;
  options: Option[];
}

export interface Quiz {
  id: string;
  title: string,
  description: string,
  questions: Question[],
  post: string
}
