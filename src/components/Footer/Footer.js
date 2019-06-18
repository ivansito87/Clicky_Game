//sets up the reusable Footer component
import React from "react";
import "./Footer.css";

const Footer = () => (
    <header className = "footer">
       {/* <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="h1 text-center">*/}
                        <p id="connect" className="display-4 pb-3 text-center text-light">Connect with me!</p>
                        <ul className="social-networks square spin-icon">
                            <li><a href="https://www.linkedin.com/in/ivan-rendon-368b53174/"
                                   className="icon-linkedin">LinkedIn</a></li>
                            <li><a href="https://www.linkedin.com/in/ivan-rendon-368b53174/"
                                   className="icon-twitter">Twitter</a></li>
                            <li><a href="https://www.facebook.com/ivan.rendon.319"
                                   className="icon-facebook">Facebook</a>
                            </li>
                            <li><a href="https://github.com/ivansito87" className="icon-twitch">Twitch</a></li>
                            <li><a href="https://github.com/ivansito87" className="icon-github">GitHub</a></li>
                            <li><a href="https://www.pinterest.com/ivansito87/" className="icon-pinterest">Pinterest</a>
                            </li>
                            <li><a href="https://stackoverflow.com/users/11216672/ivansito87?tab=profile"
                                   className="icon-instagram">Instagram</a></li>
                            <li><a href="https://gt.bootcampcontent.com/ivan.rendon" className="icon-vimeo">Vimeo</a>
                            </li>
                        </ul>
                        <h4 id="connect" className="text-center text-light my-0 pb-2">Copyright &copy; Ivan Rendon
                            2019
                        </h4>
                    {/*</div>
                </div>
            </div>
        </div>*/}
    </header>
);

export default Footer;