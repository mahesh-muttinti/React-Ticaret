import React, { Component } from 'react'
import HalfStarIcon from '../assets/buy_ticket/half_star.svg'
import FullStarIcon from '../assets/buy_ticket/full_star.svg'
import EmptyStarIcon from '../assets/buy_ticket/empty_star.svg'
import TicketSmallIcon from '../assets/buy_ticket/movie_icon.svg'
import TimerSmallIcon from '../assets/buy_ticket/time_icon.svg'
import ChairIcon from '../assets/buy_ticket/chair_small_wave.svg'
export default class MovieDetails extends Component {
    render() {
        return (
            <>
                <div className="movie-details-hero-container">
                    <div className="auto-adjust-padding overlay">
                        <h2 className="__h1">
                            Chakra
                        </h2>
                        <div className="star-rating-container mg-4">
                            <img src={FullStarIcon} alt="star1" />
                            <img src={FullStarIcon} alt="star2" />
                            <img src={FullStarIcon} alt="star3" />
                            <img src={HalfStarIcon} alt="star4" />
                            <img src={EmptyStarIcon} alt="star5" />
                        </div>
                        <p className="small-p">Telugu, Tamil</p>
                        <div className="small-desc-container">
                            <div className="">
                                <img src={TicketSmallIcon} alt="" />
                                <span className="small-p l-1">Action Thriller</span>
                            </div>
                            <div className="">
                                <img src={TimerSmallIcon} alt="" />
                                <span className="small-p l-1">2h 10m</span>
                            </div>
                            <div className="">
                                <span className="small-p">UA</span>
                            </div>
                        </div>
                        <div className="small-p auto-fit-p l-2">
                            Chakra is a cyber-crime thriller where an officer is set on a mission to take down a bunch of goons who practise evil acts on the internet.
                        </div>
                    </div>
                    <div className="movie-details-chair-container">
                        <div className="chair-container">
                            <img src={ChairIcon} alt="" />
                        </div>
                    </div>
                </div>
                <div className="theatre-list-container auto-adjust">
                    <div className="date-wrapper">
                    {/* <i class="fa fa-angle-left"></i> */}
                        <div className="dates-scrollable-container">
                            <div className="small-p not-selected">
                                <span>Sat</span>
                                <span>27</span>
                                <span className="circle small"></span>
                            </div>
                            <div className="small-p this-selected">
                                <span>Sun</span>
                                <span>28</span>
                                <span className="circle large"></span>
                            </div>
                            <div className="small-p not-selected">
                                <span>Mon</span>
                                <span>29</span>
                                <span className="circle small"></span>
                            </div>
                        </div>
                    {/* <i class="fa fa-angle-right"></i> */}
                    </div>
                    <div className="search-bar-container">
                        <div className="search-wrapper">
                            <input type="text" placeholder="Search Theatres" name="theatreName" title="search theatres" className="search-bar-field" />
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div className="theatre-list-wrapper">
                        <div className="theatre-details-item-wrapper">
                            <div className="theatre-details">
                                <span className="theatre-name">AMB Cinema: Gachibowli</span>
                                <span className="theatre-location">Gachibowli - Miyapur Rd, Whitefields, Kohtaguda, Telangana 500084</span>
                            </div>
                            <div className="theatre-timings-wrapper">
                                <button className="theatre-timing-btn _100_percent">
                                    1:00PM
                                </button>
                                <button className="theatre-timing-btn _20_percent">
                                    4:00PM
                                </button>
                                <button className="theatre-timing-btn _50_percent">
                                    6:00PM
                                </button>
                                <button className="theatre-timing-btn _70_percent">
                                    10:00PM
                                </button>
                            </div>
                        </div>
                        <div className="theatre-details-item-wrapper">
                            <div className="theatre-details">
                                <span className="theatre-name">PVR Panjagutta - Hyderabad</span>
                                <span className="theatre-location">Central Mall, 5Th Floor, Panjagutta Cross Roa</span>
                            </div>
                            <div className="theatre-timings-wrapper">
                                <button className="theatre-timing-btn _70_percent">
                                    1:00PM
                                </button>
                                <button className="theatre-timing-btn _100_percent">
                                    4:00PM
                                </button>
                                <button className="theatre-timing-btn _50_percent">
                                    6:00PM
                                </button>
                                <button className="theatre-timing-btn _20_percent">
                                    10:00PM
                                </button>
                            </div>
                        </div>
                        <div className="theatre-details-item-wrapper">
                            <div className="theatre-details">
                                <span className="theatre-name">INOX Maheshwari Parmeshwari Mall - Kachiguda</span>
                                <span className="theatre-location">5th Floor, Maheshwari Parmeshwari, Kachiguda Cross Roads</span>
                            </div>
                            <div className="theatre-timings-wrapper">
                                <button className="theatre-timing-btn _50_percent">
                                    1:00PM
                                </button>
                                <button className="theatre-timing-btn _20_percent">
                                    4:00PM
                                </button>
                                <button className="theatre-timing-btn _20_percent">
                                    6:00PM
                                </button>
                                <button className="theatre-timing-btn _70_percent">
                                    10:00PM
                                </button>
                            </div>
                        </div>
                        <div className="theatre-details-item-wrapper">
                            <div className="theatre-details">
                                <span className="theatre-name">PVR Irrum Manzil - Khairatabad</span>
                                <span className="theatre-location">Level 5, Shop No.01, Hyderabad Next Galleria@Irrum Manzil</span>
                            </div>
                            <div className="theatre-timings-wrapper">
                                <button className="theatre-timing-btn _20_percent">
                                    1:00PM
                                </button>
                                <button className="theatre-timing-btn _50_percent">
                                    4:00PM
                                </button>
                                <button className="theatre-timing-btn _70_percent">
                                    6:00PM
                                </button>
                                <button className="theatre-timing-btn _20_percent">
                                    10:00PM
                                </button>
                            </div>
                        </div>
                        <div className="theatre-details-item-wrapper">
                            <div className="theatre-details">
                                <span className="theatre-name">PVR Musarambagh - New Malakpet</span>
                                <span className="theatre-location">Ts No 2,5 and 6, Ward No. 170</span>
                            </div>
                            <div className="theatre-timings-wrapper">
                                <button className="theatre-timing-btn _100_percent">
                                    1:00PM
                                </button>
                                <button className="theatre-timing-btn _20_percent">
                                    4:00PM
                                </button>
                                <button className="theatre-timing-btn _50_percent">
                                    6:00PM
                                </button>
                                <button className="theatre-timing-btn _70_percent">
                                    10:00PM
                                </button>
                            </div>
                        </div>
                        <div className="theatre-details-item-wrapper">
                            <div className="theatre-details">
                                <span className="theatre-name">PVR RK Cineplex - Banjara Hills</span>
                                <span className="theatre-location">RK Complex, Road No.2, Opp: L.V.Prasad Eye Institute</span>
                            </div>
                            <div className="theatre-timings-wrapper">
                                <button className="theatre-timing-btn _20_percent">
                                    1:00PM
                                </button>
                                <button className="theatre-timing-btn _100_percent">
                                    4:00PM
                                </button>
                                <button className="theatre-timing-btn _50_percent">
                                    6:00PM
                                </button>
                                <button className="theatre-timing-btn _100_percent">
                                    10:00PM
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
