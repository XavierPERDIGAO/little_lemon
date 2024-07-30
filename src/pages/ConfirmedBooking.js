import ok from "../images/ok.png"

const ConfirmedBooking = () => {
    return (
      <section className="page">
        <figure>
          <img id="ok-image" src={ok} alt="OK icon"/>
        </figure>
        <h3 class="middle">Your reservation is now confirmed!</h3>
      </section>
    );
  };
  
  export default ConfirmedBooking;