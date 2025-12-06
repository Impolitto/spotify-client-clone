# Spotify Client Clone

A web-based Spotify client clone built with HTML, CSS, and JavaScript. This project includes Docker support for easy deployment.

## Features

- 🎵 Spotify-inspired user interface
- 🎨 Responsive design with modern styling
- ▶️ Interactive music player controls
- 📱 Sidebar navigation with playlists
- 🐳 Docker containerization support

## Getting Started

### Prerequisites

- Docker (for containerized deployment)
- Or any modern web browser (for local development)

### Running with Docker

1. Build the Docker image:
```bash
docker build -t spotify-clone .
```

2. Run the container:
```bash
docker run -d -p 8080:80 spotify-clone
```

3. Access the application at `http://localhost:8080`

### Running with Docker Compose

1. Start the application:
```bash
docker-compose up -d
```

2. Access the application at `http://localhost:8080`

3. Stop the application:
```bash
docker-compose down
```

### Local Development

Simply open `index.html` in your web browser.

## Project Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── Dockerfile          # Docker configuration
├── docker-compose.yml  # Docker Compose configuration
└── README.md          # This file
```

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Docker
- Nginx (as web server in container)

## License

This is a student project (Projet genie logiciel).
