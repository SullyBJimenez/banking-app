import { Card } from "./context.js";
import piggy from "../images/piggy.jpg";
import computer from "../images/computer.jpg";
import plant from "../images/plant.jpg";
import styled from "styled-components";

const ImageStyle = styled.img`
  width: 90%;
  height: 500px;
  object-fit: cover;
  border-style: solid;
  border-radius: 30px;
`;

export function Home() {
  return (
    <Card
      bgcolor="primary"
      txtcolor="black"
      header="Bank De Sully"
      title="Welcome to the bank"
      text="You can use this bank"
      body={
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <ImageStyle src={piggy} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <ImageStyle src={computer} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <ImageStyle src={plant} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      }
    />
  );
}
