import React from "react";

const Tombol = ({ children, onClick, className }) => (
    <button className={className}
        onClick={onClick}
    >
        {children}
    </button>
);
export default Tombol;