import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'

export function Wycieczki(){

    const wycieczki = ["Kraków i Wieliczka", "Bieszczady", "Trójmiasto", "Zamki Dolnego Śląska"];
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    function rezerwujWycieczke() {
        if(number >=1 && number <= wycieczki.length){
            console.log(
                "Rezerwacja:", name, "wycieczka: ", number
            );
        }
        else {
            console.log("nieprawidlowy numer wycieczki");
        }
        
    }
    return (
<div style={{ padding: "20px" }}> 
        <h2>Dostępne wycieczki: {wycieczki.length}</h2>

        <ol>
                {wycieczki.map((wycieczka, index) =>
                <li key={index}>{wycieczka}</li>)}

        </ol>
        <form>
        <div className="form-group">
            <div className="mb-3">
            <label For="userName" className="form-label">Imię i nazwisko: </label>
            <input type="text" id="userName" className="form-control" value={name} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className="mb-3">
            <label For="tripNumber" className="form-label">Numer wycieczki: </label>
            <input id="tripNumber" type="number" className="form-control" value={number} onChange={(e) => setNumber(e.target.value)}></input>
            </div>
            <div className="mb-3">
                <input type="button" className="btn btn-primary" value="Rezerwuj" onClick={rezerwujWycieczke}></input>
            </div>
        </div>
        </form>
</div>
    )
}