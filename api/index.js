const server = require('./src/app.js')

// Initializing server.
server.listen(3001, async () => {
  console.log('%s listening at 3001')
})
