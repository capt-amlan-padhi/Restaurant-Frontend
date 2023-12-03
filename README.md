# Epicurean Symphony Website

This is the Epicurean Symphony restaurant website project, which includes a frontend interface and a dummy backend server to simulate fetching data for the restaurant's menu, events, and other information.

## Getting Started

Follow these instructions to get the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before running the project, make sure you have Node.js and npm (or Yarn) installed on your system.

### Installation

First, clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/epicurean-symphony-website.git
```

Navigate to the project directory:

```bash
cd epicurean-symphony-website
```

Install the necessary dependencies:

```bash
npm install
```

Or if you're using Yarn:

```bash
yarn
```

### Running the Dummy Backend Server

The dummy backend server can be set up using JSON Server. Install JSON Server globally if you haven't already:

```bash
npm install -g json-server
```

Start the server with the following command:

```bash
json-server --watch db.json --port 3001
```

This will serve your `db.json` file at `http://localhost:3001`.

### Running the Project

With the dummy backend server running, open a new terminal and start the React development server:

```bash
npm start
```

Or with Yarn:

```bash
yarn start
```

The application will launch at `http://localhost:3000`.

## Screenshots

*Home Page*
![Home Page Screenshot](/path/to/homepage.png)

*Menu Page*
![Menu Page Screenshot](/path/to/menupage.png)


## Built With

- [React](https://reactjs.org/) - The web framework used.
- [JSON Server](https://github.com/typicode/json-server) - Used to mock the REST API for the dummy backend.

## Contributing

Please read [CONTRIBUTING.md](/path/to/contributing.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

- **Your Name** - *Initial work* - [YourUsername](https://github.com/YourUsername)

See also the list of [contributors](https://github.com/yourusername/epicurean-symphony-website/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Hat tip to anyone whose code was used.
- Inspiration.
- etc.
