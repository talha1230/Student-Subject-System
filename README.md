
# Student Subject System

This project is a Student Subject Management System with a backend built using Spring Boot and a frontend built using React.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Java Development Kit (JDK) 17 or higher
- Node.js and npm (Node Package Manager)
- Maven
- Visual Studio Code

## Setting Up the Project

### Backend

1. **Clone the repository:**

    ```sh
    git clone https://github.com/yourorganization/student-subject-system.git
    cd student-subject-system/backend
    ```

2. **Open the backend folder in Visual Studio Code:**

    ```sh
    code .
    ```

3. **Build the project using Maven:**

    ```sh
    mvn clean install
    ```

4. **Run the Spring Boot application:**

    ```sh
    mvn spring-boot:run
    ```

    The backend server should now be running on `http://localhost:8080`.

### Frontend

1. **Navigate to the frontend directory:**

    ```sh
    cd ../frontend
    ```

2. **Open the frontend folder in Visual Studio Code:**

    ```sh
    code .
    ```

3. **Install the dependencies:**

    ```sh
    npm install
    ```

4. **Run the React application:**

    ```sh
    npm start
    ```

    The frontend application should now be running on `http://localhost:3000`.

## Running Tests

### Backend Tests

To run the backend tests, navigate to the `backend` directory and use Maven:

```sh
cd backend
mvn test
```

### Frontend Tests

To run the frontend tests, navigate to the [`frontend`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FD%3A%2FStudent-Subject-System%2Ffrontend%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "d:\Student-Subject-System\frontend") directory and use npm:

```sh
cd frontend
npm test
```

## Building for Production

### Backend

To build the backend for production, use Maven:

```sh
cd backend
mvn clean package
```

The production-ready JAR file will be located in the `target` directory.

### Frontend

To build the frontend for production, use npm:

```sh
cd frontend
npm run build
```

The production-ready files will be located in the `build` directory.

## License

This project is licensed under the MIT License. See the [LICENSE](../../LICENSE) file for details.

## Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](../../CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## Contact

If you have any questions or issues, please contact [yourname@yourorganization.com](mailto:yourname@yourorganization.com).
```

