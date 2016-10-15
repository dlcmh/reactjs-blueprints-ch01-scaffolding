# ReactJS Blueprints - Chapter 1 - Scaffolding code

Based on the book <a href="https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=reactjs+blueprints&tag=0a0-20" rel="nofollow">ReactJS Blueprints</a>

Check the [commit history](https://github.com/dlcmh/reactjs-blueprints-ch01-scaffolding/commits/master) for the code sections that correspond to the development workflow steps below

## Development workflow steps

Create an `npm` project

    npm init


Install dependencies:

    npm install --save babelify@7.2.0 browserify-middleware@7.0.0 \
                       express@4.13.3 react@0.14.3 reactify@1.1.1 \
                       browser-sync@2.10.0 babel-preset-react@6.3.13 \
                       babel-preset-es2015@6.3.13 browserify@12.0.1 \
                       react-dom@0.14.3 watchify@3.6.1

`.babelrc` file:

    {
      "presets": ["es2015","react"]
    }

Create a server file


Create a development directory


Create our base `app.jsx` file


Run the server
