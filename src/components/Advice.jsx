import '../App.css'
import { useState } from 'react';

const Advice = ({ advice, generate }) => {

  const [spin, setSpin] = useState(false);

  const animate = () => {
    setSpin(true);
    setTimeout(() => setSpin(false), 2000);
  }
  const buttonClick = () => {
    generate()
    setSpin(true);
    setTimeout(() => setSpin(false), 2000);
  }

  return (
    <>
      <div className='container'>
        <div className='advice'>
          <p className='adviceNumber'>ADVICE #{advice.id}</p>
          <p>"{advice.advice}"</p>
        </div>

        <div className='separator'>

        </div>
      </div>
      <div className='buttonContainer'>
        <button onClick={buttonClick} className={spin ? `spin` : null}>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733" /></svg>
        </button>
      </div>
    </>
  )
}

export default Advice