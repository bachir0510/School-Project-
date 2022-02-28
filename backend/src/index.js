import app from "./app";
import "./database";

async function main() {
  await app.listen(app.get("Port"));
  console.log("SERVER", app.get("Port"));
}
main();
