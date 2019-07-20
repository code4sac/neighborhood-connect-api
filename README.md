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
| user_type_id    | int     | FK      |
| phone           | varchar |         |
| email           | varchar |         |
| organization_id | varchar | FK      |

## user_type

| Name | Type    | Details |
| ---- | ------- | ------- |
| id   | int     | PK      |
| name | varchar |         |

## organization_contact

| Name            | Type    | Details |
| --------------- | ------- | ------- |
| id              | int     | PK      |
| user_id         | int     | FK      |
| organization_id | varchar | FK      |

## organization_owner

| Name            | Type    | Details |
| --------------- | ------- | ------- |
| id              | int     | PK      |
| user_id         | int     | FK      |
| organization_id | varchar | FK      |

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
