import { Col, Container, Form, Row } from 'react-bootstrap'
import './Header.css'


type HeaderProps = { options: { value: number; text: string }[] }

function Header({ options }: HeaderProps) {
    return (
        <Container className='header'>
            <Row className='h-100'>
                <Col className='text-end'>Набор:</Col>
                <Col><Form.Control
                    as="select"
                >
                    {options.map(op => <option value={'option' + op.value}>{op.text}</option>)}
                </Form.Control></Col>
            </Row>
        </Container >
    )
}

export default Header
