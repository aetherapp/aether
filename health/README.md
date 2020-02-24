# Health

This package is an simple service to indicate the aliveness of the servers
It has a single `/health` endpoint.

This service can be used to build other services from.

## Endpoints

### `/healthz`

This is the health endpoint,
which is required to be present for Kubernetes liveliness. If this endpoint fails to respond the pod will be killed and re-created.

|               |            |
| ------------- | ---------- |
| Path          | `/healthz` |
| Auth Required | Yes        |
| Permission    | _none_     |

#### Request

| URL Params |     |
| ---------- | --- |
| -          | -   |

| Query Strings |     |
| ------------- | --- |
| -             | -   |

| Body Data |     |
| --------- | --- |
| -         | -   |

#### Response

##### OK

This is the expected and only response for this route.

```json
{
	"state": "ok"
}
```
