import { useEffect, useState } from "react";

export default function ProductAnimation({ trigger }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!trigger) return;

    setShow(true);

    const timeout = setTimeout(() => setShow(false), 1200);
    return () => clearTimeout(timeout);
  }, [trigger]); // se activará cada vez que trigger cambie

  return (
    <div
      className={`fixed top-4 left-1/2 -translate-x-1/2 px-4 py-2 text-white text-sm rounded-xl shadow-lg bg-green-500 transition-all duration-700 z-50 z-20
        ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}
      `}
    >
      Producto añadido exitosamente
    </div>
  );
}
