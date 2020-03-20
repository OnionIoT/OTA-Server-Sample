const express = require('express')
const bodyParser = require('body-parser')
const jp = require('jsonpath');
const fs = require('fs')
const app = express()
const port = 8080

const fwDB = './fwDB.json'
const updateLog = './update.log'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Report FW update status
app.post('/', (req, res) => {
  // Sample body: device=omega2pro&mac_addr=DEADBEEF&firmware_version=1.0.1&firmware_build=b010&upgrade_status=complete
  var d = req.body
  var msg = `(${Date.now()}) [FW_ACK] [${d.upgrade_status}] [${d.device}] ${d.mac_addr} ${d.firmware_version} ${d.firmware_build}\n`

  // TODO: Trigger custom action when device acknowledges an update
  console.log(msg)
  fs.appendFileSync(updateLog, msg)

  res.json({success: "OK"})
})


// List all available FW for a device
app.get('/:device', (req, res) => {
  var data = fs.readFileSync(fwDB)
  data = JSON.parse(data)

  var result = jp.query(data, `$[?(@.device=="${req.params.device}")]`)

  res.json(result)
})

// Get the latest or stable FW for a device
app.get('/:device/:fwType', (req, res) => {

  // TODO: Custom implementation for fw data source
  /* Expected data format:
    {
      "version": "0.3.2",
      "url": "http://repo.onioniot.com/omega2/images/omega2-v0.3.2-b234.bin",
      "build": 234,
      "device": "omega2",
      "stable": false
    }
  */

  var data = JSON.parse(fs.readFileSync(fwDB))

  var stable = (req.params.fwType === 'stable')

  var query = `@.device=="${req.params.device}"`
  if (req.params.fwType === 'stable') {
    query = query + ` && @.stable==${stable}`
  }

  var result = jp.query(data, `$[?(${query})]`)

  res.json(result[0])

})

app.listen(port, () => console.log(`Example OTA Server listening on port ${port}!`))
