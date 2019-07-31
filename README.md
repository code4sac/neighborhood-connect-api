# neighborhood-connect-api

API and backend for the Neighborhood Connect project

## Table of Contents

- [Getting Started](#getting-started)
- [Database Tables](#database-tables)
  - [Schema](#schema)
- [API Endpoints](#api-endpoints)
  - [Priorities](#priorities)
  - [Priority Types](#priority-types)
  - [Events](#events)
  - [Organizations](#organizations)
  - [Users](#users)
- [Data requests and responses](#data-requests-and-responses)
- [Notes](#notes)

# Getting Started

- Run `npm i` from the command line
- copy the file at /server/model/config.example.js -> config.js and fill in the password and host information
- Run `npm start`

# Database Tables

### Schema

![Schema Table](visualization.png)

[Back to table of Contents](#table-of-contents)

# API Endpoints

## Priorities

| Endpoint                                          | METHOD | Description                | Completed |
|:-|:-|:-|:-|
| [`/priorities`]()                                 | GET    | All priorities             |     X     |
| [`/priorities`]()                                 | POST   | Add new priority           |           |
| [`/priorities`]()                                 | PATCH  | Update priority            |           |
| [`/priorities/:priority_id`]()                    | GET    | Single priority            |           |
| [`/priorities/:priority_id/actions`]()            | GET    | All actions for a priority |     X     |
| [`/priorities/orgs/:org_id`]()                    | GET    | All priorities by org      |     X     |
| [`/priorities/orgs/:org_id/:dist_id`]()           | GET    | Single priorities by org   |     X     |
| [`/priorities/types/:type_id`]()                  | GET    | All priorities by type     |           |
| [`/priorities/dist/:district_id`]()               | GET    | All priorities by district |           |

### Priority Types

| Endpoint                               | METHOD | Description | Completed |
|:-|:-|:-|:-|
| [`/types` ](#/types)                   | GET    |             |     X     |
| [`/types/:type_id` ](#/types/:type_id) | GET    |             |     X     |

### Actions
NEEDS REVIEW FOR NAMING
| Endpoint                                                             | METHOD | Description | Completed |
|:-|:-|:-|:-|
| [`/actions` ](#/actions)                                               | GET    |             |     X     |
| [`/actions` ](#/actions)                                               | POST   |             |     X     |
| [`/actions/priorities/:priority_id` ](#/actions/priority/:priority_id) | GET    |             |     X     |
| [`/actions/types/:type_id` ](#/actions/types/:types_id)                | GET    |             |     X     |
| [`/actions/:event_id` ](#/actions/:events_id)                          | GET    |             |     X     |

### Organizations

| Endpoint                                                                               | METHOD | Description | Completed |
|:-|:-|:-|:-|
| [`/orgs`](#/orgs)                                                                      | GET    |             |     X     |
| [`/orgs`](#/orgs)                                                                      | POST   |             |     X     |
| [`/orgs`](#/orgs)                                                                      | PATCH  |             |           |
| [`/orgs/:org_id`](#/orgs/:org_id)                                                      | GET    |             |     X     |
| [`/orgs/:org_id/users`](#/orgs/:org_id/users)                                          | GET    |             |     X     |
| [`/orgs/:org_id/users/:user_id`](#/orgs/:org_id/users/:user_id)                        | GET    |             |     X     |
| [`/orgs/:org_id/priorities`](#/orgs/:org_id/priorities)                                | GET    |             |           |
| [`/orgs/:org_id/priorities/:priorities_id`](#/orgs/:org_id/priorities/:priorities_id)  | GET    |             |           |

### [Users](#users-reponses)

| Endpoint                                      | METHOD | Description | Completed |
|:-|:-|:-|:-|
| [`/users`](#/users)                           | GET    |             |     X     |
| [`/users`](#/users)                           | POST   |             |           |
| [`/users/:user_id`](#/users)                  | PATCH  |             |           |
| [`/users/:user_id`](#/users/:user_id)         | GET    |             |     X     |
| [`/users/orgs/:org_id`](#/users/orgs/:org_id) | GET    |             |     X     |

[Back to table of Contents](#table-of-contents)

# Data requests and responses

## Users Responses

## `/users`

**Method:** GET

Structure of request

```
{

}
```

**HTTP Status:**

Structure of response:

```
{

}
```

[Back to table of Contents](#table-of-contents)

## `/users/:user_id`

**Method:** GET

Structure of request

```
{

}
```

**HTTP Status:**

Structure of response:

```
{

}
```

[Back to table of Contents](#table-of-contents)

## `/users/orgs/:org_id`

**Method:** GET

Structure of request

```
{

}
```

**HTTP Status:**

Structure of response:

```
{

}
```

[Back to table of Contents](#table-of-contents)

## `/orgs`

**Method:** GET

Structure of request

```
{

}
```

**HTTP Status:**

Structure of response:

```
{

}
```

[Back to table of Contents](#table-of-contents)

## `/orgs/:org_id`

**Method:** GET

Structure of request

```
{

}
```

**HTTP Status:**

Structure of response:

```
{

}
```

---

**Method:** PATCH

Structure of request

```
{

}
```

**HTTP Status:**

Structure of response:

```
{

}
```

[Back to table of Contents](#table-of-contents)

## `/orgs/priorities`

**Method:** GET

Structure of request

```
{

}
```

**HTTP Status:**

Structure of response:

```
{

}
```

[Back to table of Contents](#table-of-contents)

## `/orgs/:org_id/priorities`

**Method:** GET

Structure of request

```
{

}
```

**HTTP Status:**

Structure of response:

```
{

}
```

[Back to table of Contents](#table-of-contents)

## `/orgs/:org_id/priorities/:priorities_id`

**Method:** GET

Structure of request

```
{

}
```

**HTTP Status:**

Structure of response:

```
{

}
```

[Back to table of Contents](#table-of-contents)

## `/orgs/:org_id/users`

**Method:** POST

Structure of request

```
{

}
```

**HTTP Status:**

Structure of response:

```
{

}
```

[Back to table of Contents](#table-of-contents)

## `/orgs/:org_id/users/:user_id`

**Method:** PATCH

Structure of request

```
{

}
```

**HTTP Status:**

Structure of response:

```
{

}
```

---

**Method:** GET

Structure of request

```
{

}
```

**HTTP Status:**

Structure of response:

```
{

}
```

---

**Method:** UPDATE

Structure of request

```
{

}
```

**HTTP Status:**

Structure of response:

```
{

}
```

---

**Method:** DELETE

Structure of request

```
{

}
```

**HTTP Status:**

Structure of response:

```
{

}
```

[Back to table of Contents](#table-of-contents)

## `/priorities`

**Method:** GET

Structure of request

```
{

}
```

**HTTP Status:**

Structure of response:

```
{

}
```

[Back to table of Contents](#table-of-contents)

## `/priorities/type/:type_id`

**Method:** GET

Structure of request

```
{

}
```

**HTTP Status:**

Structure of response:

```
{

}
```

[Back to table of Contents](#table-of-contents)

## `/priorities/district/:disctrict_id`

**Method:** GET

Structure of request

```
{

}
```

**HTTP Status:**

Structure of response:

```
{

}
```

[Back to table of Contents](#table-of-contents)

## `/types`

**Method:** GET

Structure of request

```
{

}
```

**HTTP Status:**

Structure of response:

```
{

}
```

[Back to table of Contents](#table-of-contents)

## `/types/:type_id`

**Method:** GET

Structure of request

```
{

}
```

**HTTP Status:**

Structure of response:

```
{

}
```

[Back to table of Contents](#table-of-contents)

## `/events`

**Method:** GET

Structure of request

```
{

}
```

**HTTP Status:**

Structure of response:

```
{

}
```

[Back to table of Contents](#table-of-contents)

## `/events/priorities/:priority_id`

**Method:** GET

Structure of request

```
{

}
```

**HTTP Status:**

Structure of response:

```
{

}
```

[Back to table of Contents](#table-of-contents)

## `/events/types/:type_id`

**Method:** GET

Structure of request

```
{

}
```

**HTTP Status:**

Structure of response:

```
{

}
```

[Back to table of Contents](#table-of-contents)

## `/events/:event_id`

**Method:** GET

Structure of request

```
{

}
```

**HTTP Status:**

Structure of response:

```
{

}
```

[Back to table of Contents](#table-of-contents)

actions:

CRUD for:

- priority
- priority type
- priority level
- user
- organization
- organization type
- event

# Notes
## Outstanding Design Questions
- Should all requests but GET be directed to the path for that entity?
ex: all non-Get requests regarding users is directed to users
