1.**Feather**

2.**API Example**

 **USER ROUTER **

   **url**: "/user"
 - GetAll: Get 
 - Insert: Post 
    {
        "username" : "value",
        "pass" : "value",
        "level" : "number" // 1- staff, 2- boss, 0- user
    }
- Update: Put
    {
        "username" : "value",
        "pass" : "value",
        "level" : "number" // 1- staff, 2- boss, 0- user
    }
- Remove/Restore : Delete
    {
        "username" : "value",
        "pass" : "value",
        "isdeteled" : "number" // 1- deteled, 0- restore (default)
    }

 **url**:"/user/:username"
- Show User by username : Get

 **url**:"/user/s=:username"
- Show user by search: Get

**PROFILE ROUTER**

**url**:"/profile/:username"
-  Get profile by username: Get 
 - Insert: Post 
    {
        "fullname" :"fullname",
        "avatar_pic": "avatar_pic_url",
        "masinhvien": "masinhvien",
        "background_pic": "background_pic_url"
    }
- Update: Put
    {
        "fullname" :"fullname",
        "avatar_pic": "avatar_pic_url",
        "masinhvien": "masinhvien",
        "background_pic": "background_pic_url"
    }
- Remove/Restore : Delete
    {
        "isdeteled" : "number" // 1- deteled, 0- restore (default)
    }

