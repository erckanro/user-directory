# User Directory

This is a simple User Directory built with React, TypeScript, and Material UI. It allows users to search through a list of users and toggle between grid and list views. The app includes debounced search, reusable components, and lazy-loaded views for performance.

## Getting Started

### Prerequisites

- Node.js (version 16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/user-directory.git
   cd user-directory
   ```

2. Install dependencies:

   ```
   npm install
   ```

   or

   ```
   yarn install
   ```

### Running the App

To start the development server:

```
npm run dev
```

or

```
yarn dev
```

The app will be available at `http://localhost:5173`.

## Notes

- Components like `UserGrid`, `UserList`, and `UserCard` are lazy-loaded to improve performance.
- The search input is debounced using Lodash to reduce unnecessary renders.
- The layout and interactions are built with accessibility and responsiveness in mind.
- User data is fetched using a custom `useUsers` hook and filtered based on the search term.
