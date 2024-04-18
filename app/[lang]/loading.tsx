import React from "react";

interface LoadindProps { }

const Loadind: React.FC<LoadindProps> = () => {
    return (
        <div className="loading">
            <div className="loading-block">
                <div className="circle blue"></div>
            </div>
            <div className="loading-block">
                <div className="circle red"></div>
            </div>
            <div className="loading-block">
                <div className="circle green"></div>
            </div>
        </div>
    );
}

export default Loadind;