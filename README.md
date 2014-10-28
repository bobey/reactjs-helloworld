# Basic HelloWorld with ReactJS, Grunt and Browserify

This is code support for an article on my blog : [http://blog.overnetcity.com](http://blog.overnetcity.com/2014/10/30/reactjs-grunt-browserify-cdn/)

The article shows how to enhance the standard following HelloWorld, with `Grunt` and `Browserify` :

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.11.2/react.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.11.2/JSXTransformer.js"></script>
  </head>
  <body>
    <div id="content"></div>

    <script type="text/jsx">
      /** @jsx React.DOM */
      var hello = React.createClass({
        render: function() {
          return <div>Hello, {this.props.name}!</div>
        }
      });

      React.renderComponent(
        <hello name="World" />,
        document.getElementById('content')
      );
    </script>

  </body>
</html>
```

Bonus, the React library is loaded via a CDN while still used with browserify inside your code.
