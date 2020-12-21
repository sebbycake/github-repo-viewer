# Github Repositories Viewer

A single-page application to display GitHub repositories of a user.


## About The Project

### Built With

* [React](https://reactjs.org/) - Front-end web framework used
* [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) - Command used to create development environment for React project
* [GitHub REST API](https://docs.github.com/en/free-pro-team@latest/rest) 


## Getting Started

### Prerequisites

* [node.js and npm](https://nodejs.org/en/)



### Installation

1. Install dependencies on your local machine:

```
git clone https://github.com/sebbycake/github-repo-viewer.git
npm install
```



### Usage

Run the code on node server:
```
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Deployment

Follow the steps below to deploy React app:

Netlify


```
npm install -g netlify-cli
cd <react_project_name>
npm run build
```


If you've used React Router in your project,
do the following:
```
touch build/_redirects
```
Add the following code to `_redirects` file:
```
/*    /index.html  200
```

Finally, to deploy, run:
```
netlify deploy
```
You will be prompted to provide a publish directory. Enter `build`, which is a production build of your React project.


After viewing the draft URL given to you and everything is running smoothly, run:
```
netlify deploy --prod
```

## License

This project is licensed under the MIT License.
