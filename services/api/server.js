const express = require('express');
const port = 3060;
const cors = require('cors');
const { default: axios } = require('axios');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const getMilestones = async({access_token, username, password}) => {
    try {
        const req = await axios.get(`https://gitlab.spacefill.fr/api/v4/issues?access_token=${access_token}`, {
            auth: {
                username: username,
                password: password,
            }
        });
        return (req.data);
    }
    catch (e) {
        console.log(e);
        return ([]);
    }
}

app.get('/', (req, res) => {
    res.status(200).json('Api is running')
})

app.post('/data', async(req, res) => {
    const data = await getMilestones(req.body);
    const output = [];
    for (const i in data) {
        output.push(data[i].web_url);
    }
    res.status(200).json(output);
});

app.listen(port, () => {
    console.log('running on', port);
})