import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollTop = (lenisRef) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (lenisRef?.current) {
      lenisRef.current.scrollTo(0);
    }
  }, [pathname, lenisRef]);
};

export default useScrollTop;