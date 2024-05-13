import { Database } from "./db";
import User from "./db/User";

function main() {
  const db = new Database();

  const users = db.findAll();

  if (!users.length) {
    console.log("No users found");
    const Douglas = User.create(
      "Douglas",
      "douglas@gmail.com",
      "mysecretpassword"
    );

    db.upsert(Douglas);
  }

  console.log(db.findAll());

  const user = db.findById(users[0].id || "");

  if (!user) {
    throw new Error("User not found");
  }

  const newDouglasPassword = user.updatePassword(Date.now().toString());
  db.upsert(newDouglasPassword);

  console.log(db.findAll());
}

main();
