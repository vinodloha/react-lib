This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# @xts-ds/react-lib

## Available Scripts

In the project directory, you can run:

### `yarn storybook`

Runs the storybook.<br />
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.


### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the lib for external app consumption to the `dist` folder.

### `yarn build-storybook`

Generate deployable static Storybook Lib

### `yarn build-storybook-docs`

Generate Documentation site of Storybook Lib

### Commit Workflow

Based on the commit messages, increment the version from the latest release.

- If the string "BREAKING CHANGE" or "major" is found anywhere in any of the commit messages or descriptions the major version will be incremented.
- If a commit message begins with the string "feat" or includes "minor" then the minor version will be increased. This works for most common commit metadata for feature additions: "feat: new API" and "feature: new API".
- All other changes will increment the patch version.

### Token Source Update 

Commit newly generated tokens under `src/*`.

```bash
git add .
git commit -m "Commit message"
git push origin fix/your-branch
```
