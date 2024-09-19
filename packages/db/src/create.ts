import type { DataSourceOptions } from "typeorm";
import { DataSource } from "typeorm";

import { Message } from "./entities/Message.js";
import { User } from "./entities/User.js";

const defaultDatabaseConfig = {
  type: "mongodb",
  database: "RuleGuideBot",
  host: "localhost",
  port: 27017,
  synchronize: true,
  logging: false,
  entities: [User, Message],
  migrations: [],
  subscribers: [],
} satisfies Partial<DataSourceOptions>;

interface CreateDatabaseOptions {
  host: string;
  username: string;
  password: string;
  port: number;
}

export const createDatabaseConnection = async (
  options: Partial<CreateDatabaseOptions>,
) => {
  const sourceOptions = {
    ...options,
    ...defaultDatabaseConfig,
  };

  const AppDataSource = new DataSource(sourceOptions);
  await AppDataSource.initialize();

  return {
    Mesages: Message,
    Users: User,
  };
};
