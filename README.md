### Crypto-app routes:

We are building a crypto application that will allow users to track crypto coin portfolio in their accounts and to explore crypto coin market data and price trend. 

### Here are the routes provided:

#### users:
- Signup: `POST /login/signup`
- Login: `POST /login`
- Change password: `POST /login/password`(require authentication) 
- Get users: `GET /login`(require authentication and authorization) 
- Delete user: `DELETE /login/:id` (require authentication and authorization) 

#### accounts: (require  authentication)
- Create account: `POST /accounts` 
- Get user accounts: `GET /accounts` - user can get own accounts, admin can get all accounts
- Get account by id: `GET /accounts/:id` - user can get own account, admin can get any account
- Update account: `PUT /accounts/:id`
- Delete account: `delete /accounts/:id` (require authorization)

#### coins:
- Get coins: `GET /coins`
- Get coin by id: `GET /coins/:id/`
- Create coin: `POST /coins` (require authentication and authorization)
- Update coin: `PUT /coins/:id`(require authentication and authorization)
- Delete coin: `DELETE /coins/:id` (require authentication and authorization)

#### prices:
- Get price data: `GET /prices`
- Get price data by id: `GET /prices/:id/`
- Get price data by id and days: `GET /prices/trend/:id?days=`
- Create price: `POST /prices` (require authentication and authorization)
- Update price: `PUT /prices/:id` (require authentication and authorization)
- Delete price: `DELETE /prices/:id` (require authentication and authorization)