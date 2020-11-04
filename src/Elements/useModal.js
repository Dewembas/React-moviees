import { useState } from 'react';

const useModal = (props) => {
  const [isShowing, setIsShowing] = useState(null);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  }
};

export default useModal;