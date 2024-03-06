import React, { Fragment } from "react";
import  ReactDOM  from "react-dom/client";
import Footer from "./Footer";
import Header from "./Header";

function App() {
    const hello = "Hello World"
    function Click() {
        window.alert(hello)
    }
    return (
        
        <Fragment>

        
            <Header />
            <div className="w100 container mt-5 mb-5 d-flex justify-content-center">
                <button type="button" className="btn border-2 border-primary bg-info w-25" onClick={() => Click () }>Click Me</button>
            </div>
            <Footer />
        </Fragment>
    )
}




var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App/>)