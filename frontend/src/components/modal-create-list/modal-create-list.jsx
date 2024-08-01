
import { useState } from 'react';
import './styles.scss';
export default function ModalCreateList({ closeModal = ()=>{}, saveList = ()=>{} }) {
  const [title, setTitle] = useState('');

  const saveListButton = () => {
    saveList({ title });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const inputs = {
      title: setTitle
    };
    inputs[name](value);
  };
  return (
    <>
      {/* <label htmlFor="mostrar-modal"> Ver modal </label>
      <input id="mostrar-modal" name="modal" type="radio" /> */}
      <div id="modal">
        <div className='body-modal'>
          <button className="close-btn" onClick={() => closeModal()} >&times;</button>
          <div className="container">
            <div className="input-wrapper primary">
              <label htmlFor="input">Nombre de lista: </label>
              <input type="text" id="input" name='title' onChange={handleInputChange} placeholder="Ingrese nombre de lista ..." />
            </div>
            <div className="input-wrapper primary">
              <button onClick={saveListButton} className="px-5 py-2.5 bg-red-600  hover:bg-red-700 rounded-lg text-center font-medium block text-white">Guardar Lista</button>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}