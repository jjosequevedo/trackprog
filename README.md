# TrackProg - Gym Progress Tracking App

**TrackProg** is an application designed to help users track their gym progress by allowing them to register and log workout routines, weight, repetitions, and sets. This app simplifies fitness tracking, helping users monitor and achieve their fitness goals over time.

## Features
- Create and manage custom workout routines.
- Track weight, repetitions, and sets for each exercise.
- View and analyze progress over time.

## Tech Stack
- **Next.js** - For server-side rendering and fast frontend development.
- **Material UI (MUI)** - For building a responsive and attractive user interface.
- **Node.js/Express** - For backend services (optional).
- **MongoDB/PostgreSQL** - Database to store user data (optional).

## Installation

### Prerequisites
- **Node.js** (>= 14.x)
- **npm** or **yarn**
- Optional: **MongoDB** or **PostgreSQL** for storing workout data

## Setup Instructions
1. Clone the repository:
    ```bash Copy code
    git clone https://github.com/your-username/trackprog.git
    cd trackprog
    ```
2. Install dependencies:
    ```bash Copy code
    npm install
    # or
    yarn install
    ```
3. Set up the environment variables in `.env.local` (for database, API keys, etc.):
    ```makefile Copy code
    DATABASE_URL=your-database-url
    NEXT_PUBLIC_API_URL=http://localhost:3000
    ```
4. Run the development server:
    ```bash Copy code
    npm run dev
    # or
    yarn dev
    ```
5. Open http://localhost:3000 in your browser to see the app running.

## Usage
1. **Sign Up**: Users can create a new account and start logging their workouts.
2. **Create a Routine**: Add workout routines, including exercises, sets, reps, and weight.
3. **Track Progress**: Update workout logs after each session to track progress over time.
4. **View Analytics**: Get insights into your workout history and progress trends.

## Folder Structure
```bash Copy code
trackprog/
├── components/        # React components used in the app
├── pages/             # Next.js pages
│   ├── index.tsx      # Main entry page
│   └── login.tsx      # Login page
├── public/            # Static assets like images, icons, etc.
├── styles/            # Global and component-specific styles
├── utils/             # Utility functions and helpers
├── .env.local         # Environment variables
└── README.md          # Project documentation
```
## Deployment
You can deploy this Next.js app using platforms like Vercel, Netlify, or any hosting provider that supports Node.js.

## Deploy on Vercel
1. Push the project to a GitHub repository.
2. Go to Vercel, sign in, and link your repository.
3. Click "Deploy" and Vercel will automatically handle the deployment process.

## License
This project is licensed under the MIT License.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Contact
For any questions, feel free to reach out at [hi@trackprog.com](emailto:hi@trackprog.com).
