import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  list(): Array<{ name: string, email: string }> {
      return [
        {
          name: "User 1", 
          email: "user1@rocketseat.com"
        },
        {
          name: "User 2", 
          email: "user2@rocketseat.com"
        },
        {
          name: "User 4", 
          email: "user4@rocketseat.com"
        }
      ];
  }
}
