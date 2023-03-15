import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
  <li id="flip">
    <i>Flipkart</i>
  </li>
  <li>
    {" "}
    <i style={{ position: "relative", top: 25, left: 14, fontSize: 10 }}>
      Explore <i style={{ color: "yellow" }}> plus </i>
    </i>
  </li>
  <input type="text" placeholder="Search Your Product,Brand and many more" />
  <svg
    width={20}
    height={20}
    viewBox="0 0 17 18"
    className=""
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="#2874F1" fillRule="evenodd">
      <path
        className="_34RNph"
        d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"
      />
      <path
        className="_34RNph"
        d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"
      />
    </g>
  </svg>
  <button> login</button>
  <li className="demo">Become a seller</li>
  <li className="demo">More</li>
  <li className="demo">Cart</li>
</nav>

     
    </div>
  );
}

export default App;
