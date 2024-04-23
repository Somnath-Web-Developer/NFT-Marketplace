To start the backend please folow the necessary steps
```
npm i
```

Create an `.env` file to put the link of the database as in `.env.example` by running postgres in docker

```
npx prisma migrate dev
```


```
npx prisma generate
```

```
tsc -b
```

```
node dist/index.js
```