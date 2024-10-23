const isValid = (req, res, next) => {
    let { email, password, username } = req.body
    if (!email || !username || !password) {
        res.send("Invalid User")
    }
    else {
        next();
    }
}

module.exports = isValid;
