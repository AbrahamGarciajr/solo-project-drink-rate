import { Link } from "react-router-dom";



export default function Footer() {

    return (
        <div className="footer-holder">
            <div >
                <Link className="footer-links"
                    to='https://github.com/AbrahamGarciajr/solo-project-drink-rate'
                    target='_blank'>
                    Github
                </Link>
            </div>
            <div >
                <Link className="footer-links"
                    to='https://www.linkedin.com/in/abraham-garcia-822a2a344/'
                    target='_blank'>
                    Linkedin
                </Link>
            </div>
        </div>
    )
}
