# User

This is the user service, which holds information about user accounts.

## Endpoints

### `/health`

This is the health endpoint, which is required to be present for Kubernetes liveliness.
If this endpoint fails to respond the pod will be killed and re-created.

|               |           |
| ------------- | --------- |
| Path          | `/health` |
| Auth Required | Yes       |
| Permission    | _none_    |

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
