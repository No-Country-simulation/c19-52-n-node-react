
import { useState } from 'react';
import { Login } from './login';
import { Register } from './register';
import './styles.scss';
export default function ModalLogin({ title = '', error, loginUser = () => {}, closeModal = ()=>{} }) {
  const [mode, setMode] = useState('login');
  
  return (
    <>
      <div id="modal">
        <div className='body-modal-login'>
          <button className="close-btn" onClick={() => closeModal()} >&times;</button>
          {mode === 'login' && <Login title={title} error={error} loginUser={loginUser} setMode={setMode}/>}
          {mode === 'register' && <Register title={title} error={error} setMode={setMode}/>}
        </div>
      </div>
    </>

  );
}