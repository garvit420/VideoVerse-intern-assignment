const tokenKey = process.env.TOKEN_KEY;

export default function (req, res, next) {
    const token = req.headers['authorization'];
    const staticToken = tokenKey;
  
    if (!token || token !== `Bearer ${staticToken}`) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    next();
};
  