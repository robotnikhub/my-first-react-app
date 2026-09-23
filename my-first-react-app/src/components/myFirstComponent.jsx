import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'

export function MyFirstComponent(props) {
    const [name, setName] = useState("")

    return (
            <div style={{margin: 20}}>
      <input className='form-control' type='text' placeholder="ZMUDA" value={name} onChange={(e) => setName(e.target.value)}></input>
      <p style={{fontSize: 20}}>Hello {name}</p>
      <input className='btn btn-secondary' onClick={(e) => setName("")} value="Hello"></input>
      <p>{props.param1}</p>
    </div>
    )
}