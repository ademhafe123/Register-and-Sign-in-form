# Register-and-Sign-in-form

This i a simple project that allows users to register and log-in.
This is a flexible project that can be **implemented in many bigger projects** that contain user registration and user log-in.

## Preconditions for register

- Client server (frontend) has to be running.
- Backend server must be running and it has to be connected to Dabatase server.
- Database user's IP Address must be active to be able to access to the cluster.

## Preconditions for log-in 

- Client server (frontend) has to be running.
- Backend server must be running and it has to be connected to Dabatase server.
- Database user's IP Address must be active to be able to access to the cluster.
- User must be registered.
- User must enter correct information to log-in.

## Successful scenario result

- If user has successfully registered, `console.log` will display this log: **Added a new student**.
- If user has successfully logged-in, `console.log` will display this log: **Logged in**.

## Unsuccessful scenario result for register

- If connection was not established, the user will not be able to register
- If user enters an email that is already in use, `console.log` will display this log: **Already exists**.
- If user enters a wrong confirm password, the `<input />` will change style and its `<label/>` to inform user that the confirm password is incorrect.

## Unsuccessful scenario result for log-in

- If connection was not established, the user will not be able to register
- If user enters an email that is not registered, the `<input />` will change style and its `<label/>` to inform user that the email is incorrect.
- If user enters a wrong password, the `<input />` will change style and its `<label/>` to inform user that the password is incorrect.







