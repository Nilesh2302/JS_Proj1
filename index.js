const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

app = express();
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.listen(3000, () => {
    console.log('server running on port 3000');
})


