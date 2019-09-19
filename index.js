const server = require('./server.js')
const port = process.env.port || 8000;


server.listen(port, () => console.log(`Turn back and save yourself, for port ${8000} is on the loose!`))