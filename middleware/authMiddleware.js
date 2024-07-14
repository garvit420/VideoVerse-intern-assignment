const config = require('../config/config');

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];
  
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  if (token !== 'Bearer ' + config.tokenKey) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  next();
};

module.exports = authMiddleware;



// module.exports = function (req, res, next) {
//     const token = req.headers['authorization'];
//     if (!token) {
//       return res.status(403).send('A token is required for authentication');
//     }
//     try {
//       const decoded = jwt.verify(token, process.env.TOKEN_KEY);
//       req.user = decoded;
//     } catch (err) {
//       return res.status(401).send('Invalid Token');
//     }
//     return next();
//   };
  
  