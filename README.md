# MiRent

## POSTMAN API
### USER
1. http://localhost:8000/api/register
   {
      "email"    : ----,
      "username" : ----, 
      "password" : ----,
   }
2. http://localhost:8000/api/login
   {
      "email"    : ----,
      "password" : ----
   }
   returns a token
3. http://localhost:8000/api/delete
   header: token


### 08/09

1. Work on backend API routes

   - [x] Login/Register (USER)
   - [ ] GET/POST/DELETE (ITEMS) 

2. Front-end:
   - Set up React + Redux

