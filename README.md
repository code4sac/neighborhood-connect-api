# neighborhood-connect-api

API and backend for the Neighborhood Connect project

## Table of Contents
- [Requirements](#requirements)
- [Database](#database)
  - [Schema](#schema)
  - [User](#user)
  - [User_Type](#user_type)
  - [Organization_Contact](#organization_contact)
  - [Organization_Owner](#organization_owner)
- [Endpoints](#endpoints)
  - [`/orgs/:org_id/users`](#/orgs/:org_id/users)
  - [`/orgs/:org_id/users/:user_id`](#/orgs/:org_id/users/:user_id)
  - [`/orgs/`](#/orgs/)
  - [`/orgs/:org_id/`](#/orgs/:org_id/)
  - [`/org/priorities`](#/org/priorities)
  - [`/org/:org_id/priorities`](#/org/:org_id/priorities)
  - [`/org/:org_id/priorities/:priorities_id`](#/org/:org_id/priorities/:priorities_id)

# Requirements
To get this project setup, you will need: 
* [Node.js](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/get-npm)
* [Docker](https://www.docker.com/)
* [Docker Compose](https://docs.docker.com/compose/)

# Getting Up and Running

```
cd neighborhood-connect-api
```

In a seperate command terminal window, run: 
```
docker-compose up
```
Switch back to your main terminal and run: 
```
npm install
npm run dev-db-refresh
npm start
```

# Database
## Configuration 
The database connection configuration is managed in file:
```
./server/model/config.js
```
The config file points to the local dev DB by default. 
## Local Development DB
This project uses a Docker container to host the local Postgres database. To start it up, open a command terminal and run: 
```
docker-compose up
```
You will need to install Docker and Docker Compose if you don't have them already. 
If you already have Postgres installed and running on your computer, you may need to stop it's service before spinning up the dockerized database so that the ports don't conflict
```
sudo service postgresql stop
```
Once the database is up and running, you can generate the schema and populate it with test data using the db migrations. 

## DB Migrations
The database is versioned using db-migrate. To generate the database schema and populate it, with the test data, run: 
```
npm run dev-db-refresh
```

The database connection configuration is managed in file:
```
./database.json
```
The file points to the local dev DB in Docker by default. 

## Database Schema

![Schema Table](visualization.png)

[Back to table of Contents](#table-of-contents)

# Endpoints

### Users

| Endpoint                       | METHOD | Description |
| ------------------------------ | ------ | ----------- |
| `/orgs/:org_id/users`          | POST   |             |
| `/orgs/:org_id/users/:user_id` | PATCH  |             |
| `/orgs/:org_id/users/:user_id` | GET    |             |
| `/orgs/:org_id/users/:user_id` | UPDATE |             |
| `/orgs/:org_id/users/:user_id` | DELETE |             |

### Org

| Endpoint         | METHOD | Description |
| ---------------- | ------ | ----------- |
| `/orgs/`         | GET    |             |
| `/orgs/:org_id/` | GET    |             |
| `/orgs/:org_id/` | PATCH  |             |

### Priorities

| Endpoint                                 | METHOD | Description |
| ---------------------------------------- | ------ | ----------- |
| `/org/priorities/`                       | GET    |             |
| `/org/:org_id/priorities`                | GET    |             |
| `/org/:org_id/priorities/:priorities_id` | GET    |             |

[Back to table of Contents](#table-of-contents)

# Data requests and responses

Below are all expected request body shapes and data responses

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

## `/orgs/`

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

## `/orgs/:org_id/`

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

**Method:** PATH

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

## `/orgs/priorities/`

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

/priorities/org/:org_id -- returns a list of priorities for this organization

/priorities/district/:district_id -- returns sorted list of priorities for all orgs in that district .

/priorities/type/:type_id -- returns sorted list of priorities which have this type . Can be combined with org or district forms

/priorities/org/42/type/77 -- returns sorted list of priorities for organization 42 which have type 77

actions:

CRUD for:

- priority
- priority type
- priority level
- user
- organization
- organization type
- event
