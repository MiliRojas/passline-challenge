# API Tests

- Case 1: 
GET /api/books
Should be get the list of books
Status 200

- Case 2: 
GET /api/books/invalidId
Should be get error
Status 404

- Case 3: 
POST /login
valid user 
Should be get token
Status 200
(Login tests assume an existing user by readme in the database)

## Why these endpoints?
I chose these endpoints because authentication is a critical component of the system, the catalog is a central part of the business logic, and validation errors help prevent regressions.

## Risks
- The catalog endpoint remains functional
- The system properly handles invalid requests  
- Blocked users