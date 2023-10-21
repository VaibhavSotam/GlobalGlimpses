const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res)=>{
    //console.log('Request Made!!');
    // console.log(req.url, req.method);

    //lodash
    const num = _.random(1,20);
    console.log(num);

    res.setHeader('Content-Type', 'text/html');
    //res.write('<h1> Hello Vaibhav </h1>');
    fs.readFile('./views/index.html', (err, data)=>{   //sending the html pages
        if(err)
        {
            console.log(err);
            res.end();
        }
        else{
            //res.write(data);
            res.end(data);
        }
    });

});
server.listen(3000, 'localhost', ()=>{
    console.log('server is listening');
});