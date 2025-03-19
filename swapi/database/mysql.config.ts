import { DataSourceOptions } from 'typeorm';
import 'dotenv/config';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_DOCKER_CONTAINER_PORT),
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/database/migration/*.js'],
};

// console.log(process.env.MYSQL_DATABASE);

export default dataSourceOptions;
