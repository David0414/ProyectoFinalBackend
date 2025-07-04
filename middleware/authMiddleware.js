const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
const token = req.headers['authorization']?.split(' ')[1];
  console.log("Token recibido en backend:", token); // Verifica si el token está llegando correctamente

  if (!token) return res.status(403).json({ error: 'Token no proporcionado' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ error: 'Token inválido' });
    req.user = decoded;
    next();
  });
}

module.exports = verifyToken;
