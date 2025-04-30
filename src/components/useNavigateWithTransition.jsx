// hooks/useNavigateWithTransition.js
import { useNavigate } from "react-router-dom";

const useNavigateWithTransition = (startTransition, delay = 1000) => {
  const navigate = useNavigate();

  const navigateWithTransition = (path) => {
    startTransition(); // trigger curtain animation
    setTimeout(() => {
      navigate(path); // change the route after animation completes
    }, delay);
  };

  return navigateWithTransition;
};

export default useNavigateWithTransition;
