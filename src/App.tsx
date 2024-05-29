import { useState } from 'react';

function App() {
  const [meyveler, setMeyveler] = useState(['Çilek', 'Kiraz']);
  const [inputValue, setInputValue] = useState('');
  const [number, setNumber] = useState(1);

  function addMeyve() {
    setMeyveler([...meyveler, inputValue]);
  }

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function handleNumber() {
    setNumber(number + 1);
  }

  function deleteMeyve(meyveAdi) {
    const newMeyveler = meyveler.filter((meyve) => meyve !== meyveAdi);
    setMeyveler(newMeyveler);
  }
  return (
    <>
      <input type='text' value={inputValue} onChange={handleInput} />
      <button onClick={addMeyve}>Meyve Ekle</button>
      <button onClick={handleNumber}>Sayı Arttır</button>
      <span>{number}</span>

      <div>
        {meyveler.map((meyve, index) => (
          <div key={index} className='flex'>
            <h2>{meyve}</h2>
            <span onClick={() => deleteMeyve(index)}>x</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
