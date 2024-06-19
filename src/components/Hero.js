import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Hero() {
  return (
    <section id="home">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://smktibazma.sch.id/static/media/masjid.d157934d98cee11f144c.jpg"
            alt="Masjid & Gedung Sekolah"
          />
          <Carousel.Caption>
            <h3>Masjid & Gedung Sekolah</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://smktibazma.sch.id/static/media/asrama.d1fa6eec69bfc5732828.jpg"
            alt="Gedung Asrama"
          />
          <Carousel.Caption>
            <h3>Gedung Asrama</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://smktibazma.sch.id/static/media/lapangan.8feef39bc2c2eaa90525.jpg"
            alt="Lapangan Olahraga"
          />
          <Carousel.Caption>
            <h3>Lapangan Olahraga</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Hero;
