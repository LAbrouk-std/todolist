import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function CheckboxComponent() {
    return (
        <div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Faire les courses du mois
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                    Partir chez le médecin
                </label>
            </div>
        </div>
    );
}

export default CheckboxComponent;

