
module.exports = {
    validatePasswordRequirements: (req, res, next) => {
        // Password requirements
        if (!req.body.password || req.body.password.length < 8) {
            return res.status(400).send({
                msg: 'Password must contain at least 8 characters'
            })
        }
        // Repeated password does not match when changing password
        if (
            !req.body.password_repeat ||
            req.body.password != req.body.password_repeat
        ) {
            return res.status(400).send({
                msg: 'Both passwords must match'
            })
        }
        next()
    }


}


