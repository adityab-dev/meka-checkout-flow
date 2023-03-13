import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import welcome from "./assets/done.png";
import shipping from "./assets/Content.png";
import not from "./assets/not.png";

import nortonIcon from "../src/assets/Norton Icon.png";
import "./App.css";

function App() {
  return (
    <main className="App">
      <h1 className="app-heading">How should we send the order?</h1>

      <span className="">
        <p className="app-heading-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
      </span>

      {/* <section className="status-indicator">
        <ul className="status-list">
          <li className="status-item">
            <img src={welcome} alt="progress" />
          </li>
          <li className="status-item">
            <img src={shipping} alt="progress" />
          </li>
          <li className="status-item">
            <img src={not} alt="progress" />
          </li>
          <li className="status-item">
            <img src={not} alt="progress" />
          </li>
        </ul>
      </section> */}

      <section className="progress-bar">
        <ul className="progress-list">
          <li className="progress-item">
            <div className="status-indicator">
              <img src={welcome} alt="progress" />
              <div>Welcome</div>
            </div>
          </li>
          <li className="progress-item curent-status">
            <div className="status-indicator">
              <img src={shipping} alt="progress" />
              <div>Shipping</div>
            </div>
          </li>
          <li className="progress-item">
            <div className="status-indicator">
              <img src={not} alt="progress" />
              <div>Payment</div>
            </div>
          </li>
          <li className="progress-item">
            <div className="status-indicator">
              <img src={not} alt="progress" />
              <div>Order</div>
            </div>
          </li>
        </ul>
      </section>

      <section className="payment">
        <h2 className="pay-heading">Shipping Method</h2>
        <form>
          <section className="payment-plan selected-plan">
            <input
              className="radio-inputs"
              type="radio"
              value="1"
              id="1"
              name="pay-mode"
            />
            <label htmlFor="1" className="pay-description">
              <p className="pay-desc-top">
                <strong>€3.99</strong> UPS
              </p>
              <p>USPS 1st Class With Tracking</p>
              <p>(5 - 13 days)</p>
            </label>
          </section>

          <section className="payment-plan">
            <input
              className="radio-inputs"
              type="radio"
              value="2"
              id="2"
              name="pay-mode"
            />
            <label htmlFor="2" className="pay-description">
              <p className="pay-desc-top">
                <strong>€4.99</strong> DHL
              </p>
              <p>Business Parcell with Tracking</p>
              <p>(1-3 days)</p>
            </label>
          </section>
        </form>

        <footer className="pay-footer">
          <img src={nortonIcon} alt="Norton Security" />

          <button type="button" className="footer-btns back-btn">
            <AiOutlineArrowLeft />
            Back
          </button>
          <button type="button" className="footer-btns next-btn">
            Next
            <AiOutlineArrowRight />
          </button>
        </footer>
      </section>
    </main>
  );
}

export default App;
