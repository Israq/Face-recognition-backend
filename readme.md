
# An Artificial Intelligence Based Face Recognition App(Backend)

The this a Full Stack Artificial Intelligence based Face Recognition app. Where user user can choose any of the royalty free image from the internet and identify the human face from the image.



## What the App does

1. Register new user.
2. Set Rank of the user acording to how many times app has been used by the specific user.
3. Authenticate the user while login and regenarate the rank.
4. Upload image link from the internet(royaltyfree).
5. Identify the human face position from the image.
6. Update the rank of that user.
 

## Tech Stack

[![Build With](https://github-readme-tech-stack.vercel.app/api/cards?titleAlign=center&fontWeight=bold&lineCount=4&theme=hacker&line1=Javascript,Javascript,68f2fc;postman,postman,e15656;express,express,a82bd9;react,react,39fb21;&line2=node.js,node.js,35b3db;restful%20api,restful%20api,bffee2;Artificial%20Intelligence,Artificial%20Intelligence,bba6c9;&line3=html5,html5,eab322;Css3,Css3,fd4949;Postgresql,Postgresql,00bbfa;es6,es6,7784c9;&line4=git,git,99f90f;tachyons,tachyons,ed0e59;)](https://github-readme-tech-stack.vercel.app/api/cards?titleAlign=center&fontWeight=bold&lineCount=4&theme=hacker&line1=Javascript,Javascript,68f2fc;postman,postman,e15656;express,express,a82bd9;react,react,39fb21;&line2=node.js,node.js,35b3db;restful%20api,restful%20api,bffee2;Artificial%20Intelligence,Artificial%20Intelligence,bba6c9;&line3=html5,html5,eab322;Css3,Css3,fd4949;Postgresql,Postgresql,00bbfa;es6,es6,7784c9;&line4=git,git,99f90f;tachyons,tachyons,ed0e59;)


## Run Locally

Clone and Run the Front-end project first

https://github.com/Israq/Face-recontion-front-end

Clone the project(Backe-end)

```bash
  git clone https://github.com/Israq/Face-recognition-backend.git
```

Go to the project directory

```bash
  cd Face-recognition-backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Get Your Clarifai(face-recognition) API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. DATABASE_URL(POSTGRESQL) |




# How to use the App

Step 1: Go to https://face-recognition-frontend-cio2.onrender.com/


Step 2: Register if you are using it for the first time.

Step 3: Choose any royalfree image link from the internet example:https://images.unsplash.com/photo-1582233479366-6d38bc390a08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60

Step 4: Paste it to the link box.

Step 5: Click Detect

First the rank will show 0. After using the App the rank will update.







## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://katherineoelsner.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)



## Authors

- [@Israq](https://github.com/Israq)

