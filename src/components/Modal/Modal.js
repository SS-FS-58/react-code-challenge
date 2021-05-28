import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

import './Modal.css';

function Modal({ children }) {
	const modalRoot = document.getElementById('modal');
	const [element] = useState(document.createElement('div'));

	useEffect(() => {
		modalRoot.appendChild(element);

		return () => modalRoot.removeChild(element);
	});

	return createPortal(children, element);
}

export default Modal;
