const express = require('express');

const app = express();

app.get('/echo/:name', (req,res) =>
{ const name = req.params.name || 'world';
res.status(200).send(`Hello, ${name}!!!!!!!!!!!`);
});

app.listen(8080, () => {
console.log('App is listening on  port 8080');
}


);