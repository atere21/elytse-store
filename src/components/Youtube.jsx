import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Youtube = () => {
  return (
    <div>
        <Container>
      <div className="ratio ratio-16x9">
            <iframe src="https://www.youtube.com/embed/EhHjXzu98JA"
            title="YouTube video" allowfullscreen>
            </iframe>
        </div>
        </Container>
    </div>
  )
}

export default Youtube

{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/EhHjXzu98JA"
 title="YouTube video player" frameborder="0"
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}