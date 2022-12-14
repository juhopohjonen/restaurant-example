import { Card } from "react-bootstrap"

const MenuItem = ({ image, title, text, addCss }) => {
    return (
        <Card style={{ width: '25rem', ...addCss }}>
        <Card.Img variant="top" src={image} style={{ height: '16rem' }} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default MenuItem