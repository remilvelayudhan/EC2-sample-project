const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
dotenv.config();

const port = process.env.PORT || 8000;
const allowedUrls =[process.env.FROENTEND_URL];
app.use(
    cors({
        origin: function (origin, callback) {
            if (origin === null || allowedUrls.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        credentials: true,
    }
));



app.use(express.json());
app.get('/', (req, res) => {
    res.send(' remil sample project ---Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port  ${port}`);
});

