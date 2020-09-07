/**
 * Component Generator
 */

/* eslint strict: ['off'] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an unconnected component (atoms, molecules)',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'list',
      name: 'folder',
      message: 'Where do you want to keep this component?',
      default: 'atoms',
      choices: () => ['Atoms', 'Molecules', 'HOC'],
    },
  ],
  actions: data => {
    // Generate index.js and index.test.js
    let componentTemplate = './component/stateless.js.hbs';

    // switch (data.type) {
    //   case 'Stateless Function': {
    //     componentTemplate = './component/stateless.js.hbs';
    //     break;
    //   }
    //   case 'HOC': {
    //     componentTemplate = './component/hoc.js.hbs';
    //     break;
    //   }
    //   default: {
    //     componentTemplate = './component/statelessHooks.js.hbs';
    //   }
    // }

    const actions = [
      {
        type: 'add',
        path: '../src/components/{{ folder }}/{{properCase name}}/src/index.js',
        templateFile: './component/index.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/components/{{ folder }}/{{properCase name}}/src/{{properCase name}}.js',
        templateFile: componentTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path:
          '../src/components/{{ folder }}/{{properCase name}}/__tests__/{{properCase name}}.test.js',
        templateFile: './component/test.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/components/{{ folder }}/{{properCase name}}/src/{{properCase name}}.story.mdx',
        templateFile: './component/story.mdx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/components/{{ folder }}/{{properCase name}}/src/{{properCase name}}.mock.js',
        templateFile: './component/mock.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/components/{{ folder }}/{{properCase name}}/src/{{properCase name}}.style.js',
        templateFile: './component/style.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/components/{{ folder }}/{{properCase name}}/package.json',
        templateFile: './component/package.json.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/components/{{ folder }}/{{properCase name}}/README.md',
        templateFile: './component/README.md.hbs',
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
