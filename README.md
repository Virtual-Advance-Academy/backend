# How to Land a Job/Internship - API Backend

## Development

`yarn dev` - Run the express server with nodemon

`yarn test` - Run tests with jest

Copy [`example.env`](example.env) as `.env` in the repo root and enter values for the environment variable as needed

## API Documentation

This service uses [Swagger (Open API)](https://swagger.io/docs/specification/about/) for generating API documentation. To read the docs, start the express server and navigate to `/api-docs` for an interactive documentation page.

API documentation is provded via YAML comments made in the route files themselves, following the [OpenAPI Spec](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#specification).