const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0', // Usa 3.0.0 para máxima compatibilidad
    info: {
      title: 'API Inventario Desiderium Sex Shop',
      version: '1.0.0',
      description: 'Documentación de la API del inventario de productos',
      contact: {
        name: 'Alexander'
      }
    },
    servers: [
      {
        url: 'http://localhost:3100',
        description: 'Servidor local'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ]
  },
  apis: ['./src/routes/*.js'] // Asegúrate que el path es correcto
};

const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;
