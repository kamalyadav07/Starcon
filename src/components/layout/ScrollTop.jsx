import { useEffect, useState } from "react";

function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggle);

    return () =>
      window.removeEventListener("scroll", toggle);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        onClick={scrollTop}
        className="fixed bottom-6 right-6 bg-[#1b365d] text-white px-4 py-3 z-50 shadow-lg"
      >
        SCROLL
      </button>
    )
  );
}

export default ScrollTop;