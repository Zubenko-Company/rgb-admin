import dotenv from "dotenv";
import { findUp } from "find-up";

const dotenvPath = await findUp(".env");
dotenv.config({ path: dotenvPath });

const jwtSecret = process.env.JWT_SECRET;
const adminLogin = process.env.ADMIN_LOGIN;
const adminPassword = process.env.ADMIN_PASSWORD;

if (!jwtSecret) {
  throw new Error("Bad jwt secret");
}

if (!adminLogin) {
  throw new Error("Bad admin login");
}

if (!adminPassword) {
  throw new Error("Bad admin password");
}

export const ENV = {
  jwtSecret,
  adminLogin,
  adminPassword,
};
