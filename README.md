# U-Wheel
Uninventing the wheel of database


## Overview
**uw-db** wraps database creation for popular database engines and delegates the interaction to those engines.

## Database Engines supported and dependencies
* SQL Server -> uw-db-sqlserver
* PostgreSql -> uw-db-postgressql
* SQLite -> uw-db-sqlite

## Install
```bash
npm install uw-db --save
```

## Config
The ```config.json``` sets the necessary data for each engine:
```javascript
database {
  ip: localhost, // unused on sqlite
  user: 'root', // unused on sqlite
  password: 'root', // unused on sqlite
  dbname: 'my_db', // a path on sqlite, or ':memory:'
  type: 'pg' // pg (default) | sqlserver | sqlite
}
```
This file is located on ```.../config/uw``` by definition

**uw-db** does not strictly downloads the module for the supported engines, developers must add those thar are going to be used