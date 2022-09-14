import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class YourInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req);
  }
}

// ---------------------------

// import { Injectable } from '@angular/core';
// import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable()
// export class HeaderInterceptor implements HttpInterceptor {
//   constructor() {}

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const headers = req.headers
//       .set('Content-Type', 'application/json');
//     const authReq = req.clone({ headers });
//     return next.handle(authReq);
//   }
// }

// // ---------------------------

// import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { tap } from 'rxjs/operators';

// @Injectable()
// export class LogInterceptor implements HttpInterceptor {
//   constructor() {}

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const started = Date.now();
//     return next.handle(req).pipe(
//       tap(event => {
//         if (event instanceof HttpResponse) {
//           const elapsed = Date.now() - started;
//           console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
//         }
//       })
//     );
//   }
// }
