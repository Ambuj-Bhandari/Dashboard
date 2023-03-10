/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Image from "next/image";
import img1 from "../../../assets/images/portfolio/img1.jpg";
import img2 from "../../../assets/images/portfolio/img2.jpg";
import img3 from "../../../assets/images/portfolio/img3.jpg";
import img4 from "../../../assets/images/portfolio/img4.jpg";
import img5 from "../../../assets/images/portfolio/img5.jpg";
import img6 from "../../../assets/images/portfolio/img6.jpg";

const PortfolioComponent = () => {
  return (
    <div>
      <div className="spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Internships Available</h1>
              <h6 className="subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laboriosam sit labore, non consequuntur atque qui velit, quaerat laudantium quae provident optio alias dolorum officiis excepturi repellendus natus totam minus!
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="spacer">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
            </Col>
          </Row>
          <Row className="m-t-40">
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={img2}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">
                    ABC
                  </h5>
                  <p className="m-b-0 font-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro quibusdam totam reiciendis provident mollitia nesciunt accusamus, repellendus nisi tempore. Autem molestias doloremque ratione excepturi vel minus at placeat eligendi veniam?</p>
                  <p className="m-b-0 font-14">Location: New York</p>
                  <p className="m-b-0 font-14">Duration: 6 weeks</p>
                  <p className="m-b-0 font-14">Application Deadline: 10th of august 2023</p>
                  <a className="m-b-0 font-14">Learn More</a>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={img3}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                <h5 className="font-medium m-b-0">
                    ABC
                  </h5>
                  <p className="m-b-0 font-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro quibusdam totam reiciendis provident mollitia nesciunt accusamus, repellendus nisi tempore. Autem molestias doloremque ratione excepturi vel minus at placeat eligendi veniam?</p>
                  <p className="m-b-0 font-14">Location: New York</p>
                  <p className="m-b-0 font-14">Duration: 6 weeks</p>
                  <p className="m-b-0 font-14">Application Deadline: 10th of august 2023</p>
                  <a className="m-b-0 font-14">Learn More</a>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={img3}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                <h5 className="font-medium m-b-0">
                    ABC
                  </h5>
                  <p className="m-b-0 font-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro quibusdam totam reiciendis provident mollitia nesciunt accusamus, repellendus nisi tempore. Autem molestias doloremque ratione excepturi vel minus at placeat eligendi veniam?</p>
                  <p className="m-b-0 font-14">Location: New York</p>
                  <p className="m-b-0 font-14">Duration: 6 weeks</p>
                  <p className="m-b-0 font-14">Application Deadline: 10th of august 2023</p>
                  <a className="m-b-0 font-14">Learn More</a>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={img4}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                <h5 className="font-medium m-b-0">
                    ABC
                  </h5>
                  <p className="m-b-0 font-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro quibusdam totam reiciendis provident mollitia nesciunt accusamus, repellendus nisi tempore. Autem molestias doloremque ratione excepturi vel minus at placeat eligendi veniam?</p>
                  <p className="m-b-0 font-14">Location: New York</p>
                  <p className="m-b-0 font-14">Duration: 6 weeks</p>
                  <p className="m-b-0 font-14">Application Deadline: 10th of august 2023</p>
                  <a className="m-b-0 font-14">Learn More</a>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={img5}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                <h5 className="font-medium m-b-0">
                    ABC
                  </h5>
                  <p className="m-b-0 font-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro quibusdam totam reiciendis provident mollitia nesciunt accusamus, repellendus nisi tempore. Autem molestias doloremque ratione excepturi vel minus at placeat eligendi veniam?</p>
                  <p className="m-b-0 font-14">Location: New York</p>
                  <p className="m-b-0 font-14">Duration: 6 weeks</p>
                  <p className="m-b-0 font-14">Application Deadline: 10th of august 2023</p>
                  <a className="m-b-0 font-14">Learn More</a>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={img6}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                <h5 className="font-medium m-b-0">
                    ABC
                  </h5>
                  <p className="m-b-0 font-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro quibusdam totam reiciendis provident mollitia nesciunt accusamus, repellendus nisi tempore. Autem molestias doloremque ratione excepturi vel minus at placeat eligendi veniam?</p>
                  <p className="m-b-0 font-14">Location: New York</p>
                  <p className="m-b-0 font-14">Duration: 6 weeks</p>
                  <p className="m-b-0 font-14">Application Deadline: 10th of august 2023</p>
                  <a className="m-b-0 font-14">Learn More</a>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PortfolioComponent;
