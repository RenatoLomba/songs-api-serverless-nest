import { configure as serverlessExpress } from '@vendia/serverless-express';

import { createApp } from './app';

let cachedServer;

export const handler = async (event, context) => {
  if (!cachedServer) {
    console.log({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true,
    });
    const nestApp = await createApp();
    await nestApp.init();
    cachedServer = serverlessExpress({
      app: nestApp.getHttpAdapter().getInstance(),
    });
  }

  return cachedServer(event, context);
};
