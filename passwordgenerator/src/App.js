import './App.css';
import { useState, useRef, useCallback, useEffect } from 'react';

function App() {

  const [length, setlength] = useState(0)
  const [pass, setPassword] = useState('');
  const [charinclude, setcharinclue] = useState(false);
  const [numinclude, setnuminclue] = useState(false);









  const passwordGenrator = useCallback(() => {

    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPSRS';
    if (charinclude) {
      str += '!@#$%&*';
    }
    if (numinclude) {
      str += '1234567890'
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numinclude, charinclude])

  useEffect(() => {
    passwordGenrator();
  }, [length, charinclude, numinclude])





  // 5. Render your component and use the incrementCounter function
  return (
    <>
      <h1>password genertaor</h1>

      <div className="container">

        <div className="box" style={{ "margin": 'auto', textAlign: 'center', marginTop: '20px', }}>


          <input type="text" value={pass} />

        </div>

        <div className="box2" style={{ textAlign: 'center', margin: 'auto' }} >
          <label htmlFor="length">Length:{length}</label>
          <input type="range" id="length" min={0} max={100} value={length} onChange={(e) => {
            setlength(e.target.value)
          }} />
          <label htmlFor="char">Include char</label>
          <input type="checkbox" name='char' id='char' onChange={() => {
            setcharinclue(prev => !prev)
          }} />
          <label htmlFor="number">Include Number</label>
          <input type="checkbox" id='number' name='number' onChange={() => {
            setnuminclue(prev => !prev);
          }} />
        </div>


      </div>
    </>
  );
}

export default App;
