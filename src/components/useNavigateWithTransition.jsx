// hooks/useNavigateWithTransition.js
import { useNavigate } from "react-router-dom";

const useNavigateWithTransition = (startTransition, delay = 1000) => {
  const navigate = useNavigate();

  const navigateWithTransition = (path) => {
    startTransition();
    setTimeout(() => {
      navigate(path);
    }, delay);
  };

  return navigateWithTransition;
};

export default useNavigateWithTransition;
