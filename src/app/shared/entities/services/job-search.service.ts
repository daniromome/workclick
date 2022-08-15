import { Injectable } from '@angular/core';
import { from, map } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { Client } from 'typesense';
import { SearchParams } from 'typesense/lib/Typesense/Documents';
import { environment } from '../../../../environments/environment';
import { PostEntityService } from './post-entity.service';

@Injectable({
  providedIn: 'root'
})
export class JobSearchService {

  private client: Client;

  constructor(
    private post: PostEntityService
  ) {
    this.client = new Client({
      apiKey: environment.typesense,
      nodes: [
        {
          host: 'typesense.daniromo.me',
          port: 443,
          protocol: 'https'
        }
      ]
    })
  }

  public async search(params: SearchParams): Promise<void> {
    const response = await this.client.collections<Post>('jobs').documents().search(params)
    this.post.clearCache()
    this.post.addAllToCache(response.hits?.map(res => res.document) || [])
  }
}
