# JWT Demo

Download and import [postman_collection.json](https://github.com/yunyunfunnydays/JWT/blob/main/users-jwt-render.postman_collection.json) to test API with postman.

## Usage

Install dependencies:  
```
yarn 
```  

To run the project, use the following command:  

```
yarn start:babel  
```

## Environment Variables

```
config.env

DATABASE=  
DATABASE_PASSWORD=  
SALT=  
JWT_EXPIRES_DAY=  
JWT_SECRET=  
```
`DATABASE`: Your MongoDB URL
`DATABASE_PASSWORD`: Your MongoDB password
`SALT`: Encryption salt for bcrypt
`JWT_EXPIRES_DAY`: Expiration period for JWT (in days)
`JWT_SECRET`: Encryption salt for JWT
