# 🐄 Cow Catalog App

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

---

## 📱 Overview

The **Cow Catalog App** is an offline-first React Native application built for the **TELUS Agriculture & Consumer Goods** take-home assignment.

It allows users to **browse**, **filter**, and **manage** a list of cows — demonstrating clean architecture, strong TypeScript structure, and a smooth offline user experience.

---

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

To start the Metro dev server, run the following command from the root of your project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and Run Your App

With Metro running, open a new terminal window/pane from the project root, and run:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, install CocoaPods dependencies first (only required on first setup or after updating native deps):

```sh
cd ios && pod install && cd ..
```

Then run:

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see the Cow Catalog App running in your emulator or device.

---

## 🎥 Demo Video

👉 **[Watch Loom Demo Video](https://www.loom.com/share/68d7647076604ab5951442445e249e18)**

The demo covers:

1. Viewing the preloaded cow list
2. Searching and filtering cows
3. Viewing detailed information
4. Adding a new cow
5. Verifying data persistence after app restart

---

# 🧱 Features Implemented

### ✅ CA-01: Cow List Screen

- Displays all cows in a **card layout**
- Each card includes:
  - 🏷️ Ear Tag (ID)
  - 🚻 Sex
  - 🏠 Pen
  - 📊 Status (Active / In Treatment / Deceased)
  - 📅 Last Event Date

### ✅ CA-02: Search & Filters

- 🔍 Real-time search by tag number
- 🎛️ Filter by **Status** and **Pen**
- 🧠 Filters **persist** when navigating back (managed via Redux)

### ✅ CA-03: Add Cow Form

- 🆕 “Add Cow” button to create new entries
- Fields: Ear Tag, Sex, Pen, Status, Weight
- Inline validation (unique, required, and positive checks)
- Persisted using **AsyncStorage**

### ✅ CA-04: Cow Detail Screen

- Displays full details including Weight & Daily Gain
- 🕒 Mock event timeline (Weight Check, Treatment, etc.)
- Uses icons and colors for clarity

---

# 💾 Offline Behavior

- Offline-first architecture using **AsyncStorage**
- **Mock data** seeded on first launch
- Newly added cows remain saved even after restart

---

# 🧠 Architecture & Design

| Layer                | Description                                      |
| -------------------- | ------------------------------------------------ |
| **UI Layer**         | Functional React components (TypeScript + Hooks) |
| **State Management** | Redux Toolkit for cows, filters, and persistence |
| **Storage**          | AsyncStorage for local data                      |
| **Navigation**       | React Navigation (Stack)                         |
| **Validation**       | Inline validation logic                          |
| **Filtering**        | Centralized Redux state for persistent filters   |

---

# 🧰 Tech Stack

- ⚛️ React Native CLI (no Expo)
- 🧱 Redux Toolkit
- 💾 AsyncStorage
- 🧭 React Navigation v6
- 🎨 react-native-vector-icons
- 🧩 react-native-picker-select
- ⏱️ TypeScript

---

# ⚖️ Trade-offs & Future Improvements

| Aspect              | Current                 | Future Improvement                         |
| ------------------- | ----------------------- | ------------------------------------------ |
| **Storage**         | Local-only AsyncStorage | Integrate with remote GraphQL/REST backend |
| **Filtering**       | Local logic             | API-level filtering for scalability        |
| **Events**          | Mock data               | Real event tracking                        |
| **Form Validation** | Inline validation       | Use Formik + Yup                           |
| **Testing**         | Manual testing          | Add Jest + React Native Testing Library    |

---

# 🧑‍💻 Author

**Zyauddin Khan**  
Senior React Native Developer  
📧 [zyauddinkhan2962@gmail.com](mailto:zyauddinkhan2962@gmail.com)  
🔗 [GitHub Profile](https://github.com/zyauddinkhanin)

---

# 🏁 Summary

The **Cow Catalog App** demonstrates:

- Clean and modular TypeScript architecture
- Persistent filters and offline-first support
- Complete implementation of all required tasks
- Strong command of React Native ecosystem and state management

**Deliverables:**

- 🐄 [GitHub Repository](https://github.com/zyauddinkhanin/Cow-Catalog-App.git)
- 🧾 README.md (this file)
- 🎥 [Demo Video on Loom](https://www.loom.com/share/68d7647076604ab5951442445e249e18)

---

# Learn More

To learn more about React Native, visit:

- [React Native Website](https://reactnative.dev) – Learn the fundamentals
- [Getting Started Guide](https://reactnative.dev/docs/environment-setup) – Set up your environment
- [Learn the Basics](https://reactnative.dev/docs/getting-started) – Guided tour of core concepts
- [React Native Blog](https://reactnative.dev/blog) – Latest updates and releases
- [`@facebook/react-native`](https://github.com/facebook/react-native) – Official GitHub repository
