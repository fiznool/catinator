# Cat-inator

This is a really useful site - it displays a cat gif with a random message.

![A random cat gif](http://thecatapi.com/api/images/get?format=src&type=gif)

This repo is used to test out integration with [Sentry](http://getsentry.com).

## Installation

```
npm install
```

## Usage

```
npm start
```

Browse to `http://localhost:3000` to see the cats in all their glory.

## Sentry Integration

By default, this project will not trigger any exceptions, and will not report to Sentry.

To fix this:

- Go to http://getsentry.com and sign up for a new account.
- Create a team, and then a project.
- In the project settings, go to Client Configuration and copy the client key.
- Create a new file `.env` in the root of this repository.
- Enter the following into the `.env` file:

```
SENTRY_DSN=<copied_client_key>
```

- In the file `messages.js`, change the `numMessages` variable to a number higher than 5.
- Start the app, and browse to `http://localhost:3000`. Refresh a few times until an exception is generated. You'll see this exception reported to Sentry.
