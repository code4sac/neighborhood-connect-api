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
