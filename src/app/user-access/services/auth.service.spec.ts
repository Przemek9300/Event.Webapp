// import { TestBed } from '@angular/core/testing';

// import { AuthService } from './auth.service';

// fdescribe('AuthService', () => {
//   beforeEach(() => TestBed.configureTestingModule({}));

//   it('should be created', () => {
//     const service: AuthService = TestBed.get(AuthService);
//     expect(service).toBeTruthy();
//   });
// });
// A
import { RouterTestingModule } from '@angular/router/testing';
import { createHttpFactory, HttpMethod, SpectatorHttp } from '@ngneat/spectator';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { RouterOutlet, Router } from '@angular/router';

// describe('HttpClient testing', () => {
//   let spectator: SpectatorHttp<AuthService>;
//   const createHttp = createHttpFactory(AuthService);

//   beforeEach(() => (spectator = createHttp({ providers: [Router] })));
//   it('can test HttpClient.get', () => {
//     spectator.service.login('', '').subscribe();
//     spectator.expectOne(environment.auth, HttpMethod.POST);
//   });
// });

// it('can test HttpClient.post', () => {
//   spectator.service.postTodo(1).subscribe();

//   const req = spectator.expectOne('api/todos', HttpMethod.POST);
//   expect(req.request.body['id']).toEqual(1);
// });

// it('can test current http requests', () => {
//   spectator.service.getTodos().subscribe();
//   const reqs = spectator.expectConcurrent([
//     { url: '/api1/todos', method: HttpMethod.GET },
//     { URL: '/api2/todos', method: HttpMethod.GET }
//   ]);

//   spectator.flushAll(reqs, [{}, {}, {}]);
// });
