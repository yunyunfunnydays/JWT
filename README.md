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
DATABASE： your mongoDB url  
DATABASE_PASSWORD： your mongoDB PASSWORD  
SALT： encryption salt for bcrypt  
JWT_EXPIRES_DAY： expires day for JWT  
JWT_SECRET： encryption salt for JWT  
