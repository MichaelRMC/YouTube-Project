import React from 'react'l

const Modal = (props) => {
  const [error, setError] = useState()
  const [click, setClick] = useState()
  return (
    <section>
      <FancyBorder className="modal-container">
        <header>
          <h2> We're Sorry. Unfortunately A Error Has Occurred. We Apologize for This Inconvenience. </h2>
        </header>
        <div className="modalBackdrop" onClick={props.onClose}/> 

          <p>Name and Comment fields are required</p>
        </div>
        <footer className="modal-close">
          <button type="button" onClick={props.onClose}>close</button>
        </footer>
      </FancyBorder>
    </section>

     const errorHandler = () => {
    setError(null)
  }

  return (
    <section>
      { error && <ErrorModal title={error.title} message={error.message} onClose={errorHandler} /> } 
      <form> 
      
         ........
         
      </form>
    </section>
  )
  );
};

export default Modal;
