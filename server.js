
const app = require('./index');    
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3000;


const server = app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT} `);
});
