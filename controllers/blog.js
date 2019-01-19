exports.getHome = ( req, res, next) => {
	res.render(`${process.env.PAGES_PATH}/home`, {
		pageTitle: 'Home'
	})
};