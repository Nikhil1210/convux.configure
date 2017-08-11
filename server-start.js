process.env.NODE_ENV = 'development'
process.env.PORT = '4040'
process.env.JWT_SECRET = '0a6b944d-d2fb-46fc-a85e-0295c986cd9f'
process.env.MONGO_HOST = 'mongodb://convux:mongodb1@ds037817.mlab.com:37817/convux'
process.env.MONGO_PORT = '37817'
require('babel-register');
require("babel-polyfill");
require('./server');