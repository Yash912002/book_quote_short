<h1>Book Quote Shorts</h1>

A short-form content web app that displays inspiring quotes from books — like “reels” or “shorts” for book lovers.

<h2>Core Features:</h2>

Display short quotes or snippets from books.

Navigate through quotes via click/tap.

Shows quote text, author, and book title.

<h2>Tech Stack</h2>

1. <b>Frontend: </b> Next.js (App Router), React, Tailwind CSS, TypeScript

2. <b>Backend: </b> Node.js, Express, TypeScript

3. <b>Database: </b> MongoDB, Mongoose


<h2> Frontend Folder structure </h2>

```
web/
├─ src/
│  ├─ app/
│  │  ├─ components/
│  │  │  ├─ globals.css
│  │  │  ├─ layout.tsx
│  │  │  └─ page.tsx
│  │
│  ├─ data/
│  │  └─ quotes.json
│  │
│  ├─ lib/
│  │  └─ api.ts
│  │
│  └─ types/
│     └─ quote.ts
│
├─ .eslintrc.json
├─ .gitignore
├─ next-env.d.ts
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
└─ README.md
```

<h2> Backend Folder structure </h2>

```
backend/
├─ src/
│  ├─ config/
│  │  └─ db.ts
│  ├─ controllers/
│  │  └─ quote.controller.ts
│  ├─ data/
│  │  └─ quotes.json
│  ├─ models/
│  │  └─ quote.model.ts
│  ├─ routes/
│  │  └─ quote.routes.ts
│  ├─ seed.ts
│  └─ server.ts
├─ package.json
├─ package-lock.json
└─ tsconfig.json
```

<h2> Getting Started </h2>

1. Clone the repo

``` bash
git clone https://github.com/Yash912002/book_quote_short.git
cd book-quote-short
```

2. Install dependencies ( frontend )
   
``` bash
cd web
npm install
```

3. Install dependencies ( backend )

``` bash
cd server
npm install
```

4. Seed the database
   
``` bash
npm run seed
```

5. Run the backend ( on localhost 5000 )
   
``` bash
npm run dev
```

6. Run the frontend

``` bash
npm run dev
```
   
7. Open http://localhost:3000 to view the app.


<h2> Endpoints </h2>

GET http://localhost:5000/api/quotes

