import { useState } from "react"
import { useDispatch } from "react-redux"
import Logo from "../../../../assets/header/logo.png"
import LocationIcon from "../../../../assets/header/location.svg"
import UserIcon from "../../../../assets/header/user.svg"
import BurgerMenuIconWhite from "../../../../assets/header/burger_icon_white.svg"
import Option1Full from "../../../../assets/header_menu/booked_ticket_full.svg"
import Option2Full from "../../../../assets/header_menu/ticket_history_full.svg"
import Option3Full from "../../../../assets/header_menu/about_us.svg"
import Option4Full from "../../../../assets/header_menu/settings.svg"
import ProfileIcon from "../../../../assets/header/user_icon_full.svg"
import UserIconFullInvert from "../../../../assets/header/user_full_invert.svg"
import { useHistory } from "react-router-dom"
import Location from "../location"
import { logout } from "../../../../redux/actions/user.actions"
import style from "./index.module.css"

const Menu = ({ fullName }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  return (
    <>
      <div className={style.overlayFixed}>
        <div className={style.subMenuWrapper}>
          <div>
            <p>{fullName}</p>
            <div
              className={style.profileIcon}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <img
                src={ProfileIcon}
                style={{
                  width: "19px",
                  margin: "auto",
                }}
                alt="profile-avatar"
              />
              <span
                style={{ color: "rgba(255, 255, 255, .52)" }}
                className={style._10px}
              >
                Profile
              </span>
            </div>
          </div>
          <div>
            <div
              className={style.enableCursor}
              onClick={() => history.push("/ticaretor/booked-tickets")}
            >
              <img src={Option1Full} alt="" />
              <p className={style.enabled}>Booked tickets</p>
            </div>
            <div
              className={style.enableCursor}
              onClick={() => history.push("/ticaretor/tickets-history")}
            >
              <img src={Option2Full} alt="" />
              <p className={style.enabled}>Tickets history</p>
            </div>
            <div
              className={style.enableCursor}
              onClick={() => history.push("/about")}
            >
              <img src={Option3Full} alt="" />
              <p className={style.enabled}>About Us</p>
            </div>
            <div
              className={`${style.enableCursor} ${style.lastOption}`}
              onClick={() => history.push("/ticaretor/settings")}
            >
              <img src={Option4Full} alt="" />
              <p className={style.enabled}>Settings</p>
            </div>
            <div
              className={style.btnEnabled}
              onClick={() => dispatch(logout())}
            >
              <button style={{ cursor: "pointer" }}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default function Header() {
  const [isClicked, setIsClicked] = useState(false)
  const [isLocationPopup, setIsLocationPopup] = useState(false)
  const history = useHistory()
  const fullName = JSON.parse(sessionStorage.getItem("userData"))?.name
  return (
    <header>
      <div style={{ cursor: "pointer" }}>
        <span onClick={() => history.push("/")}>
          <img src={Logo} alt="" />
        </span>
      </div>
      <div>
        <div className={style.locationOption}>
          <div onClick={() => setIsLocationPopup(!isLocationPopup)}>
            <img src={LocationIcon} alt="" />
          </div>
          {isLocationPopup && <Location />}
        </div>
        <span className={style.fullName}>{fullName}</span>
        <div
          style={{ backgroundColor: "var(--gray-bg-color)" }}
          className={
            isClicked
              ? `${style.subMenuOption} ${style.activeBg}`
              : `${style.subMenuOption}`
          }
          onClick={() => setIsClicked((prevState) => !prevState)}
        >
          <div>
            <img
              style={{ marginRight: "1rem" }}
              src={BurgerMenuIconWhite}
              alt=""
            />
            <img src={isClicked ? UserIcon : UserIconFullInvert} alt="" />
          </div>
          {isClicked && <Menu fullName={fullName} />}
        </div>
      </div>
    </header>
  )
}
