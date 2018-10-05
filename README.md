# W06 Chat Example

A simple chat demo using node.js, express, and socket.io

https://bitbucket.org/professorcase/w06

## Requirements

- Install Git version control system
- Install Node.js, an open-source, cross-platform JavaScript run-time environment for executing JavaScript code on the server. 
- Install Visual Studio Code for editing. 

## Get the Code

1. Log in to BitBucket. 

2. Fork this repo from this BitBucket cloud repository into your own cloud repository.

3. Clone it from your cloud repository down to your local machine. 

## Run it

Open a command window in your w06 folder.

Run **npm install** to install all the dependencies in the package.json file.
This command installs a package, and any packages that it depends on. If the package has a package-lock or shrinkwrap file, the installation of dependencies will be driven by that, with an package.json taking precedence if both files exist

Run **node server.js** or **node server** to start the server.  (Hit CTRL-C to stop.)
Node.js is a JavaScript framework for writing server-side applications. In its simplest form it allows you to trigger small JavaScript programs from the command line without any browser involved. .
```Bash
> npm install
> node server
```

Point your browser to `http://localhost:8081`.

## References

- http://javabeginnerstutorial.com/javascript-2/create-simple-chat-application-using-node-js-express-js-socket-io/

- http://socket.io/get-started/chat/

- https://github.com/socketio/socket.io

- http://socket.io/

## Chat with Friends

Open commnand window, type **ipconfig**. 

```PowerShell
ipconfig
```

Find your temporary IPv4 Address. It may change frequently for security reasons. 

Have your friends open a browser to your IP and port to see if they can join your chat app. For example: 

   http://192.168.1.11:8081/

   Can they hit your app?

   Can you hit theirs?