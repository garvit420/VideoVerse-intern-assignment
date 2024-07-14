const tokenKey = process.env.TOKEN_KEY;

module.exports = function (req, res, next) {
    const token = req.headers['authorization'];
    const staticToken = tokenKey;
  
    if (!token || token !== `Bearer ${staticToken}`) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    next();
};


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
  
  