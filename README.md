# NewsApp Frontend - React TypeScript

Welcome to the frontend application of NewsApp! This React TypeScript app complements the NewsApp Laravel backend by providing a user-friendly interface for viewing articles from various sources.

## Prerequisites

Before you begin, ensure that you have the following software installed on your machine:

- Node.js: [Install Node.js](https://nodejs.org/)
- npm: [Install npm](https://www.npmjs.com/get-npm)

## Running the App

### Without Docker

To run the app without Docker, follow these steps:

1. Clone this repository to your local machine.

2. Install the necessary dependencies:

    ```bash
    npm install
    ```

3. Configure the backend API URL by updating the `.env` file or environment variables.

4. Start the development server:

    ```bash
    npm start
    ```

### With Docker

To run the app with Docker, ensure you have Docker installed on your machine, and then follow these steps:

1. Clone this repository to your local machine.

2. Build the Docker image using the provided Dockerfile:

    ```bash
    docker build -t newsapp-frontend .
    ```

3. Run the Docker container:

    ```bash
    docker run -p 3000:3000 newsapp-frontend
    ```

4. Access the application in your web browser at `http://localhost:3000`.

## Usage

Explore the NewsApp frontend to view and interact with articles from different sources. The interface is designed to provide a seamless experience in discovering the latest news.

## Contributing

If you would like to contribute to the development of this NewsApp frontend, please follow the guidelines outlined in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This NewsApp frontend is open-source software licensed under the [MIT License](LICENSE).

Feel free to reach out with any questions or feedback!
