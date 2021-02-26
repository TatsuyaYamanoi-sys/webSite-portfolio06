import { React } from "react";
import { ReactDOM } from "react-dom";

const topWorksDOM = (        
    <section id="works">
        <div className="inner">
            <h1>WORKS</h1>
            <img src="" alt="worksImage"/>
            <div className="textArea">
                <p className="ttl">title</p>
                <span className="discription">
                    discription
                </span>
            </div>
        </div>
    </section>
);

export function Works () {
    const DOM = '' ;
    const worksClickHandler = (e) => {
        if(e === ''){
            DOM = '' ;
        }else if(e === ''){
            DOM = '';
        }else{
            DOM = topWorksDOM ;
        }
    }
    return(
        DOM
    );
}