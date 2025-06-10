
<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->





# 💬 Chatbot Query Interface (Frontend)

A simple React-based chat interface where users can type queries, receive AI-like responses (mocked), view past conversations, and interact using markdown or suggested prompts.

---

## 🚀 Live Demo

(Optional: Add link here if deployed)

---

## 🛠️ Tech Stack

| Layer       | Technology       |
|-------------|------------------|
| Frontend    | React.js, JavaScript |
| UI Library  | Material-UI (MUI) |
| Markdown    | react-markdown |
| Styling     | CSS-in-JS (MUI sx props) |
| Storage     | localStorage |

---

## ✨ Features

- 🧠 Type queries and receive bot responses
- 💾 Chat history persists across refreshes (localStorage)
- 📜 AI responses support **Markdown** (bold, links, code)
- 🔮 "Typing..." loader before bot response
- 💬 Suggested prompts (sidebar)
- ✅ Auto-scroll to latest message
- 🎨 Clean UI with header, fixed input box, scrollable chat
- 👤 Dummy user header with avatar and name

---

## 📐 Project Structure
src/
├── components/
│ ├── ChatWindow.js
│ ├── Message.js
│ └── SuggestedPrompt.js
├── App.js
├── index.js




---

## 🧩 How It Works

- User sends a message → added to chat state
- A fake "Typing..." bot message appears
- After 1.2 seconds, it gets replaced with a mocked AI response
- All messages are stored in `localStorage` for persistence

---

## 📦 Installation & Setup

```bash
# git clone https://github.com/your-username/chatbot-interface.git
# cd chatbot-interface
# npm install
# npm start


# Ensure the following dependencies are installed:
# npm install @mui/material @emotion/react @emotion/styled react-markdownß
