module.exports = function (app) {
    app.get('/index.html',function (req,res) {
        res.sendFile( 'views'+ '/'+'index.html')
    });
    app.get('/process_get', function (req,res) {
        res.send('log')
        var user={
            name:req.query.name,
            pass:req.query.pass
        }
        res.end(JSON.stringify(user))
    })
};
