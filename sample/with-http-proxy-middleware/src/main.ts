import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createProxyMiddleware } from 'http-proxy-middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuration
  const PORT = 3000;
  const HOST = 'localhost';
  const API_SERVICE_URL = 'https://jsonplaceholder.typicode.com';

  // Proxy endpoints
  app.use(
    '/json_placeholder',
    createProxyMiddleware({
      target: API_SERVICE_URL,
      changeOrigin: true,
      pathRewrite: {
        [`^/json_placeholder`]: '',
      },
    }),
  );

  await app.listen(3000);
}

bootstrap();
