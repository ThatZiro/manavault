
# Mana Vault - MTG Database Frontend

## Overview

The **Mana Vault** frontend is a web interface designed for users to interact with the MTG (Magic: The Gathering) database. It allows users to search for cards, build decks, and manage their personal collections. The application is built using **React**, **TypeScript**, and **Vite**, and follows best practices for performance and scalability.

## Key Features

- **User Authentication**: Users can sign up, log in, and receive JWT tokens to access their account securely.
- **Card Search**: Users can search for Magic: The Gathering cards using a dynamic and responsive search interface.
- **Deck Builder**: Allows users to create, edit, and manage their MTG decks.
- **Personal Collection Management**: Users can manage their collection by adding or removing cards.
- **Responsive Design**: Built using Material UI for responsive and visually appealing design across all devices.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Strongly typed JavaScript for better code quality and maintainability.
- **Vite**: Fast development build tool for modern web projects.
- **Axios**: For making API requests to the backend.
- **Material UI**: A popular React component library for fast and responsive design.

## Project Structure

The frontend is organized as follows:

```
src/
├── components/       # Reusable UI components
├── pages/            # Application pages (Home, Login, Deck Builder, etc.)
├── services/         # API service for communication with backend
├── hooks/            # Custom hooks for managing application state
├── context/          # Global state management using React Context API
├── assets/           # Static assets (images, logos, etc.)
└── Apppassword-input.tsx           # Application entry point
```

## Prerequisites

To run this project locally, you'll need the following:

- **Node.js**: v16.x or higher
- **NPM**: v8.x or higher (or **Yarn**)

## Environment Variables

The frontend requires certain environment variables to interact with the backend:

```
REACT_APP_API_URL=http://localhost:3000/api
```

You can create a `.env` file in the root of your project with this variable to configure the backend API URL.

## Setup Instructions

### 1. **Clone the Repository**

```bash
git clone https://github.com/your-username/manavault-frontend.git
cd manavault-frontend
```

### 2. **Install Dependencies**

```bash
npm install
```

### 3. **Run the Application**

Start the development server:

```bash
npm run dev
```

The application will be available on `http://localhost:3000` (or the port configured in the `.env` file).

## API Integration

The frontend interacts with the backend through the following key API endpoints:

- **User Authentication**:
  - `POST /api/auth/signup`: Create a new user.
  - `POST /api/auth/login`: Authenticate a user and receive a JWT token.

- **Deck Management**:
  - `GET /api/decks`: Fetch user's decks.
  - `POST /api/decks`: Create a new deck.

- **Collection Management**:
  - `GET /api/collections`: Fetch user's collection.
  - `POST /api/collections`: Add a card to the collection.

- **Card Search**:
  - `GET /api/cards`: Search Magic: The Gathering cards.

## Testing

The frontend includes unit and integration tests using **Jest** and **React Testing Library**. To run the tests:

```bash
npm run test
```

## Deployment

To deploy the frontend for production:

```bash
npm run build
```

This will create an optimized build in the `dist/` directory, which can then be deployed to a hosting service like **Vercel**, **Netlify**, or **AWS S3**.

## License

This project is for personal use and showcases my work.
