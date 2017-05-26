var React = require('react');


var About = (props) => {
    return (
      <h3>About Component</h3>
      <p>This is a weather application build on React. I have built this for The
        Complete React Web App Developer Course.</p>
      <p>Here are some of the tools i used: </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the
          javascript framework used.
        </li>
        <a href="https://openweathermap.org">Open Weather App</a> I used Open
        Weather Map to search for weather data by city name.
      </ul>
    )
};

module.exports = About;
