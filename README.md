# Username Generator
Contains simple React app with Node.js backend to generate unique usernames from inputted form data.

## What made it in
- [x] Engaging UI - React Typescript
- [x] Basic data validation
- [x] Error messaging
- [x] Working functionality

## What stayed behind (or didn't fit in the scope)
- **Dockerizing this app:** You can check out the bit of progress I made against this on the `docker_progress` branch, however there is only a rough outline of a frontend `Dockerfile` and `docker-compose.yml`. I know the general idea behind dockerizing an application just did not have the time to complete it for this.
- **More thorough error validation:** There's no way to know if the fruit input is in fact a fruit - felt it was better to leave this open ended than to come up with a dummy list of my own.
- **Unique usernames:** I think it would be realistic to incorporate a unique factor in the username generation, however this would require a record of all usernames generated through the app. This seemed out of scope for this project.

## Running this locally

1. Clone this repository `git clone <ssh string>`
2. Navigate to the root of the repository
3. `cd backend && npm install`
4. `npm run dev`
5. In another window: Navigate to the root of the repository once more.
6. (second window) `cd frontend`
7. (second window) `yarn && yarn start`
8. navigate to http://localhost:3000

### Screenshots
