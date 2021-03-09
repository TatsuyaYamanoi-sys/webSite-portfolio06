import React from 'react';
// import ReactDom from 'react-dom';
import { Works } from "./components/Works";

export function App() {
    return(
        <>
            <section className="about">
                <div className="inner">
                    <h1>ABOUT</h1>
                    <div className="about__card">
                <img src="" alt="aboutImage"/>
                <div className="textArea">
                    <p className="ttl">～とは</p>
                    <span className="discription">
                        discription
                    </span>
                </div>
                </div>
                <div className="about__card">
                    <img src="" alt="aboutImage"/>
                    <div className="textArea">
                        <p className="ttl">クリエイター</p>
                        <span className="discription">
                            discription
                        </span>
                    </div>
                </div>
                <div className="about__card">
                    <img src="" alt="aboutImage"/>
                    <div className="textArea">
                        <p className="ttl">title</p>
                        <span className="discription">
                            discription
                        </span>
                    </div>
                </div>
            </div>
            </section>{/*<About /> */}
            <Works />
            <section className="contact">
                <div className="inner">
                    <h1>CONTACT</h1>
                    <img src="./img/" alt="contactImage"/>
                    <form action="./ajax.php" method="post">
                        <label htmlFor="name">お名前
                        <input type="text" name="name"/>
                        </label>
                        <label htmlFor="email">メールアドレス
                        <input type="email" name="email"/>
                        </label>
                        <label htmlFor="message">お問い合わせ内容
                        <textarea name="message" cols="30" rows="10"></textarea>
                        </label>
                        <input type="submit" value="確認"/>
                    </form>
                </div>
            </section>{/*<Contact /> */}
            <section className="blog">
                <div className="inner">
                    <h1>BLOG</h1>
                </div>
            </section>{/*<Blog /> top側でいいかも*/}
        </>
    );
}