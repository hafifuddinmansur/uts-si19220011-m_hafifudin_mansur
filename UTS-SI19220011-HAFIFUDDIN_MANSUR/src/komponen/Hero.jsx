import React from "react";
import Tombol from './atoms/tombol';

export default function Hero({ title, desc, src }) {
    return (
        <div className="row py-5 px-4 bg-light">
            <div className="col-6">
                <h2 className="mb-5">{title}</h2>
                <p>{desc}</p>
                <div className="mt-5 py-3">
                    <Tombol className="btn btn-primary me-2">Produk Kami</Tombol>
                    <Tombol className="btn btn-outline-primary">Pesan Sekarang</Tombol>
                </div>
            </div>
            <div className="col-6">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://i.scdn.co/image/ab6761610000e5eb1698da6a6a04bf2edc35ed94" className="img-thumbnail d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/Mobile_Legends_Bang_Bang_logo.png" className="img-thumbnail d-block w-100" alt=".../" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://cdn.prod.website-files.com/65956e2711516206d2d1258f/666f43e449c093ea927ce13b_mobile%20legends%20-%20bang%20bang.webp" className="img-thumbnail d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}