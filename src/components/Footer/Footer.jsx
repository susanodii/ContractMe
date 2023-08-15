import linkedin from "../../assets/linkedin.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isSignUp = location.pathname.match(/\/(\w+\-)*sign-up/);
 
  return (
    <>
    { isSignUp ? ( <></>) : (
      <footer className="bg-blue500 px-20 pt-10 pb-4 font-inter text-white mt-24">
      <section className="flex items-baseline justify-between ">
        <div className="self-center">
          <h2 className="font-extrabold text-3xl font-bodoni"> ContractMe </h2>
        </div>

        <div className="flex-col justify-around">
          <div className="flex basis-[5%] mb-4">
            <span className="font-medium text-2xl ">For Clients</span>
          </div>

          <div className="flex flex-col gap-4 font-normal text-lg">
            <span>How to Hire</span>
            <span>Artisans Marketplace</span>
            <span className="payment-service">Payment Service</span>

            <span>Hire Nationwide</span>
            <span>Hire Locally</span>
          </div>
        </div>

        <div className="flex-col justify-around">
          <div className="flex basis-[5%] mb-4">
            <span className="font-medium text-2xl ">For Artisans</span>
          </div>

          <div className="flex flex-col gap-4 font-normal text-lg">
            <span>How to find Gigs</span>
            <span>How to send Proposals</span>
            <span>Request for Reviews</span>

            <span> Find Gigs Nationwide</span>
            <span> Find Gigs Locally</span>
          </div>
        </div>

        <div className="flex-col justify-around">
          <div className="flex basis-[5%] mb-4">
            <span className="font-medium text-2xl ">Resource</span>
          </div>

          <div className="flex flex-col gap-4 font-normal text-lg">
            <span>Help &amp; Support</span>
            <span>Success Stories</span>
            <span>ContractMe Review</span>

            <span> Community</span>
          </div>
        </div>

        <div className="flex-col justify-around">
          <div className="flex basis-[5%] mb-4">
            <span className="font-medium text-2xl ">Company</span>
          </div>

          <div className="flex flex-col gap-4 font-normal text-lg">
            <span>About Us</span>
            <span>Affiliate Brands</span>
            <span>Careers</span>
            <span>Contact Us</span>
          </div>
        </div>
      </section>

      <div className="flex gap-2 pb-9 mt-9 mb-3 border-b-2 ">
        <span className="font-medium text-lg">Connect with us</span>
        <img
          className="rounded-full flex justify-center items-center bg-white p-1"
          src={linkedin}
          alt=""
          />
        <img
          className="rounded-full flex justify-center items-center bg-white p-1"
          src={facebook}
          alt=""
          />
        <img
          className="rounded-full flex justify-center items-center bg-white p-1"
          src={instagram}
          alt=""
          />
        <img
          className="rounded-full flex justify-center items-center bg-white p-1"
          src={twitter}
          alt=""
        />
      </div>

      <div>
        <p className="text-center font-inter text-sm ">
          &copy; 2023 ContractMe Plc.
        </p>
      </div>
    </footer>
    )}
    </>
  )
};
export default Footer;
