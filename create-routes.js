var ALBUM_LIST_DATA_1 = require('./src/app/data/audio/album-list-1.json')
var ALBUM_LIST_DATA_2 = require('./src/app/data/audio/album-list-2.json')
var fs = require('fs')
var fileContent = ''
function extendFileContentFromObj(obj) {
  Object.keys(obj).map(function(id) {
    return '/albums/' + id
  }).forEach(function(item) {
    fileContent += item +'\n'
  })
}
extendFileContentFromObj(ALBUM_LIST_DATA_1)
extendFileContentFromObj(ALBUM_LIST_DATA_2)
fs.writeFile('routes.txt', fileContent, function(err) {
    if (err) throw err
    console.log('routes.txt ist fertig!')
  }
)
