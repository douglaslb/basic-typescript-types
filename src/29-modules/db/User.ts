import { createHash, randomUUID } from "node:crypto";

interface BaseUser {
  name: string;
  email: string;
  password: string;
}

export interface UserCreate extends BaseUser {
  id?: string;
}

export interface IUser extends BaseUser {
  id: string;
}

export default class User implements IUser {
  constructor(
    readonly id: string,
    public name: string,
    public email: string,
    readonly password: string
  ) {}

  static create(name: string, email: string, password: string) {
    const hashPassword = createHash("sha512").update(password).digest("hex");

    return new User(randomUUID(), name, email, hashPassword);
  }

  static fromObject({ id, name, email, password }: IUser) {
    return new User(id, name, email, password);
  }

  toString() {
    return `User: ${this.name} <${this.email}>`;
  }

  equals(user: User) {
    return this.id === user.id;
  }

  sayHello() {
    console.log(`Hello, I'm ${this.name} and my e-mail is ${this.email}!`);
  }

  updatePassword(newPassword: string) {
    const hashPassword = createHash("sha512").update(newPassword).digest("hex");

    return new User(this.id, this.name, this.email, hashPassword);
  }
}
