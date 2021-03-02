import React from 'react';
// import ReactDom from 'react-dom';
import { Works } from "./components/Works";

export function App() {
    return(
        <>
            <Works />
            <section id="about">
                <div className="inner">
                    <h1>ABOUT</h1>
                    <img src="" alt="aboutImage"/>
                    <div className="textArea">
                        <p className="ttl">title</p>
                        <span className="discription">
                            discription
                        </span>
                    </div>
                </div>
            </section>{/*<About /> */}
            <section id="contact">
                <div className="inner">
                    <h1>CONTACT</h1>
                    <img src="./img/" alt="contactImage"/>
                    <form action="/" method="post">
                        <label htmlFor="name">お名前
                        <input type="text"/>
                        </label>
                        <label htmlFor="email">メールアドレス
                        <input type="email" name="email"/>
                        </label>
                        <label htmlFor="contents">お問い合わせ内容
                        <textarea name="contents" cols="30" rows="10"></textarea>
                        </label>
                        <input type="submit" value="確認"/>
                    </form>
                </div>
            </section>{/*<Contact /> */}
            <section id="blog">
                <div className="inner">
                    <h1>BLOG</h1>
                </div>
            </section>{/*<Blog /> top側でいいかも*/}
        </>
    );
}