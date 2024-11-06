import React from "react";

export default function Logo({ href, src, width }) {
    return (
        <a href={href}>
            <img src={src} alt="logo" width={width} />
        </a>
    );
}