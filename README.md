# OTA-Server-Sample

Example code for a firmware server for the Omega2. To be used in conjunction with `oupgrade`, a software package for firmware management.

See [`oupgrade` package README](https://github.com/OnionIoT/Oupgrade#oupgrade) for details on how to point `oupgrade` to your own deployed firmware server.

# Running Locally

Make sure NodeJS is installed. 

Install dependencies: 

```
npm install
```

To run locally:

```
npm run test
```

# Deploying this Server

See the many resources online about deploying NodeJS applications for more information.

# API Endpoints provided by this Server

See [full API documentation](./openapi.md) for more details

`POST /`
Report firmware update status

`GET /{device}`
List all available FW for a device


`GET /{device}/{fwType}`
Get the latest or stable FW for a device

# Adding New Firmware 

Manually edit the `fwDB.json` file to add information on a new firmware release. Then redeploy your server.

> This is done manually because this is example code, a starting point for your own implementation. An idea for your own implementation: make an automated way to add new firmware release info, perhaps by changing the server to use a database instead of a json file.

Specifically, a new firmware release object must be added to the JSON array in the `fwDB.json` file. Every firmware release object must follow this schema:

```
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "version": {
      "type": "string"
    },
    "url": {
      "type": "string"
    },
    "build": {
      "type": "integer"
    },
    "device": {
      "type": "string"
    },
    "stable": {
      "type": "boolean"
    }
  },
  "required": [
    "version",
    "url",
    "build",
    "device",
    "stable"
  ]
}
```

For example:

```
{
  "device":"omega2p", # device type
  "version":"0.3.2",  # firmware version number
  "build":233,        # firmware build number
  "url":"http://repo.onioniot.com/omega2/images/omega2p-v0.3.2-b233.bin",
  "stable":true
}
```

**Note that the `url` must point to a URL where the firmware binary file can be downloaded**
