# 📰 DWS Blog Platform

This is a blog implementation, developed in React Framework.

## Feature Overview

This project allows the users

- See all available posts and show the proper information
- Filter by categories and authors
- Sort by newest from oldest posts
- See a post details
- Search post information
- Responsive: It is possible to use the application both mobile and desktop views

## Live Demo

The project is available via Vercel: [dws-demo-blog.vercel.app](https://dws-demo-blog.vercel.app/)

## How to install

> Target Node Version: 20

1. Clone the repository:

```bash
git clone git@github.com:joeltonmats/dws-demo-blog.git
cd dws-demo-blog
```

2. Install the dependencies:

```bash
npm install
```

3. Run locally:

```bash
npm run dev
```

4. Access: [http://localhost:5173](http://localhost:5173)

## Tech Stack

- **React 18**
- **TypeScript**
- **Styled Components**
- **React Router DOM**
- **ESLint** + **Prettier**
- **Vite** – build environment
- **Vitest** – unit tests
- **React Testing Library**
- **Axios**
- **Commitizen**

## High Level Project Structure

```
src/
│
├── components/         # Common Componentes
├── context/            # Context API Approach
├── pages/              # Main Pages
├── styles/             # Theme and common styles
├── types/              # Typescript Types
├── utils/              # Helpers
├── api/                # API Structure
├── constants/          # Texts and labels centralized
├── tests/              # Testes unitários (Vitest)
└── App.tsx             # Arquivo raiz da aplicação
```

## Browsers Compatibility

> **Nota:** Currently, the project was tested in **Google Chrome**.

| Browser | Checked |
| ------- | ------- |
| Chrome  | ✅      |

## GitHub Actions - Automated Gitflow

This project uses **GitHub Actions** with the following steps in the main flow:

- Automatic Execution of Unit Tests via **Vitest**
- Static Code Analyze with **ESLint**
- Automatic Build to deploy stabilization
