export class UserService {
    users = [
      {
        id: 1,
        name: 'Max'
      },
      {
        id: 2,
        name: 'Anna'
      },
      {
        id: 3,
        name: 'Chris'
      }
    ];

    getUsers = (): {id: number, name: string}[] => {
        return this.users.slice();
    }

    findUser = (id: number): {id: number, name: string} => {
      const user = this.users.find(u => u.id === id);

      return user;
    }
}
