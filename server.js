/**
 * @Author: PopAlexandru
 * @Date:   2018-10-20T22:58:58+02:00
 * @Email:  pop_a@etna-alternance.net
 * @Last modified by:   PopAlexandru
 * @Last modified time: 2018-10-21T15:39:42+02:00
 */

const express = require('express')
const app = express()
const port = 5050

require('./api-server/router')(app)
app.listen(port, () =>{
  console.log("Server is running on port: " + port)
})
