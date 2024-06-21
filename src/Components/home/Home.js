import React from "react";
import StylesHome from "./StylesHome.css";
// import image from "../../assets/netflixlogo.png";
import tv from "../../assets/tv.png";
import vedio from "../../assets/tv vedio.m4v";
import phone from "../../assets/mobile.jpg";
import device from "../../assets/device.png";
import child from "../../assets/childrean.png";
import vediodev from '../../assets/video-devices-in.m4v'
import Form from "./Form";
import Nav from "./Nav";
import Footer from "./Footer";

const Home = () => {
  return (
    <div  style={{ backgroundColor: "rgb(60, 60, 60)" }}>
      <div className="bg container-fluid">
        <Nav/>

        <div className="cen">
          <h1 className="d-flex justify-content-center display-3 ">
            
            <strong>Unlimited movies, TV shows and more</strong>
          </h1>
          <h3 className="d-flex justify-content-center p-2">
            Watch anywhere. Cancel anytime.
          </h3>
          <h4 className="d-flex justify-content-center p-2">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h4>
          <Form/>
        </div>
      </div>

      <div className="container-fluid mt-2 "style={{ backgroundColor: "black" }} >
        <div className="row">
          <div
            className="col-lg-6 mb-12 sm-12 align-self-center mt-5 "
            style={{ color: "white" }}
          >
            <h1 className="center">
              <strong>Enjoy on your Tv</strong>
            </h1>
            <h4 className="center mx-5 px-5 ">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </h4>
          </div>
          <div className="col-lg-6 mb-12 sm-12 py-5 center" >
            <img src={tv} alt="TV image" style={{ width: '100%', maxWidth: '500px',position:"absolute"}} className="mgb " />
            <div >
          <video width="358" height="350"  loop autoPlay muted className="mb-5" >
            <source
              src={vedio}
              type="video/mp4"/>
          </video>
        </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid mt-2 "
        style={{ backgroundColor: "black" }}
      >
        <div class="row">
          <div class="col-lg-6 mb-12 sm-12 py-5 center">
            <img src={phone} alt="TV image" style={{width: '100%', maxWidth: '500px'}}></img>
          </div>

          <div
            class="col-lg-6 mb-12 sm-12 align-self-center py-5"
            style={{ color: "white" }}
          >
            <h1 className="center mx-5 px-5">
              <strong>Download your shows to watch offline</strong>
            </h1>
            <h4 className="center  mx-5 px-5">
              Save your favourites easily and always have something to watch.
            </h4>
          </div>
        </div>
      </div>
      <div
        className="container-fluid mt-2 "
        style={{ backgroundColor: "black" }}
      >
        <div class="row">
          <div
            class="col-lg-6 mb-12 sm-12 align-self-center mt-5 "
            style={{ color: "white" }}
          >
            <h1 className="center">
              <strong>Watch everywhere</strong>
            </h1>
            <h4 className="center mx-5 px-5 ">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </h4>
          </div>
          <div class="col-lg-6 mb-12 sm-12 py-5 center mb-5">
            <img src={device} alt="TV image" style={{width: '100%', maxWidth: '500px',position:"absolute"}} className="my-5"></img>
            <div >
          <video  width="310" height="350"  loop autoPlay muted >
            <source
              src={vediodev}
              type="video/mp4"/>
          </video>
        </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid mt-2 "
        style={{ backgroundColor: "black" }}
      >
        <div class="row">
          <div class="col-lg-6 mb-12 sm-12 py-5 center">
            <img src={child} alt="TV image" style={{width: '100%', maxWidth: '500px'}}></img>
          </div>

          <div
            class="col-lg-6 mb-12 sm-12 align-self-center mt-5 py-5"
            style={{ color: "white" }}
          >
            <h1 className="center mx-5 px-5">
              <strong>Download your shows to watch offline</strong>
            </h1>
            <h4 className="center mx-5 px-5">
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </h4>
          </div>
        </div>
      </div>
      <div
        className="container-fluid mt-2"
        style={{ backgroundColor: "black" }}
      >
        <h1 className="display-4 center p-5" style={{ color: "white" }}>
          <strong>Frequently Asked Questions</strong>
        </h1>
        <div
          class="accordion accordion-flush acc p-5"
          id="accordionFlushExample"
          
        >
          <div class="accordion-item" >
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
                style={{backgroundColor:"hsl(0, 0%, 20%)", color:"white"}}
              >
                <h2>What is Netflix?</h2>
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body " style={{backgroundColor:"hsl(0, 0%, 20%)", color:"white"}}>
                
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more –
                on thousands of internet-connected devices.
              </div>
            </div>
          </div>
          <div class="accordion-item mt-2">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
                style={{backgroundColor:"hsl(0, 0%, 20%)", color:"white"}}
              >
                <h2>How much does Netflix cost?</h2>
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body" style={{backgroundColor:"hsl(0, 0%, 20%)", color:"white"}}>
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from ₹149 to ₹649 a month. No extra costs, no contracts.
              </div>
            </div>
          </div>
          <div class="accordion-item mt-2">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
                style={{backgroundColor:"hsl(0, 0%, 20%)", color:"white"}}
              >
                <h2>Where can I Watch?</h2>
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body" style={{backgroundColor:"hsl(0, 0%, 20%)", color:"white"}}>
                Watch anywhere, anytime. Sign in with your Netflix account to
                watch instantly on the web at netflix.com from your personal
                computer or on any internet-connected device that offers the
                Netflix app, including smart TVs, smartphones, tablets,
                streaming media players and game consoles.
                <br />
                You can also download your favourite shows with the iOS or
                Android app. Use downloads to watch while you're on the go and
                without an internet connection. Take Netflix with you anywhere.
              </div>
            </div>
          </div>
          <div class="accordion-item mt-2">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
                style={{backgroundColor:"hsl(0, 0%, 20%)", color:"white"}}
              >
                <h2>How do I cancel?</h2>
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body" style={{backgroundColor:"hsl(0, 0%, 20%)", color:"white"}}>
                
                Netflix is flexible. There are no annoying contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees – start or stop your
                account anytime.
              </div>
            </div>
          </div>
          <div class="accordion-item mt-2">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseFive"
                style={{backgroundColor:"hsl(0, 0%, 20%)", color:"white"}}
              >
                <h2>What can I Watch on Netflix?</h2>
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body" style={{backgroundColor:"hsl(0, 0%, 20%)", color:"white"}}>
                Netflix has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix originals,
                and more. Watch as much as you want, anytime you want.
              </div>
            </div>
          </div>
          <div class="accordion-item mt-2">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseSix"
                aria-expanded="false"
                aria-controls="flush-collapseSix"
                style={{backgroundColor:"hsl(0, 0%, 20%)", color:"white"}}
              >
                <h2 >Is Netflix good for kids?</h2>
              </button>
            </h2>
            <div
              id="flush-collapseSix"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body" style={{backgroundColor:"hsl(0, 0%, 20%)", color:"white"}}>
                The Netflix Kids experience is included in your membership to
                give parents control while kids enjoy family-friendly TV shows
                and films in their own space.
                <br />
                Kids profiles come with PIN-protected parental controls that let
                you restrict the maturity rating of content kids can watch and
                block specific titles you don’t want kids to see.
              </div>
            </div>
          </div>
        </div>
        <h4 className="center p-3" style={{ color: "white" }}>
          Ready to watch? Enter your email to create or restart your membership.
        </h4>
       <Form/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;




