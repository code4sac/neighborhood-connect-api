# neighborhood-connect-api

API and backend for the Neighborhood Connect project

## Table of Contents

- [Database Tables](#database-tables)
  - [Schema](#schema)
  - [User](#user)
  - [User_Type](#user_type)
  - [Organization_Contact](#organization_contact)
  - [Organization_Owner](#organization_owner)
- [Endpoints](#endpoints)
- [Data requests and responses](#Data-requests-and-responses)

# Database Tables

## Schema

![Schema Table](visualization.png)

[Back to table of Contents](#table-of-contents)

# Endpoints

### Users

| Endpoint                                      | METHOD | Description | Completed |
| --------------------------------------------- | ------ | ----------- | :-------: |
| [`/users`](#/users)                           | GET    |             |     X     |
| [`/users/:user_id`](#/users/:user_id)         | GET    |             |           |
| [`/users/orgs/:org_id`](#/users/orgs/:org_id) | GET    |             |     X     |

### Orgs

| Endpoint                                                                               | METHOD | Description | Completed |
| -------------------------------------------------------------------------------------- | ------ | ----------- | :-------: |
| [`/orgs` ](#/orgs)                                                                     | GET    |             |     X     |
| [`/orgs/:org_id` ](#/orgs/:org_id)                                                     | GET    |             |     X     |
| [`/orgs/:org_id` ](#/orgs/:org_id)                                                     | PATCH  |             |           |
| [`/orgs/priorities` ](#/orgs/priorities)                                               | GET    |             |           |
| [`/orgs/:org_id/priorities` ](#/orgs/:org_id/priorities)                               | GET    |             |           |
| [`/orgs/:org_id/priorities/:priorities_id` ](#/orgs/:org_id/priorities/:priorities_id) | GET    |             |           |
| [`/orgs/:org_id/users`](#/orgs/:org_id/users)                                          | POST   |             |     X     |
| [`/orgs/:org_id/users/:user_id`](#/orgs/:org_id/users/:user_id)                        | PATCH  |             |           |
| [`/orgs/:org_id/users/:user_id`](#/orgs/:org_id/users/:user_id)                        | GET    |             |     X     |
| [`/orgs/:org_id/users/:user_id`](#/orgs/:org_id/users/:user_id)                        | UPDATE |             |           |
| [`/orgs/:org_id/users/:user_id`](#/orgs/:org_id/users/:user_id)                        | DELETE |             |           |

### Priorities

| Endpoint                                                                    | METHOD | Description | Completed |
| --------------------------------------------------------------------------- | ------ | ----------- | :-------: |
| [`/priorities` ](#/priorities)                                              | GET    |             |           |
| [`/priorities/type/:type_id` ](#/priorities/type/:type_id)                  | GET    |             |           |
| [`/priorities/district/:disctrict_id`](#/priorities/district/:disctrict_id) | GET    |             |           |

### Types

| Endpoint                               | METHOD | Description | Completed |
| -------------------------------------- | ------ | ----------- | :-------: |
| [`/types` ](#/types)                   | GET    |             |     X     |
| [`/types/:type_id` ](#/types/:type_id) | GET    |             |     X     |

### Events

| Endpoint                                                             | METHOD | Description | Completed |
| -------------------------------------------------------------------- | ------ | ----------- | :-------: |
| [`/events` ](#/events)                                               | GET    |             |           |
| [`/events/priorities/:priority_id` ](#/events/priority/:priority_id) | GET    |             |           |
| [`/events/types/:type_id` ](#/events/types/:types_id)                | GET    |             |           |
| [`/events/:event_id` ](#/events/:events_id)                          | GET    |             |           |

[Back to table of Contents](#table-of-contents)

# Data requests and responses

Below are all expected request body shapes and data responses

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
