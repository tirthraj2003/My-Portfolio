import React from 'react'
import Card from 'react-bootstrap/Card'
import { ImPointRight } from 'react-icons/im'

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className='purple'>Tirthraj Trivedi </span>
            from <span className='purple'> Surat , Gujrat</span>
            <br />I am a pursuing BCA in FullStack Development in Swarnnim Startup And Innovation University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className='about-activity'>
              <ImPointRight /> Playing Outdoor Games
            </li>
            <li className='about-activity'>
              <ImPointRight /> Explore new Technologies
            </li>
            <li className='about-activity'>
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>
            "Create your own path in own way!"{' '}
          </p>
          <footer className='blockquote-footer'>Trivedi Tirthraj</footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
