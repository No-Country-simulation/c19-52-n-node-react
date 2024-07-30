
import { useState } from 'react';
import { Login } from './login';
import { Register } from './register';
import './styles.scss';
export default function ModalLogin({ closeModal = ()=>{} }) {
  const [mode, setMode] = useState('login');
  
  return (
    <>
      <div id="modal">
        <div className='body-modal-login'>
          <button className="close-btn" onClick={() => closeModal()} >&times;</button>
          {mode === 'login' && <Login setMode={setMode}/>}
          {mode === 'register' && <Register setMode={setMode}/>}
        </div>
      </div>
    </>

  );
}