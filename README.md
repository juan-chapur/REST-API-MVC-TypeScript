# REST API TypeScript

## Run Locally
Clone the project
```bash
  git clone https://github.com/juan-chapur/REST-API-DDD-TypeScript.git
```
Go to the project directory
```bash
  cd REST-API-DDD-TypeScript.git
```
Install dependencies
```bash
  npm install
```
Start the server
```bash
  npm run dev
```

# REST API
# Register User
**URL**: `/auth/register`
**Method**: `POST`
**Auth Required**: None
**Permissions Required**: None
## Body
- **email** `string` *required*
- **password** `string` *required*
- **name** `string` *required*
### Body Example
```json
{
  "email": "juan@juan.com",
  "password": "1234",
  "name": "juan"
}
```

## Response

- **name** `string`
- **description** `string`
- **email** `string`
- **password** `string`
- **_id** `string`
- **createdAt** `string`
- **updatedAt** `string`
### Response Example
```json
{
    "name": "juan",
    "description": "Please write a description",
    "email": "juan@juan.com",
    "password": "$2b$08$WUC6.VMT1yBXX5IxjqCI2ebwuhegsrjJkXxPN8fiPJQnMiAllPPL2",
    "_id": "6340caa7ddd49bb35f3ff9a0",
    "createdAt": "2022-10-08T00:56:07.607Z",
    "updatedAt": "2022-10-08T00:56:07.607Z"
}
```

# Login User
**URL**: `/auth/login`
**Method**: `POST`
**Auth Required**: None
**Permissions Required**: None
## Body
- **email** `string` *required*
- **password** `string` *required*
### Body Example
```json
{
  "email": "juan@juan.com",
  "password": "1234"
}
```

## Response
- **token** `string`
- **existUser** `string`
	- **_id** `string`
	- **name** `string`
	- **description** `string`
	- **email** `string`
	- **password** `string`
	- **createdAt** `string`
	- **updatedAt** `string`
