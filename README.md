# Setup instructions

1. install dependencies

```
npm install
```

2. generate prisma migrations

```
npx prisma migrate dev
```

3.  Start the server

```
npm run dev
```

Env variables

```
DATABASE_URL=<postgres url>
JWT_SECRET=<any random string>
SOCKET_URL="ws://localhost:<port where chat-app-socket is running (needs to be 8000) >"
```

DB Schema <br/>
<image src="./assets/schema.png" height="400px"/>

<image src="./assets/demo.png">
