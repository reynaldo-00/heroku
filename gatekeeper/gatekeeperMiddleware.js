module.exports = (req, res, next) => {
    if(req.query.pass === 'melon') {
        console.log('welcome travelers');

        req.welcomeMessage = 'welcome to the mines of Moria';
        next();
    } else {
        res.send('you shall not pass!')
    }
}
