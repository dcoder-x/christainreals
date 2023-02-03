import { Icon } from "@iconify/react";
import React from "react";
import { useNavigate } from "react-router";
import { Vectors, icons, images } from "../assets/assets";
import "../styles/payment.scss";
import { useEffect } from "react";

const Payments = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const accordion = document.querySelectorAll(".accordion");
    const accordionBtn = document.querySelectorAll(".accordion-btn");

    accordion.forEach((element, index) => {
      element.onclick = () => {
        element.classList.toggle("open");
        if (element.classList.contains("open")) {
          accordionBtn[index].innerHTML = "&minus;";
        } 
      };
    });
  });
  return (
    <main id="payments-page">
      <Icon
        onClick={(e) => {
          navigate("../settings");
        }}
        icon={"ic:baseline-subdirectory-arrow-left"}
        width={30}
        cursor={"pointer"}
      />
      <section className="subscription">
        <h1 className="page-title">Subscription</h1>
        <div className="bar-header">
          <h4>Free trial</h4>

          <p>1 day(s) more</p>
        </div>
        <div className="progressBar">
          <div
            className="progressDone"
            style={{
              width: `75%`,
            }}
          ></div>
        </div>
        <div className="charge">
          <i class="fas fa-wind-warning    "></i>
          your card will be  charged when the trial is over
          </div> 
        <section className="plans">
          <PlanCard
            title={"Basic plan"}
            expiryDate={"forever free"}
            price={"0"}
            active
          />
          <PlanCard
            title={"Premium"}
            expiryDate={"1 month plan"}
            price={"20"}
            active={false}
          />
          <PlanCard
            title={"Premium"}
            expiryDate={"3 month plan"}
            price={"45"}
            active={false}
          />
          <PlanCard
            title={"Premium"}
            expiryDate={"6 month plan"}
            price={"72"}
            active={false}
          />
          <PlanCard
            title={"Premium"}
            expiryDate={"12 month plan"}
            price={"108"}
            active={false}
          />
        </section>
        <section className="info">
          <div className="header">
            <p>Enable auto-renew</p>
            <div className="toggle-btn">
              <ToggleButton />
            </div>
          </div>
          <div className="text">
            This option; if checked will renew your subscription automatically
            once it ends
          </div>
        </section>
      </section>

      <section className="payment">
        <h1 className="page-title">Payment Methods</h1>
        <div className="cards">
          <CreditCard
            cardType={"Credit card"}
            cardNumber={"5555-4444-555-7788"}
            issuer={"visa"}
          />
          <CreditCard
            cardType={"Debit card"}
            cardNumber={"5555-4444-555-7788"}
            issuer={"mastercard"}
          />
          <div className="add-Card">
            <Icon icon={"material-symbols:add-circle-rounded"} width={50} />
          </div>
        </div>
      </section>
    </main>
  );
};

function PlanCard({
  title,
  price,
  onActivate,
  onCancel,
  buttonText,
  expiryDate,
  active,
  packageDescription,
  packageList
}) {
  return (
    <>
      <div className={`subscription ${active ? "active-card" : null}`}>
        <div className="header">
          <div className="title">
            <p className="plan-name">{title}</p>
            <p className="expiry-date">{expiryDate}</p>
          </div>
          <p className="price">
            &pound;
            {price}/Month
          </p>
        </div>
        <div class={`accordion`}>
          <div class="accordion-header">
            <div class="accordion-text">
              <Icon class="accordion-icon" icon={'material-symbols:info-outline'} color="white"/>
              <p>View subscription details</p>
            </div>
          </div>
          <div class="accordion-body">
            {!packageDescription?packageDescription:null}
            <ul>
              {
                packageList?
                packageList.map((list)=>{
                  return <li>{list}</li>
                }):
                null
              }
            </ul>
          </div>
        </div>
        <div className="action-btn">
          {active ? (
            <button className="cancel" onClick={onCancel}>
              {buttonText || "Cancel"}
            </button>
          ) : (
            <button className="activate" onClick={onActivate}>
              Activate
            </button>
          )}
          {active ? (
            <Icon
              className="active-tick"
              icon={"mdi:tick-circle"}
              width={30}
              color="
          "
            />
          ) : null}
        </div>
      </div>
    </>
  );
}

function CreditCard({
  cardType,
  issuer,
  cardNumber,
  onCancel,
  buttonText,
  expiryDate,
  active,
}) {
  return (
    <>
      <div className="credit-card">
        <p className="card-type">{cardType}</p>
        <div className="details">
          <div className="card-issuer">
            <img width={40} src={icons[issuer]} alt="issuer" />
          </div>
          <div className="card-number">{cardNumber}</div>
        </div>
        <div className="delete-card">
          <Icon icon={"material-symbols:cancel-rounded"} width={30} />
        </div>
      </div>
    </>
  );
}

//toggle button
function ToggleButton() {
  const [on, setOnState] = React.useState(false);
  const toggle = () => setOnState((o) => !o);
  return (
    <button class={on ? "on" : "off"} on={on} onClick={toggle}>
      <spin class="pin" />
    </button>
  );
}

export default Payments;
