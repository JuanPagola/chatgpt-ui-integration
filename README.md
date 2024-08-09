# ChatGPT UI Integration

## Description

ChatGPT UI Integration is a web application built with Vite, React, TypeScript, Tailwind CSS, and Chat-ui-kit-react.

## Table of Contents

- [Setup Instructions](#setup-instructions)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Casing](#casing)
- [Global Project Structure](#global-project-structure)
- [Components Folder Structure](#components-folder-structure)
- [Features](#features)
- [Extensions](#extensions)

## Setup Instructions

Before running the project, follow these steps:

1. **.create secret key**:

    Go to https://platform.openai.com/api-keys and create a new secret key

2. **.env.local**:

    Create a `.env.local` file in the root directory of the project and add the following variable with your ChatGPT api key:

    ```sh
    VITE_CHATGPT_KEY=
    ```

## Installation

To install all the dependencies, run:

```sh
yarn install
```

## Usage

To start the application, run:

```sh
yarn dev
```
Navigate to http://localhost:3000 to see the application in action.

## Testing

To execute the unit tests, run:

```sh
yarn test
```

## Casing

This project uses PascalCasing for .tsx files and kebab-casing for the rest of the files.


## Global Project Structure

```sh
public/                                 # Public assets like images, fonts, etc.
src/
├── api/                                # API-related files
│   │── api-service1.ts
│   └── ...
├── components/                         # Reusable components
├── context/                            # React context files
│   ├── ExampleContext/
│   │   └── ExampleContext.tsx
│   └── ...
├── layouts/                            # Layout components
│   ├── ExampleLayout/
│   │   └── ExampleLayout.tsx
│   └── ...         
└── styles/                             # Global styles
    └── globals.css


App.tsx                                 # App
main.tsx                                # main
.prettierrc                             # Prettier configuration file
```

## Components Folder Structure

Each component within the `components` folder follows a specific structure to ensure consistency and organization. The structure for each component is as follows:

```sh
components/
└── ComponentName/              # Folder for a specific component
    ├── index.ts                # Export file, entry point
    ├── ComponentName.tsx       # Main component file
    ├── ComponentName.test.tsx  # Test file for the component
    └── utils.ts                # Utility functions related to the component
```


## Features

- **Vite** for fast builds and hot module replacement.
- **TypeScript** for static typing and better code quality.
- **Tailwind CSS** for utility-first styling.
- **React Router** for client-side routing with a Next.js-like folder structure.
- **Vitest** for unit testing.
- **Prettier** for code formatting.

## Extensions

To ensure a consistent development environment, it's recommended that all developers use the following extensions in Visual Studio Code:

- **Prettier** - Code formatter

  - This extension helps in maintaining a consistent code style by automatically formatting your code. Install it from the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

- **Tailwind CSS IntelliSense** - Intelligent Tailwind CSS tooling

  - This extension provides autocompletion, syntax highlighting, and linting for Tailwind CSS, enhancing your development workflow. Install it from the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss).