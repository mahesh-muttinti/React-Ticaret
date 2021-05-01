import {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import UserIcon from '../assets/register/user_profile_icon.svg'
import GoogleIcon from '../assets/header/google_icon.svg'
import FbIcon from '../assets/header/facebook_icon.svg'
export default function Login(props) {
    const [isClose, setIsClose] = useState(true)
    const [closeMenu, setCloseMenu] = useState(true)
    useEffect(() => {
        setCloseMenu(prevState => !prevState)
    }, [])
    if(isClose) { 
        return ReactDOM.createPortal(
            <div className="overlay-fixed-full">
            <div className="form-wrapper">
                    <div className="close-btn" onClick={() => setIsClose(prevState => !prevState)}>
                        <span>&times;</span>
                    </div>
                    <img src={UserIcon} alt="" className="user-icon-login" />
                    <form method="" className="form-control">
                        <input type="number" placeholder="Mobile Number" className="input-field" />
                        <input type="password" placeholder="Password" className="input-field" />
                        <button type="submit" className="form-btn">Login</button>
                    </form>
                    <div className="alternative-auths-wrapper">
                        <div>
                            <p className="paragraph">Forgot Password?</p>
                        </div>
                        <div>
                            <p className="paragraph">Need Account? Signup</p>
                        </div>
                        <div>
                            <button type="button" className="auth-btn">
                                <img src={GoogleIcon} alt="" />
                                <span className="paragraph">google</span>
                            </button>
                            <button type="button" className="auth-btn">
                                <img src={FbIcon} alt="" />
                                <span className="paragraph">facebook</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>,
            document.getElementById('portal')
        )
    } else {
        return ''
    }
}
