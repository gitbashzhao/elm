const sqlQuery = require(__basename + '/lib/db/db.api.js');

class API {
	constructor() {}

	query(sql) {
		return sqlQuery.query(sql);
	}
}

module.exports = new API();