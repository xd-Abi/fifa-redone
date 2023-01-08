# FIFA

Welcome to FIFA Redone, a reimagined version of the FIFA website with exciting new features. Follow the instructions below to get the project up and running.

# Prerequisites

Before getting started, make sure you have these things installed on your system:

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Node.js](https://nodejs.org/en/download/)

## Setup

To set up the project, run the following command:

```
docker-compose up
```

## Development

To start development, navigate to the `backend` and `frontend` directories and install the necessary npm packages for each project:

```
cd backend
npm install

cd ../frontend
npm install
```

To start the backend server, run:

```
npm run start:dev
```

To start the frontend development server, run:

```
npm start
```

You can now make changes and see them reflected in the development server.

## Production

To install only the necessary packages for the project, navigate to the `backend` and `frontend` directories and run the following commands:

```
cd backend
npm install --production

cd ../frontend
npm install --production
```

This will install only the packages required for the project to run in production, rather than including development dependencies as well.
To run the project in production, you will need to build the frontend assets and start the backend server.

First, navigate to the `frontend` directory and build the assets:

```
cd frontend
npm run build
```

This will create a `build` directory containing the optimized frontend assets.
Next, navigate to the `backend` directory and start the server:

```
cd ../backend
npm start
```
