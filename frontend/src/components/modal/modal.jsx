
import './styles.scss';
export default function Modal({ title='hola mundo', closeModal = ()=>{} }) {

  return (
    <>
      {/* <label htmlFor="mostrar-modal"> Ver modal </label>
      <input id="mostrar-modal" name="modal" type="radio" /> */}
      <div id="modal">
        <div className='body-modal'>
          <button className="close-btn" onClick={() => closeModal()} >&times;</button>

          <div className="main-container">
            
            <div className="checkbox-container">
              <h1>Donde guardar: {title}</h1>
              <label className="checkbox-wrapper secondary">
                <input type="checkbox" />
                <span className="custom-checkbox"></span>
                Listado creado 1
              </label>
              <label className="checkbox-wrapper success">
                <input type="checkbox" />
                <span className="custom-checkbox"></span>
                Listado creado 2
              </label>
              <label className="checkbox-wrapper warning">
                <input type="checkbox" />
                <span className="custom-checkbox"></span>
                Listado creado 3
              </label>
              <label className="checkbox-wrapper warning">
                <input type="checkbox" />
                <span className="custom-checkbox"></span>
                Listado creado 3
              </label>
              <label className="checkbox-wrapper warning">
                <input type="checkbox" />
                <span className="custom-checkbox"></span>
                Listado creado 3
              </label>
              <label className="checkbox-wrapper warning">
                <input type="checkbox" />
                <span className="custom-checkbox"></span>
                Listado creado 3
              </label>
              <label className="checkbox-wrapper warning">
                <input type="checkbox" />
                <span className="custom-checkbox"></span>
                Listado creado 3
              </label>
              <label className="checkbox-wrapper warning">
                <input type="checkbox" />
                <span className="custom-checkbox"></span>
                Listado creado 3
              </label>
              <label className="checkbox-wrapper warning">
                <input type="checkbox" />
                <span className="custom-checkbox"></span>
                Listado creado 3
              </label>
              <label className="checkbox-wrapper warning">
                <input type="checkbox" />
                <span className="custom-checkbox"></span>
                Listado creado 3
              </label>
              <label className="checkbox-wrapper warning">
                <input type="checkbox" />
                <span className="custom-checkbox"></span>
                Listado creado 3
              </label>
              <label className="checkbox-wrapper warning">
                <input type="checkbox" />
                <span className="custom-checkbox"></span>
                Listado creado 3
              </label>
              <label className="checkbox-wrapper warning">
                <input type="checkbox" />
                <span className="custom-checkbox"></span>
                Listado creado 3
              </label>
              <label className="checkbox-wrapper warning">
                <input type="checkbox" />
                <span className="custom-checkbox"></span>
                Listado creado 3
              </label>
              <label className="checkbox-wrapper warning">
                <input type="checkbox" />
                <span className="custom-checkbox"></span>
                Listado creado 3
              </label>
              <label className="checkbox-wrapper warning">
                <input type="checkbox" />
                <span className="custom-checkbox"></span>
                Listado creado 3
              </label>
              {/* 
              <p>{title}</p>
              <br />
              <p>{overview}</p>
              <br />
              <button onClick={() => setShowModal(false)}>Cerrar modal</button> */}
            </div>
          </div>
        </div>

      </div></>

  );
}