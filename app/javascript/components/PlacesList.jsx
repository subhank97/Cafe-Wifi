import React from 'react';
import ReactDOM from 'react-dom/client'

class PlaceList extends React.Component {
    render() {
      return (
        <div> Generate List Here </div>
      );
    }
  }
 
  const placesList = ReactDOM.createRoot(document.getElementById("places-list-container"));
  placesList.render(<PlaceList />);