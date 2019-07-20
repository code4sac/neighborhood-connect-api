# neighborhood-connect-api

API and backend for the Neighborhood Connect project

## Table of Contents

- [Database Tables](#database-tables)
  - [Schema](#schema)
  - [Roles](#roles)
- [Endpoints](#endpoints)
  - [All endpoints](#all-endpoints)
  - [`/api/auth`](#apiauth)

# Database Tables

## Schema

![Schema Table](visualization.png)

## User

| Name            | Type    | Details |
| --------------- | ------- | ------- |
| id              | int     | PK      |
| password        | int     |         |
| first_name      | varchar |         |
| last_name       | varchar |         |
| user_type_id    | int     |         |
| phone           | varchar |         |
| email           | varchar |         |
| organization_id | varchar |         |

[Back to table of Contents](#table-of-contents)

# Endpoints

## All endpoints

| Endpoint    | METHOD | Description                                              |
| ----------- | ------ | -------------------------------------------------------- |
| `/api/auth` | POST   | Adds user to db (if they don't exist), returns user info |

Users
| `/org/users` POST
| `/org/users/:user_id` c
| `/org/users/:user_id` r
| `/org/users/:user_id` u
| `/org/users/:user_id` d

`org/:org_id/prefixroute`

Org
`org/:org_id` get
`/org/` get
`/orgs/:org_id` push

Priorities
`/org/priorities/` Get all priorities
`/org/:org_id/priorities` R
`/org/:org_id/priorities/:priority_id` R

# Data requests and responses

Below are all expected request body shapes and data responses

## `/api/auth`

**Method:** POST

Structure of request object (if registering for first time):

```
{
    email: "example@email.com" // required
    name: "John Doe" // required
}
```

**HTTP Status:** 201 Created

Structure of response:

```
{
    message: "Account created successfully",
    newUser
}
```

[Back to table of Contents](#table-of-contents)

      /priorities/org/:org_id       -- returns a list of priorities for this organization
      /priorities/district/:district_id    -- returns sorted list of priorities for all orgs in that district .
      /priorities/type/:type_id  -- returns sorted list of priorities which have this type .  Can be combined with org or district forms
      /priorities/org/42/type/77  -- returns sorted list of priorities for organization 42 which have type 77
