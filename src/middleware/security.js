const bcrypt = require('bcryptjs')

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
    authorize: async (inserted, actual) => {
        try {
            const rs = await bcrypt.compare(inserted, actual)
            if (!rs) {
                throw new Error("Unable to login")
            }
            return rs
        } catch (err) {
            throw new Error("Unable to login")
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
