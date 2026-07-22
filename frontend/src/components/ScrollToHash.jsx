import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { smoothScroll } from "../utils/smoothScroll";

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const element = document.getElementById(hash.substring(1));

    if (!element) return;

    setTimeout(() => {
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        90;

      smoothScroll(y, 900);
    }, 100);
  }, [hash]);

  return null;
}

export default ScrollToHash;