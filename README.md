# StayFinder Frontend

A modern hotel discovery and booking platform built with **React**, **TypeScript**, and **Vite**. StayFinder allows users to browse hotels, view detailed property information, manage bookings, and leave reviews through a fast and responsive user experience.

---

## Tech Stack

* **React 19**
* **TypeScript**
* **Vite**
* **React Router**
* **Redux Toolkit**
* **Axios**
* **ESLint**
* **SCSS** 

---

## Features

### Authentication

* User registration
* User login
* Password reset
* Protected routes
* User profile management

### Hotels

* Browse available hotels
* View detailed hotel information
* Search and filter hotels
* Featured hotel listings

### Bookings

* Create bookings
* View booking history
* Manage existing bookings
* Booking status tracking

### Reviews

* Submit hotel reviews
* View hotel reviews
* Display hotel ratings
* Verified stay reviews

### Notifications

* Booking confirmation notifications
* Booking cancellation notifications
* Account verification notifications

---

## Project Structure

```text
src/
├── assets/
├── components/
├── hooks/
├── models/
├── layouts/
├── pages/
├── store/
├── services/
├── types/
├── utils/
├── App.tsx
└── main.tsx
```

### Folder Overview

| Folder     | Purpose                                    |
| ---------- | ------------------------------------------ |
| assets     | Images, icons, fonts, and static resources |
| components | Reusable UI components                     |
| constants  | Application constants and configuration    |
| hooks      | Custom React hooks                         |
| layouts    | Shared page layouts                        |
| pages      | Route-level page components                |
| routes     | Application routing configuration          |
| services   | API communication and business logic       |
| types      | TypeScript interfaces and types            |
| utils      | Utility and helper functions               |
| store      | Redux-toolkit store, reducers, selectors
---

## Getting Started

### Prerequisites

* Node.js (v20+ recommended)
* npm

### Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd stayfinder-frontend
```

Install dependencies:

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_API_BASE_URL=http://localhost:8000/api/v1
```

Adjust the URL according to your backend environment.

---

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Linting

Run ESLint:

```bash
npm run lint
```

---

## Backend Integration

StayFinder Frontend communicates with the StayFinder API for:

* Authentication
* Hotel management
* Booking management
* Review management
* Notification workflows

Ensure the backend server is running and accessible through the configured environment variables.

---

## API Version

This frontend is designed to work with **StayFinder API v2**, which provides:

* Standardized API responses
* Improved error handling
* Enhanced validation
* Secure authentication and authorization
* Booking and review management

---

## Future Enhancements

* Hotel search and advanced filtering
* Wishlist functionality
* Payment gateway integration
* User dashboard analytics
* Booking reminders
* Dark mode support
* Internationalization (i18n)

---

## Author

**Larry Williams**

Software Developer

---

## License

This project is licensed under the MIT License.
