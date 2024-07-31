

# 🎓 Student Management System

[![GitHub](https://img.shields.io/badge/-GitHub-%23555.svg?logo=github-sponsors)](https://github.com/talha1230/student-management-system)
[![Chat](https://img.shields.io/discord/643523529131950086?label=Chat)](https://discord.gg/botunknow)

Welcome to the **Student Management System** repository! This project provides a comprehensive solution for managing student-related tasks and activities efficiently.

## 🚀 Features

- **🌟 User-friendly Interface**: Intuitive and sleek UI for seamless navigation.
- **👤 Student Profiles**: Create and manage detailed student profiles, including personal and academic information.
- **📚 Course Management**: Organize courses, modules, and assignments with ease.
- **📈 Attendance Tracking**: Monitor student attendance and generate insightful reports.
- **📊 Grades and Progress Monitoring**: Record grades, track progress, and generate reports on student achievements.
- **💬 Communication Tools**: Integrated messaging system for smooth interactions between students, teachers, and administrators.
- **🔒 Access Control**: Role-based access to ensure secure and private data management.
- **📱 Responsive Design**: Mobile-friendly interface for convenient access from any device.

## 🛠️ Prerequisites

Before you begin, make sure you have the following installed:

- Java Development Kit (JDK) 17 or higher
- Node.js and npm (Node Package Manager)
- Maven
- Visual Studio Code

## 🚧 Setup Instructions

### Backend

1. **Clone the repository:**

    ```sh
    git clone https://github.com/talha1230/student-management-system.git
    cd student-management-system/backend
    ```

2. **Update database credentials:**
   Modify the `application.properties` file with your MySQL server credentials.

    ```
    src/main/resources/application.properties
    ```

3. **Open the backend project in Visual Studio Code:**

    ```sh
    code .
    ```

4. **Build the project:**

    ```sh
    mvn clean install
    ```

5. **Run the Spring Boot application:**

    ```sh
    mvn spring-boot:run
    ```

    The backend server will be accessible at [http://localhost:8080](http://localhost:8080).

### Frontend

1. **Navigate to the frontend directory:**

    ```sh
    cd ../frontend
    ```

2. **Open the frontend project in Visual Studio Code:**

    ```sh
    code .
    ```

3. **Install dependencies:**

    ```sh
    npm install
    ```

4. **Run the React application:**

    ```sh
    npm start
    ```

    The frontend will be accessible at [http://localhost:3000](http://localhost:3000).

## 🧪 Running Tests

### Backend Tests

To run backend tests, use Maven:

```sh
cd backend
mvn test
```

### Frontend Tests

To run frontend tests, use npm:

```sh
cd frontend
npm test
```

## 🏗️ Building for Production

### Backend

Build the backend for production with Maven:

```sh
cd backend
mvn clean package
```

The production JAR file will be located in the `target` directory.

### Frontend

Build the frontend for production with npm:

```sh
cd frontend
npm run build
```

Production-ready files will be in the `build` directory.

## 🤝 Contributors

We welcome contributions! Check out the list of [open issues](https://github.com/talha1230/student-management-system/issues) and find ways to get involved.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/talha1230/student-management-system/blob/main/LICENSE) file for details.

---

Made with ❤️ by [Talha Khan](https://instagram.com/talhakhan.exe) and our amazing contributors.

---
