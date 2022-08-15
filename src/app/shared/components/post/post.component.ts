import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Post } from '../../../models/post.model';

@Component({
  selector: 'wo-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent {

  @Input() post!: Post

  constructor() { }

  public getAgeRequirement(): string {
    if (this.post.age[0] && !this.post.age[1]) return `${this.post.age[0]}+`
    if (this.post.age[0] && this.post.age[1]) return `${this.post.age[0]} - ${this.post.age[1]}`
    else return 'Indistinta'
  }

}
