import React from "react";
import ProfileCard from "./ProfileCard";
import { Link } from "react-router-dom";

const users = [
  {
    name: "Riya Moni",
    id: "BGD3409454",
    details: "18yrs, 5 ft 3 in / 160 cm, Sunni, Unmarried, Dhaka, Bangladesh",
    image:
      "https://global.matrimonycdn.com/membersphoto/common/2021/01/11/02/BGD996971_iuf189_TS_2.jpg",
  },
  {
    name: "Ishika Mahbub",
    id: "BGD3190157",
    details: "19yrs, 5 ft 1 in / 154 cm, Sunni, Unmarried, Dhaka, Bangladesh",
    image:
      "https://global.matrimonycdn.com/membersphoto/common/2020/12/27/18/BGD969153_qBQ587_TS_2.jpg",
  },
  {
    name: "Faizana Islam",
    id: "BGD3557632",
    details: "18yrs, 5 ft 2 in / 157 cm, Sunni, Unmarried, Dhaka, Bangladesh",
    image:
      "https://global.matrimonycdn.com/membersphoto/common/2021/01/09/11/BGD994792_HYn27_TS_6.jpg",
  },
];

export default function MobileView({ activeTat, matched }) {
  return (
    <div className="p-4 bg-white">
      <h1 className="font-semibold text-white-800 mb-2">
        Hand picked matches just for you
      </h1>
      {users.map((user) => (
        <Link to={`/profiledetail/search`}>
          <ProfileCard
            key={user.id}
            user={user}
            activeTat={activeTat}
            matched={matched}
          ></ProfileCard>
        </Link>
      ))}
    </div>
  );
}
