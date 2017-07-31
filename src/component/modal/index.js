import React from 'react';

class Modal extends React.Component {
  render() {
    return (
      <div className="modal">
        <button onClick={this.props.close}> close </button>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default Modal;

<Modal close={() => console.log('booyea')}>
  <p> cool </p>
  <strong> gooyfooy </strong>
</Modal>
