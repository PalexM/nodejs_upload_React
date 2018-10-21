/**
 * @Author: PopAlexandru
 * @Date:   2018-10-20T23:18:17+02:00
 * @Email:  pop_a@etna-alternance.net
 * @Last modified by:   PopAlexandru
 * @Last modified time: 2018-10-21T15:39:45+02:00
 */
const multer = require('multer')
const fs = require('fs')

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads/')
  },
  filename: function (req, file, callback) {
      callback(null, file.originalname)
  }
})

const upload = multer({
  storage: storage
})
module.exports = function(app) {
  app.post('/upload', upload.single('file'), (req, res) => {
    response.send({"msg": "File uploaded"})
  })
}
