# Backend Web Presence
## Background
The San Diego Zoo Wildlife Association (SDZWA) manages a vast network of multimedia sensors within the grounds of their
Safari Park. Researchers at SDZWA deploy various sensor types across large physical distances throughout their enclosures.
Current methods of retrieving data are very hands-on and not scalable. In addition to this scalability problem, there is no
way to determine the health of a given sensor at any time without physical access. In order to more efficiently manage these
nodes, we are creating a web-based user interface to view their sensors’ output, metadata, and sensor health - all managed via
a secure, reliable database capable of collection and storage of sensor information. To implement this solution, our group uses
React and NodeJS with a SQLite database to build a tool that will centralize access to these sensors. This web application will
allow researchers to easily view and manage data across large networks, resulting in more accessible information and higher
potential for meaningful scientific results.

## Organization
In terms of organization, implementation of API functions will be located in the controllers folder, with sensor API function implementations being under the sensor.js file and user login and registration API function implementations being under the users.js file. Routes contains the folders which link these implementations with the correct REST API resource links, allowing for easy modification in case of route changes and a general decluttering of the route code. General server code is located under the server.js file and the database schema is located under the prisma folder in schema.prisma which forms the general structure of our database. 

## Getting started
Required components for this project are Prisma, Docker, and SQLite. See below for official documentation on installing those on your device:

Install & Setup Prisma: https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch

Install Docker: https://www.docker.com/products/docker-desktop/

Install SQLite: https://www.sqlite.org/download.html

Integrating Prisma + SQLite: https://www.prisma.io/docs/concepts/database-connectors/sqlite

Once all the installations are complete, git clone the repo to run on local system.
```
git clone https://github.com/UCSD-E4E/sdzwa-sensor-dashboard-backend.git

```

Now, you can migrate the schema.prisma to the local SQLite database
```
npx prisma migrate dev initialize

```
The database table can be visualised and edited on localhost using the command:
```
npx prisma studio

```
## Creating Initial Docker Container Running w/ Node Server

Inside of directory that has Dockerfile, run this command to build the Docker image.
```
docker build . -t <your username>/node-web-app
```

Run image with this command
```
docker run -p 49160:5000 -d <your username>/node-web-app
```
Call this command to get port that the Docker app was mapped to to call
```
docker ps
```

Can call upon app with this command. Note that the port end depends on what port the app was mapped upon in as you would see in the 'ps' command.
```
curl -i localhost:49160
```

## Next Steps

Frontend implementation for the SDZWA Sensor dashboard application:  https://github.com/UCSD-E4E/sdzwa-sensor-dashboard-frontend





