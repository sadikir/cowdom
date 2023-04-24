import "./billing.css"
import Payment from "./Payment"
const Billing = () => {
  return (
    <>
      <div className="billing-wrapper">
        <h1>Billing</h1>
        <div className=" actual-billing home-billing-wrapper">
          <i class="fa-solid fa-credit-card"></i>
          <ul>
            <li>Next Billing Date:</li>
            <li>12/Jan/2023</li>
          </ul>
        </div>
        <div className="payment-type-wrapper">
          <h4>Payment type:</h4>
          <div className="payment-method">
            <i class="billing-credit-icon fa-solid fa-credit-card"></i>
            <span>
              <i class="fa-solid fa-circle"></i>
              <i class="fa-solid fa-circle"></i>
              <i class="fa-solid fa-circle"></i>
              <i class="fa-solid fa-circle"></i>
              <i class="fa-solid fa-circle"></i>
              <i class="fa-solid fa-circle"></i>
              <i class="fa-solid fa-circle"></i>
              <i class="fa-solid fa-circle"></i>
              <i class="fa-solid fa-circle"></i>
              <i class="fa-solid fa-circle"></i>
              <p>3107</p>
            </span>

            <button>Modify</button>
          </div>

        </div>
        <div className="payment-history-wrapper">
          <div>
            <h4>Payment History</h4>
          </div>
          <Payment />
          <Payment />
          <Payment />
          <Payment />
          <Payment />
          <Payment />
          <Payment />
          <Payment />
          <Payment />
          <Payment />
        </div>
      </div>
    </>
  )
}
export default Billing