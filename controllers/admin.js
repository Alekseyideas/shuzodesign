const path = require('path');

exports.getHome = ( req, res, next) => {
	const src = __dirname + '/../';
	res.sendFile(path.join(src, 'views/admin/build/', 'index.html'));

};
