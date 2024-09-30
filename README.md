# Favorite Poké App

A full-stack web application that allows users to browse a comprehensive list of Pokémon, view detailed information, and save their favorite Pokémon. Developed with Django and React, the app provides a seamless experience for both Pokémon enthusiasts and casual users.

## Features

- Browse through a complete list of Pokémon.
- View detailed information about each Pokémon.
- Mark Pokémon as favorites for easy access.
- RESTful API endpoints for data retrieval and management.
- User-friendly and responsive UI for smooth browsing on both desktop and mobile devices.

## Technologies Used

### Backend
- **Python**: Programming language for backend development.
- **Django**: Web framework for building the backend.
- **Django REST Framework**: For creating RESTful API endpoints.
- **PostgreSQL**: Relational database to store Pokémon data and user information.

### Frontend
- **React**: JavaScript library for building the user interface.
- **HTML & CSS**: Markup and styling for the front end.
- **JavaScript**: Core language for dynamic client-side interactions.

### Deployment and Tools
- **AWS S3**: For hosting the static frontend.
- **AWS**: Used for cloud-based deployment.
- **Gunicorn**: WSGI HTTP Server for running the Django application.
- **Microsoft Visual Studio Code**: Code editor for development.
- **Git**: Version control to manage code changes.

## Getting Started

### Prerequisites

- **Node.js** and **npm**: For setting up the frontend environment.
- **Python 3**: Required for running the backend server.
- **PostgreSQL**: For database management.
- **AWS account**: (optional) for deploying the application.

### Installation

#### Backend

1. Clone the repository and navigate to the backend directory:

    ```sh
    git clone https://github.com/your-username/favorite-poke-app.git
    cd favorite-poke-app/backend
    ```

2. Create a virtual environment and activate it:

    ```sh
    python3 -m venv venv
    source venv/bin/activate
    ```

3. Install the required dependencies:

    ```sh
    pip install -r requirements.txt
    ```

4. Set up the PostgreSQL database and configure the `settings.py` file with your database credentials.

5. Run the Django development server:

    ```sh
    python manage.py migrate
    python manage.py runserver
    ```

#### Frontend

1. Navigate to the frontend directory:

    ```sh
    cd ../frontend
    ```

2. Install the required dependencies:

    ```sh
    npm install
    ```

3. Run the React development server:

    ```sh
    npm start
    ```

## Deployment

The application is deployed on AWS using S3 for hosting the frontend. The backend server is set up with **Gunicorn**.

### Live Application

Access the live application here: [Favorite Poké App](http://975050133860-pokemon-app.s3-website.us-east-1.amazonaws.com/)

## Usage

- Open the app and browse the list of Pokémon.
- Click on any Pokémon to view more details.
- To save a Pokémon as your favorite, simply click the "Add to Favorites" button on the Pokémon detail page.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Happy Pokémon browsing! 😊
