import jwt from "jsonwebtoken";
export function checkAuthToken(req, res, next) {
    const token = req.headers.authorization && req.headers.authorization.split(" ")[1];
    if (!token) {
        return res.status(401).send({ message: "Unauthorized: Missing token" });
    }
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Unauthorized: Invalid token" });
        }
        req.user = decoded.id;
        next();
    });
}
//# sourceMappingURL=authentication.js.map