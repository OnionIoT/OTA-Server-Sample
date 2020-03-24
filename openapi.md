# OTA Server Sample

Example of firmware server for Omega2 and OpenWRT devices

## Table of Contents

* [Paths](#paths)
  - [`GET` /{device}](#op-get-device) 
  - [`GET` /{device}/{firmwareType}](#op-get-device-firmwaretype) 
  - [`POST` /](#op-post) 
* [Schemas](#schemas)
  - firmwareInfo
  - updateAcknowledge




## Paths


### `GET` /{device}
<a id="op-get-device" />

> List all available firmware for a specified device

List all available firmware for a specified device


#### Path parameters

##### &#9655; device

Name of the device


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>In</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>device  <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td>path</td>
        <td>Name of the device</td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>

##### Example

```json
"omega2"
```







#### Responses


##### ▶ 200 - successful operation

###### Headers
_No headers specified_

###### application/json



<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>Response</td>
        <td>
          array(object)
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>Response.device <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>Response.version <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>Response.build <strong>(required)</strong></td>
        <td>
          integer
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>Response.url <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>Response.stable <strong>(required)</strong></td>
        <td>
          boolean
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


##### Example _(generated)_

```json
[
  {
    "device": "omega2",
    "version": "0.3.2",
    "build": 236,
    "url": "http://repo.onioniot.com/omega2/images/omega2-v0.3.2-b236.bin",
    "stable": true
  }
]
```

#### Tags

<div class="tags">
  <div class="tags__tag"></div>
</div>
</div>

### `GET` /{device}/{firmwareType}
<a id="op-get-device-firmwaretype" />

> Get information on a firmware release

Get information on the latest or stable firmware release for the specified device


#### Path parameters

##### &#9655; device

Name of the device


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>In</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>device  <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td>path</td>
        <td>Name of the device</td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>

##### Example

```json
"omega2"
```

##### &#9655; firmwareType

Type of firmware, stable or latest


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>In</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>firmwareType  <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td>path</td>
        <td>Type of firmware, stable or latest</td>
        <td><code>stable</code>, <code>latest</code></td>
      </tr>
  </tbody>
</table>

##### Example

```json
"stable"
```







#### Responses


##### ▶ 200 - successful operation

###### Headers
_No headers specified_

###### application/json



<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>device <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>version <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>build <strong>(required)</strong></td>
        <td>
          integer
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>url <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>stable <strong>(required)</strong></td>
        <td>
          boolean
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


##### Example _(generated)_

```json
{
  "device": "omega2",
  "version": "0.3.2",
  "build": 236,
  "url": "http://repo.onioniot.com/omega2/images/omega2-v0.3.2-b236.bin",
  "stable": true
}
```

#### Tags

<div class="tags">
  <div class="tags__tag"></div>
</div>
</div>

### `POST` /
<a id="op-post" />

> Report firmware update status

Report firmware update status






#### Request body
###### application/x-www-form-urlencoded



<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>mac_addr <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>device <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>firmware_version <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>firmware_build <strong>(required)</strong></td>
        <td>
          integer
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>upgrade_status</td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


##### Example _(generated)_

```json
{
  "mac_addr": "40A36BC0F195",
  "device": "omega2p",
  "firmware_version": "0.3.2",
  "firmware_build": 235,
  "upgrade_status": "complete"
}
```




#### Responses


##### ▶ 200 - successful operation

###### Headers
_No headers specified_


#### Tags

<div class="tags">
  <div class="tags__tag"></div>
</div>
</div>

## Schemas

<a id="" />

#### firmwareInfo

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>device <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>version <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>build <strong>(required)</strong></td>
        <td>
          integer
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>url <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>stable <strong>(required)</strong></td>
        <td>
          boolean
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>

##### Example _(generated)_

```json
{
  "device": "omega2",
  "version": "0.3.2",
  "build": 236,
  "url": "http://repo.onioniot.com/omega2/images/omega2-v0.3.2-b236.bin",
  "stable": true
}
```
<a id="" />

#### updateAcknowledge

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>mac_addr <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>device <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>firmware_version <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>firmware_build <strong>(required)</strong></td>
        <td>
          integer
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>upgrade_status</td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>

##### Example _(generated)_

```json
{
  "mac_addr": "40A36BC0F195",
  "device": "omega2p",
  "firmware_version": "0.3.2",
  "firmware_build": 235,
  "upgrade_status": "complete"
}
```
