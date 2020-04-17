const Query = require("./query.js")

module.exports = class Customer extends Query {

	/**	Get all customers from the database */
	getAll = async () => {
		return await super.query(
			"select customer_id, name, address, phone, org_number, email, active, subscription, zip_code FROM Customer",
			[]
		)
	}

	getOneCustomer = async (id) => {
		return await super.query(
			"select * FROM Customer where customer_id = ?",
			id
		)
	}

	getOneCustomerByEmail = async (email) => {
		return await super.query(
			"select * FROM Customer where email = ?",
			email
		)
	}

	checkEmailExists = async (email) => {
		return await super.query(
			"select count(email) as res FROM Customer where email = ?",
			email
		)
	}

	createNewCustomer = async (newUser) => {
		const params = [newUser.name, newUser.address, newUser.phone, newUser.org_number, newUser.email, '0', newUser.password, newUser.zip_code, newUser.subscription]
		return await super.query(
			"insert into Customer (name, address, phone, org_number, email, active, password, zip_code, subscription) values (?, ?, ?, ?, ?, ?, ?, ?, ?)",
			params
		)
	}
	updateCustomer = async (update, id) => {
		return await super.query(
			"update Customer set ? where customer_id = ?",
			[update, id]
		)
	}

	insertToken = async (token, customer_id) => {
		return await super.query(
			"insert into Tokens (token, customer_id) values (?, ?)",
			[token, customer_id]
		)
	}

	getTokens = async (customer_id) => {
		return await super.query(
			"select * from Tokens where customer_id = ?",
			[customer_id]
		)
	}

	deleteAllTokensOnCustomer = async (customer_id) => {
		return await super.query(
			"delete from Tokens where customer_id = ?",
			[customer_id]
		)
	}

	deleteTokenAtLogout = async (token, customer_id) => {
		return await super.query(
			"delete from Tokens where customer_id = ? and token = ?",
			[customer_id, token]
		)
	}

	getCustomerByToken = async (token, customer_id) => {
		return await super.query(
			"call proc_customer_by_token(?, ?)",
			[customer_id, token]
		)
	}
}