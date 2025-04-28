import { Injectable } from '@nestjs/common';
import { log } from '../../infra/logger'
import { request } from 'undici';

@Injectable()
export class UserService {
  async list(): Promise<any> {
      const { statusCode, body } = await request('http://localhost:3002/users');
      const payload = await body.json();
      log.info (`${statusCode} | ${JSON.stringify(payload)}`);
  }
}
