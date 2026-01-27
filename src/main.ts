import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable validation
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  // Enable CORS
  app.enableCors();

  // Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('AMS - Academic Management System')
    .setDescription('API documentation for Greenfield Secondary School Academic Management System')
    .setVersion('1.0')
    .addTag('Authentication', 'User authentication and authorization endpoints')
    .addTag('Users', 'User management endpoints')
    .addTag('Registrations', 'Student registration management')
    .addTag('Fees', 'Fee structure management')
    .addTag('Invoices', 'Invoice generation and management')
    .addTag('Payments', 'Payment processing and verification')
    .addTag('Results', 'Academic results management')
    .addTag('Academic Sessions', 'Academic session and semester management')
    .addTag('Audit Logs', 'System audit logging and tracking')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'JWT-auth',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    customCss: `
      .swagger-ui .topbar { 
        background-color: #1e3a8a; 
        border-bottom: 3px solid #3b82f6;
      }
      .swagger-ui .topbar-wrapper .link { 
        content: url('https://img.icons8.com/fluency/96/null/graduation-cap.png'); 
        width: 40px; 
        height: 40px; 
      }
      .swagger-ui .info .title { 
        color: #1e3a8a; 
        font-size: 2.5rem;
        font-weight: 700;
      }
      .swagger-ui .info .description { 
        font-size: 1.1rem; 
        color: #4b5563;
        line-height: 1.6;
      }
      .swagger-ui .scheme-container { 
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      }
      .swagger-ui .opblock-tag { 
        border-bottom: 2px solid #3b82f6;
        font-size: 1.3rem;
        font-weight: 600;
        color: #1e3a8a;
        padding: 15px 0;
      }
      .swagger-ui .opblock.opblock-post { 
        border-color: #10b981; 
        background: rgba(16, 185, 129, 0.05);
      }
      .swagger-ui .opblock.opblock-get { 
        border-color: #3b82f6; 
        background: rgba(59, 130, 246, 0.05);
      }
      .swagger-ui .opblock.opblock-patch { 
        border-color: #f59e0b; 
        background: rgba(245, 158, 11, 0.05);
      }
      .swagger-ui .opblock.opblock-delete { 
        border-color: #ef4444; 
        background: rgba(239, 68, 68, 0.05);
      }
      .swagger-ui .opblock-summary-method { 
        font-weight: 700;
        text-transform: uppercase;
        min-width: 80px;
        border-radius: 6px;
      }
      .swagger-ui .opblock-summary-path { 
        font-family: 'Monaco', 'Menlo', monospace;
        font-weight: 600;
      }
      .swagger-ui .btn.authorize { 
        background-color: #3b82f6;
        border-color: #2563eb;
        color: white;
        font-weight: 600;
        padding: 10px 20px;
        border-radius: 6px;
        transition: all 0.3s ease;
      }
      .swagger-ui .btn.authorize:hover { 
        background-color: #2563eb;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
      }
      .swagger-ui .btn.execute { 
        background-color: #10b981;
        border-color: #059669;
        color: white;
        font-weight: 600;
        border-radius: 6px;
      }
      .swagger-ui .btn.execute:hover { 
        background-color: #059669;
      }
      .swagger-ui .response-col_status { 
        font-weight: 700;
      }
      .swagger-ui table thead tr th { 
        background-color: #f3f4f6;
        font-weight: 600;
        color: #1f2937;
      }
      .swagger-ui .model-box { 
        background-color: #f9fafb;
        border-radius: 8px;
        padding: 15px;
      }
      .swagger-ui .parameter__name { 
        font-weight: 600;
        color: #1e3a8a;
      }
      .swagger-ui .parameter__type { 
        color: #059669;
        font-weight: 500;
      }
      .swagger-ui section.models { 
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        background-color: #fafafa;
      }
      .swagger-ui .model-title { 
        color: #1e3a8a;
        font-weight: 600;
      }
      .swagger-ui .responses-inner h4 { 
        font-weight: 600;
        color: #1f2937;
      }
      .swagger-ui .response.highlighted { 
        background-color: #dbeafe;
      }
      .swagger-ui .opblock-description-wrapper p { 
        color: #4b5563;
        font-size: 0.95rem;
      }
      .swagger-ui .authorization__btn { 
        background-color: #8b5cf6;
        color: white;
        border-radius: 6px;
      }
      .swagger-ui .authorization__btn:hover { 
        background-color: #7c3aed;
      }
      .swagger-ui .info { 
        margin: 30px 0;
      }
      .swagger-ui .info hgroup.main a { 
        background-color: #3b82f6;
        color: white;
        padding: 5px 15px;
        border-radius: 20px;
        font-size: 0.85rem;
      }
    `,
    customSiteTitle: 'AMS API Documentation - Greenfield Secondary School',
    customfavIcon: 'https://img.icons8.com/fluency/96/null/graduation-cap.png',
    swaggerOptions: {
      persistAuthorization: true,
      tagsSorter: 'alpha',
      operationsSorter: 'alpha',
      docExpansion: 'none',
      filter: true,
      showRequestHeaders: true,
      displayRequestDuration: true,
      defaultModelsExpandDepth: 3,
      defaultModelExpandDepth: 3,
      tryItOutEnabled: true,
    },
    customJsStr: `
      window.onload = function() {
        const logo = document.querySelector('.topbar-wrapper .link img');
        if (logo) {
          logo.alt = 'AMS - Academic Management System';
        }
      }
    `,


    
  });

  await app.listen(process.env.PORT ?? 3000);
  console.log(`Application is running on: http://localhost:${process.env.PORT ?? 3000}`);
  console.log(`Swagger documentation available at: http://localhost:${process.env.PORT ?? 3000}/api`);
}
bootstrap();
