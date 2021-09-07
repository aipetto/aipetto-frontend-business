# aipetto-frontend-business

Aipetto Frontend is done using React.js, Redux, Typescript and other useful NPM packages, please check package.json for more details.

### Steps to generate a build for production and deploy
```
npm run build:production
firebase deploy
```

### Notes on Deploy
We're hosting our static website using Firebase Hosting and Github Workflow Actions to automate the process of execute
the command `"build:production": "cross-env REACT_APP_ENVIRONMENT=production npm run build"`

#### Useful Resources
https://www.geeksforgeeks.org/how-to-deploy-react-project-on-firebase/