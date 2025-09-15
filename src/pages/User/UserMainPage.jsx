import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import UserHeader from '../../components/User/UserHeader';
import ComicsDisplaySection from "../../components/User/WelcomePage/ComicsDisplaySection";
import TrendingComics from "../../components/User/WelcomePage/TrendingComics";
import Reviews from '../../components/User/WelcomePage/Reviews';
import LatestComics from "../../components/User/WelcomePage/LatestComics";
import PromotionSection from "../../components/User/WelcomePage/PromotionSection";
import UserFooter from '../../components/Global/UserFooter';

function UserMainPage() {

    const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/userInfo", { withCredentials: true })
      .then((response) => {
        let data = response.data;
        console.log(data.avatar);
        setUser(data);
      })
      .catch((err) => {
        console.error(err.response.data);
        window.location.href = "/landingPage";
      });
  }, []);

    return (
        <div>
            <UserHeader user={user}/>
            <ComicsDisplaySection />
            <TrendingComics />
            <Reviews/>
            <LatestComics />
            <PromotionSection/>
            <UserFooter />
        </div>
    );
}

export default UserMainPage;