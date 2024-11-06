import React from "react";
import Card from "./card";

export default function SectionPerusahaan({ title, desc }) {
    return (
        <div className="row py-5 px-4">
            <div className="col-12 text-center">
                <h3 className="page-title mb-3">{title}</h3>
                <p>{desc}</p>
            </div>
            <div className="col-lg-3 mt-5">
                <Card data="123+" desc="Happy Customer" src="https://static.vecteezy.com/system/resources/previews/008/302/422/original/eps10-red-user-solid-icon-or-logo-in-simple-flat-trendy-modern-style-isolated-on-white-background-free-vector.jpg"></Card>
            </div>
            <div className="col-lg-3 mt-5">
                <Card data="200+" desc="Happy Customer" src="https://static.vecteezy.com/system/resources/previews/008/302/422/original/eps10-red-user-solid-icon-or-logo-in-simple-flat-trendy-modern-style-isolated-on-white-background-free-vector.jpg"></Card>
            </div>
            <div className="col-lg-3 mt-5">
                <Card data="800+" desc="Happy Customer" src="https://static.vecteezy.com/system/resources/previews/008/302/422/original/eps10-red-user-solid-icon-or-logo-in-simple-flat-trendy-modern-style-isolated-on-white-background-free-vector.jpg"></Card>
            </div>
            <div className="col-lg-3 mt-5">
                <Card data="300+" desc="Happy Customer" src="https://static.vecteezy.com/system/resources/previews/008/302/422/original/eps10-red-user-solid-icon-or-logo-in-simple-flat-trendy-modern-style-isolated-on-white-background-free-vector.jpg"></Card>
            </div>
        </div>
    );
}