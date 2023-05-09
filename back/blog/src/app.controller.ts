import { Controller } from '@nestjs/common';
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable, Subject } from 'rxjs';
import { BlogById } from './interfaces/blog-by-id.interface';
import { Blog } from './interfaces/blog.interface';

@Controller('blog')
export class AppController {
  private readonly items: Blog[] = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Doe' },
  ];

  @GrpcMethod('BlogService')
  findOne(data: BlogById): Blog {
    return this.items.find(({ id }) => id === data.id);
  }

  @GrpcStreamMethod('BlogService')
  findMany(data$: Observable<BlogById>): Observable<Blog> {
    const blog$ = new Subject<Blog>();

    const onNext = (blogById: BlogById) => {
      const item = this.items.find(({ id }) => id === blogById.id);
      blog$.next(item);
    };
    const onComplete = () => blog$.complete();
    data$.subscribe({
      next: onNext,
      complete: onComplete,
    });

    return blog$.asObservable();
  }
}
