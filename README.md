# Innovation Labs Code Test

### INSTALLATION

`git clone https://github.com/ingravido/code-test.git`

`cd code-test/`

`cd api-server/`

`npm install`

`cp example.env .env`

`pwd`

Copy the actual directory path where application is installed, and paste
it after the APP_BASE_PATH= environment variable.

Edit .env and paste the path. Change the default websocket server port
if needed.

`vim .env`

Save edits and run server. See STARTING SERVER section

**IMPORTANT NOTE**: Default server address shipped with this
distrubution bundle is localhost:8080. In order to use another
port/address you should edit client application config file
(client-app/src/config/config.js) and make a entire build of the client
application. Go to BUILD APPLICATION section to find how.

### STARTING SERVER
Inside project's root:

`cd api-server/`

Run the server with:

`npm start &`

Check for errors, in that case, check the TROUBLESHOOTING section. 
Once server is up, run the client aplication. Server is fully tested with node v6.9.4

### RUNNING CLIENT APP

Expose client-app/ root path with a webserver and take index.html as
entry point. For simplicity, php's built in internal server can be used. Inside
project'sroot:

`cd client-app/`

`php -S 0.0.0.0:9000`

Open a brower and go to http://localhost:9000

Client application can also be executed opening index.html directly throught
file:/// protocol. Warning: Despite of it's pure javascript client code, some assets
routes could no load due a different uri handle.

### APLICATION CLIENT BUILD INSTRUCTIONS

Inside client-app/ directory do:

`npm install`

and then:

`webpack`

With this, we should ship a fresh dist/bundle.js taking now new
configuration values from client-app/src/config/config.js. 
NOTE: Webpack config file is only fully warrantied to work with Webpack2

### CONVENTIONS

1. Button's name is inferred from file name.
2. JSON file data schema format is deduced from parent folder of json
   file
3. Parent folder of json files establish schema json format of files inside that folder.
4. We assume all of ours third party content renders uses this JSON
   normalization schema as input:


        {
          items: [
            {
              order: 0,
              title: 'Lorem Ipsum'
              contents: [ //Posible contents type
                {
                  type: url,
                  data: 'http://url.com/evil-and-rage',
                },
                {
                  type: 'text',
                  data: 'Description....',
                },
                {
                  type: 'img',
                  data: 'http://path/to/image.png',
                },
                {
                  type: 'date',
                  data: '2016-11-26',
                }
              ]
            }...(more items in file)
          ]
        }


### DEVELOPMENT NOTES

In order to keep the application code totally agnostic of the location
of the .env file I use the --require (-r) command line option to preload
dotenv file. For simplicity a task to run the server was added to
package.json: `npm start`


### IMPROVEMENTS
Complete error handling. Complete handle for valid JSON exceptions.

File not found in server: Visual feedback on client.

Notification on client when server is down.

Add automatic JSON schema detection instead of based on folder.

Code test coverage of server and client application.



### TROUBLESHOOTING
**Running npm start**

    Error: listen EADDRINUSE :::8080

**Reason**: Machine's port 8080 is not available

**Fix**: Edit .env to chose another port and do a new build (Find how in
BUILD INSTRUCTIONS section)

**Opening http://localhost:9000 error on
console**

    net::ERR_CONNECTION_REFUSED on bundle.js:6558
**Reason**: Server is down.

**Fix**: Start server
