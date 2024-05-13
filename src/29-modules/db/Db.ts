import { resolve } from "path";
import User, { type IUser } from "./User";
import { existsSync, readFileSync, writeFileSync } from "fs";

export class Database {
  readonly path: string;
  #db: Map<User["id"], User> = new Map();

  constructor(path = "./db.json") {
    this.path = resolve(__dirname, path);
    this.#init();
  }

  #init() {
    if (existsSync(this.path)) {
      const file = readFileSync(this.path, { encoding: "utf-8" });
      const data: [string, User][] = (
        JSON.parse(file) as Array<[string, IUser]>
      ).map(([id, user]) => [id, User.fromObject(user)]);

      this.#db = new Map(Array.from(data));
      return;
    }

    this.#updateFile();
  }

  #updateFile() {
    writeFileSync(this.path, JSON.stringify([...this.#db]));
  }

  upsert(entity: User) {
    this.#db.set(entity.id, entity);
    this.#updateFile();
  }

  findById(id: User["id"]) {
    return this.#db.get(id);
  }

  findAll() {
    return Array.from(this.#db.values());
  }

  deleteById(id: User["id"]) {
    this.#db.delete(id);
    this.#updateFile();
  }
}
