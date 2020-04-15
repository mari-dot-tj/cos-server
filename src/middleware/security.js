const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = {
    checkCustomerPassword: (customer) => {
        return async (req, res, next) => {
            try {
                if (req.body.password == null) {
                    res.locals.shouldSkipPassHash = true
                    return next()
                }
                const rs = await customer.getOneCustomer(req.body.customer_id)
                let current = rs[0]
                if ((await bcrypt.compare(req.body.password, current.password))) {
                    res.locals.shouldSkipPassHash = true
                } else {
                    res.locals.shouldSkipPassHash = false
                }
                next()
            } catch (error) {
                res.status(400).send(error)
            }

        }
    },
    securePassword: () => {
        return async (req, res, next) => {
            try {
                if ((res.locals.shouldSkipPassHash)) {
                    return next()
                }
                let hashed = await bcrypt.hash(req.body.password, 8)
                req.body.password = hashed
                next()
            } catch (error) {
                res.status(400).send(error)
            }

        }
    },
    generateRandomString: () => {
        return async (req, res, next) => {
            try {
                req.body.password = "TempString"
                next()
            } catch (error) {
                res.status(400).send(error)
            }

        }
    },
    authToken: (customer) => {
        return async (req, res, next) => {
            try {
                const token = req.header('Authorization').replace('Bearer ', '')
                const decoded = jwt.verify(token, 'temp')
                const rs = await customer.getCustomerByToken(token, decoded._id)

                req.customer = rs[0][0]
                next()
            } catch (error) {
                res.status(401).send({msg: "Please authenticate"})
            }

        }
    },
    authorizePass: async (inserted, actual) => {
        try {
            const rs = await bcrypt.compare(inserted, actual)
            if (!rs) {
                throw new Error()
            }
            return rs
        } catch (error) {
            throw new Error("Unable to login")
        }

    },
    generateAuthToken: async (customer, id) => {
        try {
            const token = jwt.sign({ _id: id }, 'temp', { expiresIn: '7 days' })
            console.log(token)
            const rs = await customer.insertToken(token, id)
            console.log(rs.affectedRows)
            if(rs.affectedRows === 0){
                throw new Error()
            }
            return token
        } catch (err) {
            throw new Error("Unable to generate token")
        }

    }

}

/* Try/catch handler */
function tryCatchHandler(func) {
    return async (rec, res, next) => {
        try {
            await func(rec, res, next)
        } catch (err) {
            res.status(500).send(err)
        }
    }
}
