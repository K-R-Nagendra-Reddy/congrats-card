const element = (
  // Write your code here.
  <div className="bg-container col-12 col-md-5">
    <h1 className="heading">Congratulations</h1>
    <div className="card-container">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1 className="person-name">Kiran V</h1>
      <p className="details">
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
