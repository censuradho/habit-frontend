<img src="https://user-images.githubusercontent.com/49209628/213193780-79db24a9-0e93-43bc-862a-0f1d63a1379e.png" width="600px"  alt="banner" />


# Habits

<p>
<img src="https://img.shields.io/github/last-commit/censuradho/dashboard-frontend?style=for-the-badge"/>&nbsp;&nbsp;&nbsp;
<img src="https://img.shields.io/github/repo-size/censuradho/dashboard-frontend?style=for-the-badge"/>&nbsp;&nbsp;&nbsp;
<img src="https://img.shields.io/github/languages/count/censuradho/dashboard-frontend?style=for-the-badge"/>
</p>


## Overview

Habits is an application for you to register new habits and monitor the frequency with which you complete them in a time graph. It is a project developed during @Rocketseat's NWL Setup week that took place from 01/16/2023 to 01/22/2023.

In the original project the [Frontend](https://github.com/rocketseat-education/nlw-setup-ignite/tree/main/web) was made in React + Vite + Tailwind and the [Backend](https://github.com/rocketseat-education/nlw-setup-ignite/tree/main/server) in Node.js with Fastify + Prisma. I took the liberty of replacing some technologies, in the Front I replaced Vite with Next.js and Tailwind with Stitches.js, in the Backend I replaced Fastify with Nest.

## Util links

- [Figma UI](https://www.figma.com/community/file/1195326661124171197)
- [original application repository](https://github.com/rocketseat-education/nlw-setup-ignite)

## Sumary

- [Getting start](#getting-start)
- [Environment Variables](#environment-variables)


## Getting start
## How to Setup

first clone or download the repositories backend/frontend

**frontend**:
```
git clone https://github.com/censuradho/habit-frontend.git
```

**backend**: follow the getting start in the [repository](https://github.com/censuradho/habit-backend)

```
git clone https://github.com/censuradho/habit-backend.git
```


After that you can install the dependencies by executing the following command in the root folder of the project

```
npm install
```

or with yarn

```
yarn
```

Run the following script to start the aplicattion on development mode with a watcher for file changes

```
npm run dev
```

or with yarn

```
yarn dev
```

## Environment Variables

**Node Environment**


**Application Options**

- `NEXT_PUBLIC_SERVER_BASE_URL`: Set the url of the backend api calls
