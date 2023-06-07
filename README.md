## Pivott-roots

## Deployed Link -> https://64802ab72c724d38cb92603c--chipper-pie-213ebc.netlify.app/

## Video Link -> https://drive.google.com/file/d/1I88THYJzTQkW1RxTUmV0ZLnKE9ax9YbS/view?usp=sharing

Note:- Please go through the above video for better understanding of my work for This assignmrnt.

- In this I am making three modules 
- Users module
- Items module
- Order module
- Auth Guard middleware 
   
  
  ---------------------------
  
  1) Users module -> In this module I provide three field
   - username 
   - role
   - password


   2) Items module -> In this module I provide one field
   - Item 

-> Making for general checking purposes.



  3) Order module -> In this module I provide one field
   - order 


-> Making for general checking purposes.


---

# Api 

- Based on the fileld i make api 

- > `api/auth/login` --> I am making this api for login user by the role.
- After login it fenerate token I am using Jwt for generating token and pass username and role in the token and seceret key as well 

--> `authenticateToken`-> This is the middleware i am making for role based access of the route.

- `api/users` --> I am making this api for users crud it is also protected by Middleware authenticateToken middleware. This api end point have only admin access .


- `api/orders` --> I making this api for `accounts` this api end point have also crud opration and this route have access for Admin and accounts role.

- `api/items` --> I making this api for `customer_executive` this api end point have also crud opration and this route have access for Admin and customer_executive role.



### Front-end

- for the front-end I am  usinng React,redux and Chakra-Ui 

-In the front-end I make Login,Dasshboard and updatePage of the indivisul users,orders and items

- in the login page i provide Three diifferent button for quick access 1. Admin 2. accounts 3.customer_executive

- All routes is Protected without login user can not redirect to any of the page 

` when user is  login tokem is generated and set to the local Storage and and user redirect to the Dashboard 
page in the dashboard page there is three section users details, orderDetails and items details  and based on the token i verify the user if the user is Admin then then have 
full Access they can check all of gthe data and perform crud opration and if the user is not Admin so then can not the see the others data they can see only his/her data abd perform the crud opration`
   
   ## Here i am attactching some Images of the website.
   
   - LOGIN
   
   - ![Login](https://github.com/sks-7/nyx_assignment/assets/103938210/57b99441-8c56-42cc-b9c0-28f9ddbeafa5)
   

   -DashBoardPage
   
   
   ![Dashboard](https://github.com/sks-7/nyx_assignment/assets/103938210/2448e4f5-ade0-4447-8d62-6ebf72bcfa3f)


-UpdatePage

![UpdatePage](https://github.com/sks-7/nyx_assignment/assets/103938210/820eefa9-6425-414e-83fd-bee979e9fa3d)

-AddPage

![AddPage](https://github.com/sks-7/nyx_assignment/assets/103938210/339bbc02-f2a0-4db1-b6ab-4649d7440fcc)