### Response Example
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Imp1YW5AanVhbi5jb20iLCJpYXQiOjE2NjUxOTA3NzEsImV4cCI6MTY2NTE5Nzk3MX0.LtXGmYVv7ImB1DmBhbtFmj7KlSa7rsCAstBUWqwTGGc",
    "existUser": {
        "_id": "6340caa7ddd49bb35f3ff9a0",
        "name": "juan",
        "description": "Please write a description",
        "email": "juan@juan.com",
        "password": "$2b$08$WUC6.VMT1yBXX5IxjqCI2ebwuhegsrjJkXxPN8fiPJQnMiAllPPL2",
        "createdAt": "2022-10-08T00:56:07.607Z",
        "updatedAt": "2022-10-08T00:56:07.607Z"
    }
}
```
# Get all items
**URL**: `/item`
**Method**: `GET`
**Auth Required**: Yes (Session token)
**Permissions Required**: None

## Response
- **data** `Array[item Object]`
	- **_id** `string`
	- **name** `string`
	- **color** `string`
	- **gas** `string`
	- **year** `number`
	- **description** `string`
	- **price** `number`
	- **createdAt** `string`
	- **updatedAt** `string`
	- **user** `object`
- **user** `Object`
	- **id** `string`
	- **iat** `string`
	- **exp** `string`
### Response Example
```json
{
    "data": [
        {
            "_id": "631ac7113e5199a1fe6d063e",
            "name": "nombre 2",
            "color": "rojo",
            "gas": "gasoline",
            "year": 2022,
            "description": "descripcion1",
            "price": 4000,
            "createdAt": "2022-09-09T04:54:41.955Z",
            "updatedAt": "2022-09-09T04:54:41.955Z"
        },
        {
            "_id": "631ac7143e5199a1fe6d0640",
            "name": "nombre 3",
            "color": "rojo",
            "gas": "gasoline",
            "year": 2022,
            "description": "descripcion1",
            "price": 4000,
            "createdAt": "2022-09-09T04:54:44.502Z",
            "updatedAt": "2022-09-09T04:54:44.502Z"
        }
    ],
    "user": {
        "id": "juan@juan.com",
        "iat": 1665190771,
        "exp": 1665197971
    }
}
```

# Get item
**URL**: `/item/:id`
**Method**: `GET`
**Auth Required**: None
**Permissions Required**: None

## URL Params
- **id** `number` *required*

## Response
- **_id** `string`
- **name** `string`
- **color** `string`
- **gas** `string`
- **year** `number`
- **description** `string`
- **price** `number`
- **createdAt** `string`
- **updatedAt** `string`

### Response Example
```json
{
    "_id": "631ac7113e5199a1fe6d063e",
    "name": "nombre 2",
    "color": "rojo",
    "gas": "gasoline",
    "year": 2022,
    "description": "descripcion1",
    "price": 4000,
    "createdAt": "2022-09-09T04:54:41.955Z",
    "updatedAt": "2022-09-09T04:54:41.955Z"
}
```

# Create item
**URL**: `/item`
**Method**: `POST`
**Auth Required**: None
**Permissions Required**: None
## Body
- **name** `string` *required*
- **color** `string` *required*
- **gas** `string` *required*
- **year** `number` *required*
- **description** `string` *required*
- **price** `number` *required*
### Body Example
```json
{
	"name":"Golf",
	"color":"gris",
	"gas":"gasoline",
	"year":2022,
	"description":"Ejemplo de descripcion",
	"price":1500
}
```

## Response

- **name** `string` *required*
- **color** `string` *required*
- **gas** `string` *required*
- **year** `number` *required*
- **description** `string` *required*
- **price** `number` *required*
- **_id** `string` *required*
- **createdAt** `string` *required*
- **updatedAt** `string` *required*
### Response Example
```json
{
    "name": "Golf",
    "color": "gris",
    "gas": "gasoline",
    "year": 2022,
    "description": "Ejemplo de descripcion",
    "price": 1500,
    "_id": "6340d916ddd49bb35f3ff9a7",
    "createdAt": "2022-10-08T01:57:42.949Z",
    "updatedAt": "2022-10-08T01:57:42.949Z"
}
```

# Update item
**URL**: `/item/:id`
**Method**: `PUT`
**Auth Required**: None
**Permissions Required**: None
## Body
- **name** `string` *required*
- **color** `string` *required*
- **gas** `string` *required*
- **year** `number` *required*
- **description** `string` *required*
- **price** `number` *required*
### Body Example
```json
{
	"name":"Golf",
	"color":"Gris",
	"gas":"gasoline",
	"year":2022,
	"description":"Ejemplo de descripcion",
	"price":1500
}
```

## Response
- **name** `string` *required*
- **color** `string` *required*
- **gas** `string` *required*
- **year** `number` *required*
- **description** `string` *required*
- **price** `number` *required*
- **_id** `string` *required*
- **createdAt** `string` *required*
- **updatedAt** `string` *required*
### Response Example
```json
{
    "_id": "6340d916ddd49bb35f3ff9a7",
    "name": "Golf",
    "color": "Gris",
    "gas": "gasoline",
    "year": 2022,
    "description": "Ejemplo de descripcion",
    "price": 1500,
    "createdAt": "2022-10-08T01:57:42.949Z",
    "updatedAt": "2022-10-08T02:01:57.346Z"
}
```

# Delete item
**URL**: `/item/:id`
**Method**: `DELETE`
**Auth Required**: None
**Permissions Required**: None

## URL Params
- **id** `number` *required*

## Response
- **name** `string` *required*
- **color** `string` *required*
- **gas** `string` *required*
- **year** `number` *required*
- **description** `string` *required*
- **price** `number` *required*
- **_id** `string` *required*
- **createdAt** `string` *required*
- **updatedAt** `string` *required*
### Response Example
```json
{
    "_id": "6340d916ddd49bb35f3ff9a7",
    "name": "Golf",
    "color": "Gris",
    "gas": "gasoline",
    "year": 2022,
    "description": "Ejemplo de descripcion",
    "price": 1500,
    "createdAt": "2022-10-08T01:57:42.949Z",
    "updatedAt": "2022-10-08T02:01:57.346Z"
}
```

# Upload file
**URL**: `/storage`
**Method**: `POST`
**Auth Required**: Yes (Session token)
**Permissions Required**: None
## Body
- **file** `file` *required*
### Body Example
```
{
	"myfile":file
}
```

## Response

- **name** `string` *required*
- **color** `string` *required*
- **gas** `string` *required*
- **year** `number` *required*
- **description** `string` *required*
- **price** `number` *required*
- **_id** `string` *required*
- **createdAt** `string` *required*
- **updatedAt** `string` *required*
### Response Example
```json
{
    "fileName": "image-1665195282117.jpg",
    "idUser": "juan@juan.com",
    "path": ".....\\REST-API-MVC-TypeScript\\storage\\image-1665195282117.jpg",
    "_id": "6340dd12ddd49bb35f3ff9ae",
    "createdAt": "2022-10-08T02:14:42.140Z",
    "updatedAt": "2022-10-08T02:14:42.140Z"
}
```