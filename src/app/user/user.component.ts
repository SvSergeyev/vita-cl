import {RoleComponent} from "../role/role.component";

export class UserComponent {
  id: number;
  name: string;
  email: string;
  roles: RoleComponent[];

  constructor(id: number, name: string,
              email: string, roles: RoleComponent[]) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.roles = roles;
  }
}
