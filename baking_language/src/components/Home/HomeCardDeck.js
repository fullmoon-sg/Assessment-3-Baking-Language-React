import React from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'

export default function HomeCardDeck() {
    return (
        <div>
            <CardDeck>
  <Card>
    <Card.Img variant="top" src="https://res.cloudinary.com/fullmoon/image/upload/v1612538888/carousell/Elsa_1_ni172s.jpg" />
    <Card.Body>
      <Card.Title>Elsa, Let it Snow</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://res.cloudinary.com/fullmoon/image/upload/v1612538888/carousell/Beehive4_mmeqhg.jpg" />
    <Card.Body>
      <Card.Title>My Lovely Beehive</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://res.cloudinary.com/fullmoon/image/upload/v1612538888/carousell/Bunny_Cake_3_esjywj.jpg" />
    <Card.Body>
      <Card.Title>Bunny Funny</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
   
  </Card>
</CardDeck>
        </div>
    )
}
