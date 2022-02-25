const jwt = require('jsonwebtoken');

export const toJWT = (data: any) => {
  return jwt.sign(data, 'SECRET', { expiresIn: '4h' });
};

export const toData = (token: any) => {
  return jwt.verify(token, 'SECRET');
};
