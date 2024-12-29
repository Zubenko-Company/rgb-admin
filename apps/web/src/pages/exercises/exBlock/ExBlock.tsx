import './ExBlock.css'
import saveIcon from '../../../assets/save-icon.png'
import { Button, Form } from 'react-bootstrap'

function ExBlock({ exName, value }: { exName: string, value: number }) {
    return (
        <div className='block'>
            <table>
                <tr>
                    <th><p className='exName'>{exName}</p></th>
                    <th><Form.Control type="number" defaultValue={value}></Form.Control></th>
                    <th><Button variant="primary" onClick={() => alert(1)} ><img
                        src={saveIcon}
                        style={{ cursor: 'pointer' }}
                    /></Button></th>
                </tr>
            </table>
        </div >
    )
}

export default ExBlock
