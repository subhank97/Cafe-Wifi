import React from 'react';
import ReactDOM from 'react-dom'

class PlaceList extends React.Component {
    render() {
      return (
        <p> Generate List Here </p>
      );
    }
  }
 
  const placesList = ReactDOM.createRoot(document.getElementById("places-list-container"));
  placesList.render(<PlaceList />);