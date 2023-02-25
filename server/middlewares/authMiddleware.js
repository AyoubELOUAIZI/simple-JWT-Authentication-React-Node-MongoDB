const User = require("../model/authModel");
const jwt = require("jsonwebtoken");

module.exports.checkUser = (req, res, next) => {
    console.log('the function check User middelware is working ********* .........')
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, "ayoub test jwt super secret key", async (err, decodedToken) => {
            if (err) {
                res.json({ status: false });
                next();
            } else {
                const user = await User.findById(decodedToken.id);
                if (user) res.json({ status: true, user: user.email });
                else res.json({ status: false });
                next();
            }
        }
        );
    } else {
        res.json({ status: false });
        next();
    }
};