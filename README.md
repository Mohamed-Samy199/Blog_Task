# React Blog (Clean Code Architecture)

This project is a simple **React Blog** built with [JSONPlaceholder API](https://jsonplaceholder.typicode.com).  
The main goal was to **apply Clean Code Architecture in React**, integrate an external API, and build a polished UI.

---

## 🚀 Features

### Posts List Page
- Display posts list from API.
- Search posts by title.
- Filter posts by author.
- Pagination to navigate through posts.

### Post Details Page
- Show post details with author info (on hover shows more author details).
- Show all comments of the post.
- Add a new comment with optimistic UI (immediate display).

### Reading List
- Bookmark any post.
- Dedicated Reading List page to view all bookmarked posts.
- Bookmarks persist using **localStorage**.

### UX & Quality
- Responsive UI (desktop & mobile).
- Loading, error, and empty states handled.
- Accessible components.

---

## 🛠️ Tech & Architecture
- **React** with hooks.
- **Clean Architecture Pattern**:
  - `data` → API queries & repositories.
  - `domain` → Core definitions (API host, etc.).
  - `usecase` → Business logic (fetch post with user, fetch comments).
  - `ui` → Reusable UI components.
  - `pages` → Application pages (Posts, PostDetails, Profile, ReadingList, etc.).
- Styling with **TailwindCSS**.
- State management using **React Query hooks** + local state.

---

## 📦 Bonus Features
- Implemented **Infinite Scroll** using [`react-window`](https://github.com/bvaughn/react-window) + [`react-window-infinite-loader`](https://github.com/bvaughn/react-window-infinite-loader).  
  - (Commented out in code to keep base requirements safe. Can be enabled if required.)

---

## 🖼️ Folder Structure

src
┣ assets
┣ data
┃ ┣ context
┃ ┗ query
┣ repositories
┣ domain
┣ usecase
┣ ui
┃ ┣ components
┃ ┗ pages
┣ index.js
┣ index.css
┣ App.js

---

## Install dependencies:

npm install


Run the app:

npm start


The app will run on http://localhost:3000

## ✅ Acceptance Criteria

Clean separation of concerns (Clean Code Architecture).

Posts list with search, filter, and pagination.

Post details with comments and optimistic add.

Reading List persists in localStorage.

Smooth UX with all states handled.

App builds and runs without errors.


## Author

Muhammad El Kattan

Frontend & Backend Developer (MERN Stack)

GitHub: https://github.com/Mohamed-Samy199

LinkedIn: https://www.linkedin.com/in/muhammad-el-kattan-652b93223/

---

Enjoy your clean, modern store experience!