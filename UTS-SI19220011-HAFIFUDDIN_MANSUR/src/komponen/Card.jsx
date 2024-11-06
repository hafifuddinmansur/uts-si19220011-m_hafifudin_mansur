import React from "react";

export default function Card({ data, desc, src }) {
    return (

        <div className="card">
            <div className="card-body p-0">
                <div className="row">
                    <div className="col-3 my-auto">
                        <img src={src} alt="img" className="img-thumbnail" width="100%" />
                    </div>
                    <div className="col-9">
                        <h3>{data}</h3>
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}