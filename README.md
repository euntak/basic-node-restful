# basic-node-restful


[example url] http://localhost:8000/api/users

### TEST

[POSTMAN](http://www.getpostman.com/)

GET , PUT , DELETE [ x-www-form-urlencoded ]

POST [ x-www-form-urlencoded , form-data ]

### GET 

GET를 통해 해당 리소스를 조회 합니다. 리소스를 조회하고 해당 도큐먼트에 대한 자세한 정보를 가져온다.

#### RETURN VALUE

```json 
{
  "message": "/users GET method",
  "body": {
    ...
  }
}
```

### POST

POST를 통해 해당 URI를 요청하면 리소스를 생성합니다.
[multer](https://www.npmjs.com/package/multer) module을 통해서 form-data(파일 포함)까지 받을 수 있다. 

#### RETURN VALUE

```json 
{
  "message": "/users POST method",
  "body": {
    ...
  }
}
```

### PUT 

PUT를 통해 해당 리소스를 수정 합니다.

#### RETURN VALUE

```json 
{
  "message": "/users PUT method",
  "body": {
    ...
  }
}
```

### DELETE 

DELETE를 통해 리소스를 삭제합니다.

#### RETURN VALUE

```json 
{
  "message": "/users DELETE method",
  "body": {
    ...
  }
}
```




