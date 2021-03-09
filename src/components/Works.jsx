import { React, useState } from "react";

export function Works () {
    const[showFlag, setShowFlag] = useState({"card1": true, "card2": true, "card3": true});

    const worksClickHandler = (e) => {
    console.log(e);
        if (e === 1) {
            setShowFlag({"card1": true})
        }else if (e === 2) {
            setShowFlag({"card2": true})
        }else if (e === 3) {
            setShowFlag({"card3": true})
        }
    }
    const card1DOM = (                
        <div className="works__card" onClick={() => worksClickHandler(1)}>
            <img src="" alt="worksImage"/>
            <div className="textArea">
                <p className="ttl">ONE</p>
                <span className="discription">
                    discription
                </span>
            </div>
        </div>
    );
    const card2DOM = (
        <div className="works__card" onClick={() => worksClickHandler(2)}>
            <img src="" alt="worksImage"/>
            <div className="textArea">
                <p className="ttl">TWO</p>
                <span className="discription">
                    discription
                </span>
            </div>
        </div>
    );
    const card3DOM = (
        <div className="works__card" onClick={() => worksClickHandler(3)}>
            <img src="" alt="worksImage"/>
            <div className="textArea">
                <p className="ttl">THREE</p>
                <span className="discription">
                    discription
                </span>
            </div>
        </div>
    );

    const topWorksDOM = (        
        <section className="works">
            <div className="inner">
                <h1>WORKS</h1>
                { showFlag["card1"] ? card1DOM : null }
                { showFlag["card2"] ? card2DOM : null }
                { showFlag["card3"] ? card3DOM : null }
            </div>
        </section>
    );

    const DOM = topWorksDOM ;
    return(
        DOM
    );
}

