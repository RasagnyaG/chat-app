# Deployed link

<a href='https://chat-app-c4wu-62oxrxsv9-rasagnyas-projects.vercel.app/' target=_blank>https://chat-app-c4wu-62oxrxsv9-rasagnyas-projects.vercel.app/</a>

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
