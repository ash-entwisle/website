# User Story: Maintenance

- Create new support tickets
- View Support Tickets
- Modify status on Support Tickets
- Message chain within tickets

## Frontend Features

- [ ] #61
- [ ] #62
  - [ ] #63
  - [ ] TODO: add filter specs 
- [ ] #64
- [ ] #65
- [ ] #66
- [ ] #67

## Backend API

@arenmarsden @alex8obrien add yo stuff here

## Metadata

### API Endpoints

> Gateway endpoint: `/maintenance/`

#### `POST /`

- create a new maintenance ticket, body contains maintenance obj

##### Request

###### Headers: 

- add headers here

###### Body

```json
add body here, or TODO, pleae make post bodies easy for me to implement, i dont want to make a new type def for every post
```

##### Response

###### Status:

- A list of status codes

###### Headers: 

- add headers here

###### Body

```json
TODO
```

---

#### `GET  /`

- gets info of all tickets

##### Request

###### Headers: 

- add headers here

###### Body

`n/a`

##### Response

###### Status:

- A list of status codes

###### Headers: 

- add headers here

###### Body

```json
TODO
```

---



#### `GET  /:id` 

- gets info of the ticket with the id `:id`

##### Request

###### Headers: 

- add headers here

###### Body

`n/a`

##### Response

###### Status:

- A list of status codes

###### Headers: 

- add headers here

###### Body

```json
TODO
```

---




#### `GET  /:id/staff` 

- gets the staff message tied with the ticket

##### Request

###### Headers: 

- add headers here

###### Body

`n/a`

##### Response

###### Status:

- A list of status codes

###### Headers: 

- add headers here

###### Body

```json
TODO
```

---



#### `PUT  /:id` 

- updates info of the ticket with the id `:id` 
- for use only by the ticket owner

##### Request

###### Headers: 

- add headers here

###### Body

```json
add body here, or TODO, pleae make post bodies easy for me to implement, i dont want to make a new type def for every post
```

##### Response

###### Status:

- A list of status codes

###### Headers: 

- add headers here

###### Body

```json
TODO
```

---



#### `PUT  /:id/staff` 

- updates the staff message associated with the ticket

##### Request

###### Headers: 

- add headers here

###### Body

```json
add body here, or TODO, pleae make post bodies easy for me to implement, i dont want to make a new type def for every post
```

##### Response

###### Status:

- A list of status codes

###### Headers: 

- add headers here

###### Body

```json
TODO
```

---

#### `POST /:id/status` 

- updates a tickets status

##### Request

###### Headers: 

- add headers here

###### Body

```json
add body here, or TODO, pleae make post bodies easy for me to implement, i dont want to make a new type def for every post
```

##### Response

###### Status:

- A list of status codes

###### Headers: 

- add headers here

###### Body

```json
TODO
```

---


@arenmarsden @alex8obrien add yo stuff here

