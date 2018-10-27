var middleware = 
{
    requireAuthentication: function(req, res, next) {
        console.log('Private route hit');
        next();
    },
    logger: function(req, res, next){
        var date = new Date().toString();
        console.log('Requested on: ' + date + ' with the method ' + req.method + ' ' + req.originalUrl);
        next();
    }
};

module.exports = middleware;