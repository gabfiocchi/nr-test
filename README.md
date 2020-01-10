# New Relic Apdex Board - Code challenge



# Endpoints
### `GET` - /api/all
Returns the data JSON.

``` bash
curl --request GET 'http://localhost:8100/api/all'
```

---

### `GET` - /api/hosts
Returns the Hosts with your corresponding Apps.

``` bash
curl --request GET 'http://localhost:8100/api/hosts'
```

### `GET` - /api/hosts/:host
Returns the Host detail with your corresponding Apps.

``` bash
curl --request GET 'http://localhost:8100/api/hosts/7e6272f7-098e.dakota.biz'
```

### `GET` /api/hosts/remove/:appId
Remove from the response the app with this AppId of all hostst

``` bash
curl --request GET 'http://localhost:8100/api/hosts/remove/umr3gmuwvrl'
```

---

### `GET` - /api/apps/
Returns the Apps Id's with the references of the Host to which it belongs.

``` bash
curl --request GET 'http://localhost:8100/api/apps'
```

### `POST` - /api/apps/
Add an application to one or more hosts.

| Fields | Type | Comments |
| - | - | - |
| `name` | `String` | Required |
| `contributors` | `Array` | Default: `[]` |
| `version` | `Number` | Default: 1 |
| `apdex` | `Number` | Default: 1 |
| `host` | `String | Array` | Required |

``` bash
curl --request POST 'http://localhost:8100/api/apps' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Dummy - Boyer, and Sons",
    "contributors": [
        "Edwin Reinger",
        "Ofelia Dickens",
        "Maurine McDermott Sr."
    ],
    "version": 7,
    "apdex": 100,
    "host": [
        "7e6272f7-098e.dakota.biz",
        "e7bf58af-f0be.dallas.biz"
    ]
}'
```