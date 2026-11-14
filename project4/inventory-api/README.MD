# Inventory API

A REST API for managing inventory items.

## Run locally

From the `inventory-api` directory, start the server:

```bash
npm run dev
```

The default base URL is `http://localhost:3000`. Set the `PORT` environment
variable to use a different port.

Each item has an `id`, `name`, `description`, and `quantity`. The database
generates the `id`.

## Endpoints

### `GET /items`

Returns all items.

**Example request**

```http
GET http://localhost:3000/items
```

**Response — `200 OK`**

```json
[
  {
    "id": 1,
    "name": "Keyboard",
    "description": "USB keyboard",
    "quantity": 10
  },
  {
    "id": 2,
    "name": "Mouse",
    "description": "Wireless mouse",
    "quantity": 5
  }
]
```

If there are no items, the response is an empty array: `[]`.

### `GET /items/:id`

Returns the item with the specified ID.

**Example request**

```http
GET http://localhost:3000/items/1
```

**Response — `200 OK`**

```json
{
  "id": 1,
  "name": "Keyboard",
  "description": "USB keyboard",
  "quantity": 10
}
```

### `POST /items`

Creates an item. Send a JSON object with all three required fields:
`name`, `description`, and `quantity`.

**Example request**

```http
POST http://localhost:3000/items
Content-Type: application/json
```

```json
{
  "name": "Keyboard",
  "description": "USB keyboard",
  "quantity": 10
}
```

**Response — `201 Created`**

Returns an array containing the created item:

```json
[
  {
    "id": 1,
    "name": "Keyboard",
    "description": "USB keyboard",
    "quantity": 10
  }
]
```

If the body is not a JSON object or a required field is missing, the response
is `400 Bad Request`. For example:

```json
{
  "error": "Missing required fields: name, description, quantity"
}
```

### `PUT /items/:id`

Updates the item with the specified ID. Send the item fields as JSON.

**Example request**

```http
PUT http://localhost:3000/items/1
Content-Type: application/json
```

```json
{
  "name": "Keyboard",
  "description": "Mechanical keyboard",
  "quantity": 8
}
```

**Response — `200 OK`**

Returns an array containing the updated item:

```json
[
  {
    "id": 1,
    "name": "Keyboard",
    "description": "Mechanical keyboard",
    "quantity": 8
  }
]
```

### `DELETE /items/:id`

Deletes the item with the specified ID.

**Example request**

```http
DELETE http://localhost:3000/items/1
```

**Response — `200 OK`**

```json
{
  "message": "Item deleted successfully"
}
```