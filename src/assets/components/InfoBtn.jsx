import React from 'react'

export default function InfoBtn() {

    function handleClickBoom() {
        const explosion = document.createElement('div');
        explosion.classList.add('explosion');
        document.body.appendChild(explosion);
        window.alert("Questa Progetto è un tipo di esempio nella realizzazione nella disposizione in route con React in maniera Dinamica.");
    }

  return (
    <>
    <button className="info-button" id='btn' onClick={handleClickBoom}>i</button>
    </>
  )
}
