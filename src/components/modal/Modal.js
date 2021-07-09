import React from 'react';
import PropTypes from 'prop-types';

import { Portal } from '../portal/Portal';
import { Icon } from '../icon/Icon';
import { Button } from '../button/Button';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './Modal.css';

const Modal = ({
  title, isOpen, onCancel, onSubmit, children, nameCancel, nameSubmit
}) => {

  return (
    <>
      { isOpen &&
        <Portal>
          <div className="modalOverlay">
            <div className="modalWindow">
              <div className="modalHeader">
                <div className="modalTitle">{title}</div>
                <Icon name="times" onClick={onCancel} />
              </div>
              <div className="modalBody">
                {children}
              </div>
              <div className="modalFooter">
                <Button onClick={onCancel} invert>{nameCancel}</Button>
                <Button onClick={onSubmit}>{nameSubmit}</Button>
              </div>
            </div>
          </div>
        </Portal>
      }
    </>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
  nameCancel: PropTypes.string,
  nameSubmit: PropTypes.string,
};

Modal.defaultProps = {
  title: 'Modal title',
  isOpen: false,
  onCancel: () => {},
  onSubmit: () => {},
  children: null,
  nameCancel: 'Cancel',
  nameSubmit: 'OK',
};

export { Modal };
