import React, { useState, useRef } from "react";
import Banner from "./Shared/Banner";
import { FaAngleRight, FaBars, FaGripHorizontal } from "react-icons/fa";
import ActiveModal from "./Modals/ActiveModal";
import ProfileTypeModal from "./Modals/ProfileTypeModal";
import AgeFormModalCotent from "./Modals/AgeFormModalCotent";
import AgeFormModal from "./Modals/AgeFormModal";
import ActiveModalContent from "./Modals/ActiveModalContent";
import ProfileTypeModalcontent from "./Modals/ProfileTypeModalcontent";
import HeightModalContent from "./Modals/HeightModalContent";
import HeightModal from "./Modals/HeightModal";
import MaritalStatusContent from "./Modals/MaritalStatusContent";
import MaritalStatusModal from "./Modals/MaritalStatusModal";
import ShowMoreModalContent from "./Modals/ShowMoreModalContent";
import PageContentGrid from "./Contents/PageContentGrid";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-tabs/style/react-tabs.css";
import PageContent from "./Contents/PageContent";
import MobileView from "../Mobile/MobileDash/MobileView";
import PreferredProfessionMenu from "../Mobile/MobileDash/PreferredProfessionMenu";
import PreferredEducationMenu from "../Mobile/MobileDash/PreferredEducationMenu";
import PreferredLocationMenu from "../Mobile/MobileDash/PreferredLocationMenu";

const menus = [
  "Dashboard",
  "Matches",
  "Latest Matches",
  "Viewed",
  "Viewed not contacted",
  "Shortlist",
  "Viewed my profile",
  "Premium matches",
  "Mutaual matches",
  "Preferred profession",
  "Preferred eduction",
  "Preferred location",
];
const professions = [
  "Student",
  "Not working",
  "Officer",
  "Manager",
  "Executive",
  "Supervisor",
  "Nurse",
];
const educations = [
  "Secondary",
  "BBA",
  "LLB",
  "Higher secondary",
  "Bachelors",
  "Diploma",
];
const locations = [
  "Bangladesh",
  "Canada",
  "Saudi Arabia",
  "USA",
  "UK",
  "India",
  "Australia",
];
const matchedprofessions = [
  "Student",
  "Student",
  "Student",
  "not working",
  "not working",
  "not working",
  "Officer",
  "Officer",
  "Officer",
  "Manager",
  "Manager",
  "Manager",
  "Executive",
  "Executive",
  "Executive",
  "Supervisor",
  "Supervisor",
  "Supervisor",
  "Nurse",
  "Nurse",
  "Nurse",
];
const matchedEducations = [
  "BBA",
  "LLB",
  "Secondary",
  "Higher secondary",
  "Bachelors",
  "Diploma",
  "BBA",
  "LLB",
  "Secondary",
  "BBA",
  "LLB",
  "Higher secondary",
  "Bachelors",
  "Diploma",
  "Higher secondary",
];
const matchedLocations = [
  "Bangladesh",
  "Canada",
  "Saudi Arabia",
  "USA",
  "UK",
  "India",
  "Bangladesh",
  "Canada",
  "Saudi Arabia",
  "Australia",
  "USA",
  "UK",
  "USA",
  "UK",
];

export default function Matches() {
  const [isActive, setActive] = useState(false);
  const [profileType, setProfileType] = useState(false);
  const [ageForm, setAgeForm] = useState(false);
  const [isHeight, setIsheight] = useState(false);
  const [maritalStatus, setMaritalStatus] = useState(false);
  const [activeModal, setActiveModal] = useState(null); // Track which modal is open

  
    const [activeTat, setActiveTab] = useState("dashboard");
    const [profession, setProfession] = useState("student");
    const [matchedProfession, setMatchedProfession] = useState([]);
    const [education, setEducation] = useState("secondary");
    const [matchedEducation, setMatchedEducation] = useState([]);
    const [location, setLocation] = useState("bangladesh");
    const [matchedLocation, setMatchedLocation] = useState([]);
    const scrollRef = useRef(null);

  const [isGrid, setIsGrid] = useState(false);

  const handleLayout = () => {
    setIsGrid(!isGrid);
  };

  const showSpecificModal = (data) => {
    setActiveModal(activeModal === data ? null : data);
    setActive(data === "ActiveModalContent" ? true : false);
    setProfileType(data === "ProfileTypeModalcontent" ? true : false);
    setAgeForm(data === "AgeFormModalCotent" ? true : false);
    setIsheight(data === "HeightModalContent" ? true : false);
    setMaritalStatus(data === "MaritalStatusContent" ? true : false);
  };

  const handleProfession = (item) => {
    const lowerCaseItem = item.toLowerCase();
    setProfession(lowerCaseItem);

    const professionResult = matchedprofessions.filter(
      (matched) => lowerCaseItem === matched.toLowerCase()
    );
    setMatchedProfession(professionResult);
  };

  const handleEducation = (item) => {
    const lowerCaseItem = item.toLowerCase();
    setEducation(lowerCaseItem);
    const educationResult = matchedEducations.filter(
      (matched) => item.toLowerCase() === matched.toLowerCase()
    );
    setMatchedEducation(educationResult);
  };

  const handleLocation = (item) => {
    const lowerCaseItem = item.toLowerCase();
    setLocation(lowerCaseItem);
    const locationResult = matchedLocations.filter(
      (matched) => lowerCaseItem === matched.toLowerCase()
    );
    setMatchedLocation(locationResult);
  };

  const handleActiveTab = (tab) => {
    setActiveTab(tab.toLowerCase());
  };

  return (
    <>
      <div className="my-4 hidden sm:block">
        {/* Banner */}
        <Banner></Banner>

        {/* Main cotent start here */}
        <div className="grid grid-cols-8 sm:mt-0 lg:mt-4 px-2">
          <div className="sm:col-span-3 lg:col-span-2">
            {/* Sort section start */}
            <div>
              <h2 className="text-lg text-gray-600 font-bold">Sort</h2>
              <div className="border-t border-b mt-2 py-2 grid gap-2">
                <div className="form-control">
                  <label className="cursor-pointer flex items-center gap-1">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs checkbox-accent"
                      defaultChecked
                    />
                    <span className="label-text">Relevance (Recommended)</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="cursor-pointer flex items-center gap-1">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs checkbox-accent"
                    />
                    <span className="label-text">Recently Active</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="cursor-pointer flex items-center gap-1">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs checkbox-accent"
                    />
                    <span className="label-text">Newest profiles first</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="cursor-pointer flex items-center gap-1">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs checkbox-accent"
                    />
                    <span className="label-text">Oldest profiles first</span>
                  </label>
                </div>
              </div>
            </div>
            {/* Sort section end */}
            {/* Refine Search section sart */}
            <div className="border-b pb-2 mb-4">
              <h2 className="font-bold text-gray-600">Refine Search</h2>
            </div>
            {/* Show Profiles Created */}
            <div>
              <div className="collapse collapse-plus border border-gray-300 bg-gray-100">
                <input
                  type="checkbox"
                  className="peer min-h-0"
                  defaultChecked
                />
                <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                  Show Profiles Created
                </div>
                <div className="collapse-content">
                  <div className="grid gap-3">
                    <p className="flex items-center text-sm">
                      <FaAngleRight></FaAngleRight>{" "}
                      <a className="text-gray-500 hover:underline" href="#">
                        Within a day (32)
                      </a>
                    </p>
                    <p className="flex items-center text-sm">
                      <FaAngleRight></FaAngleRight>{" "}
                      <a className="text-gray-500 hover:underline" href="#">
                        Within a week (23)
                      </a>
                    </p>
                    <p className="flex items-center text-sm">
                      <FaAngleRight></FaAngleRight>{" "}
                      <a className="text-gray-500 hover:underline" href="#">
                        Within a month (544)
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Active section start */}
            <div className="mt-1 relative">
              <ActiveModalContent
                showSpecificModal={showSpecificModal}
              ></ActiveModalContent>
              {/* Active Modal */}
              {isActive && (
                <ActiveModal
                  showSpecificModal={showSpecificModal}
                ></ActiveModal>
              )}
            </div>
            {/* profile type section start */}
            <div className="mt-1 relative">
              <ProfileTypeModalcontent
                showSpecificModal={showSpecificModal}
              ></ProfileTypeModalcontent>
              {/* Profiletype Modal */}
              {profileType && (
                <ProfileTypeModal
                  showSpecificModal={showSpecificModal}
                ></ProfileTypeModal>
              )}
            </div>
            {/* age form section start */}
            <div className="mt-1 relative">
              <AgeFormModalCotent
                showSpecificModal={showSpecificModal}
              ></AgeFormModalCotent>
              {/* AgeForm Modal */}
              {ageForm && (
                <AgeFormModal
                  showSpecificModal={showSpecificModal}
                ></AgeFormModal>
              )}
            </div>
            {/* Height section start */}
            <div className="mt-1 relative">
              <HeightModalContent
                showSpecificModal={showSpecificModal}
              ></HeightModalContent>
              {/* Height Modal */}
              {isHeight && (
                <HeightModal setIsheight={setIsheight}></HeightModal>
              )}
            </div>
            {/* marital status section start */}
            <div className="mt-1 relative">
              <MaritalStatusContent
                showSpecificModal={showSpecificModal}
              ></MaritalStatusContent>
              {/* Marital modal */}
              {maritalStatus && (
                <MaritalStatusModal
                  setMaritalStatus={setMaritalStatus}
                ></MaritalStatusModal>
              )}
            </div>
            {/* Show more section start */}
            <div className="mt-1 relative">
              <ShowMoreModalContent
                activeModal={activeModal}
                showSpecificModal={showSpecificModal}
              ></ShowMoreModalContent>
            </div>
            {/* Refine Search section sart */}
          </div>

          {/* Main cotent start here */}
          <div className="sm:col-span-5 lg:col-span-6 px-2 lg:w-[760px]">
            <div>
              <h3 className="px-4 mb-3 text-xl font-semibold">
                Yet to be viewed profiles (343)
              </h3>
              <div>
                <div className="px-4 flex gap-3 border-b">
                  <button className="btn btn-sm bg-gray-100 hover:bg-gray-200 border border-gray-300 hover:border-gray-300 text-gray-800">
                    Preferred Profiles (343)
                  </button>
                  <button className="btn btn-sm bg-gray-100 hover:bg-gray-200 border border-gray-300 hover:border-gray-300 text-gray-800">
                    Matchwatches Profiles
                  </button>
                </div>
                <p className="ml-4 my-4">
                  Listed here are preferred member profiles that exactly match
                  your <a href="#">Partner preference</a>
                </p>
              </div>
              <div className="flex items-center justify-between px-4">
                <div className="flex gap-3">
                  <input
                    type="checkbox"
                    className="peer min-h-0"
                    defaultChecked
                  />
                  <button className="btn btn-sm bg-gray-100 hover:bg-gray-200 border border-gray-300 hover:border-gray-300 text-gray-800 text-sm">
                    Select all
                  </button>
                  <button className="btn btn-smbtn btn-sm bg-gray-100 hover:bg-gray-200 border border-gray-300 hover:border-gray-300 text-gray-800 text-sm">
                    Shortlist
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <span className="sm:hidden md:block">View: </span>
                  <FaBars
                    onClick={handleLayout}
                    className={`${
                      isGrid ? "" : "text-orange-500"
                    } cursor-pointer`}
                  ></FaBars>
                  <FaGripHorizontal
                    onClick={handleLayout}
                    className={`${
                      isGrid ? "text-orange-500" : ""
                    } cursor-pointer`}
                  ></FaGripHorizontal>
                </div>
              </div>
            </div>
            {isGrid ? (
              <PageContentGrid></PageContentGrid>
            ) : (
              <PageContent></PageContent>
            )}
            {/* Pagination start */}
            <div className="flex justify-between my-4">
              <div className="flex items-center gap-2 w-full max-w-xs">
                <div className="label">
                  <span className="label-text font-lg font-semibold">
                    Result per page
                  </span>
                </div>
                <select
                  value={`10`}
                  onChange={() => {}}
                  className="select select-bordered select-xs w-2/6 bg-gray-100"
                >
                  <option disabled defaultValue={`10`}>
                    10
                  </option>
                  <option>20</option>
                  <option>30</option>
                  <option>40</option>
                  <option>50</option>
                </select>
              </div>
              <div className="flex gap-1">
                <button className="join-item btn btn-xs bg-gray-100 border border-gray-200 text-gray-700 hover:text-white">
                  Prev
                </button>
                <button className="join-item btn btn-xs bg-green-500 border-0 text-white">
                  1
                </button>
                <button className="join-item btn btn-xs btn-active">2</button>
                <button className="join-item btn btn-xs">3</button>
                <button className="join-item btn btn-xs">4</button>
                <button className="join-item btn btn-xs">5</button>
                <button className="join-item btn btn-xs bg-gray-100 border border-gray-200 text-gray-700 hover:text-white">
                  Next
                </button>
              </div>
            </div>
            {/* Pagination end */}
          </div>
          {/* Main cotent end here */}
        </div>
      </div>
      <div className="block sm:hidden">
        <div className="flex overflow-x-auto gap-2 scrollbar-hide p-2">
          {menus.map((menu, idx) => (
            <button
              key={idx}
              onClick={() => handleActiveTab(menu)}
              className={`btn btn-sm ${
                activeTat === menu.toLowerCase()
                  ? "bg-green-500 text-white"
                  : ""
              }`}
            >
              {menu}
            </button>
          ))}
        </div>

        {activeTat === "dashboard" && (
          <div>
            <MobileView></MobileView>
          </div>
        )}
        {activeTat === "matches" && (
          <div>
            <MobileView></MobileView>
          </div>
        )}
        {activeTat === "latest matches" && (
          <div>
            <MobileView></MobileView>
          </div>
        )}
        {activeTat === "viewed" && (
          <div>
            <MobileView></MobileView>
          </div>
        )}
        {activeTat === "viewed not contacted" && (
          <div>
            <MobileView></MobileView>
          </div>
        )}
        {activeTat === "shortlist" && (
          <div>
            <MobileView activeTat="shortlist"></MobileView>
          </div>
        )}
        {activeTat === "viewed my profile" && (
          <div>
            <MobileView></MobileView>
          </div>
        )}
        {activeTat === "premium matches" && (
          <div>
            <MobileView></MobileView>
          </div>
        )}
        {activeTat === "mutaual matches" && (
          <div>
            <MobileView></MobileView>
          </div>
        )}
        {activeTat === "preferred profession" && (
          <>
            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-2 scrollbar-hide"
            >
              {professions.map((item, idx) => (
                <PreferredProfessionMenu
                  key={idx}
                  item={item}
                  profession={profession}
                  handleProfession={handleProfession}
                ></PreferredProfessionMenu>
              ))}
            </div>
            {profession === "student" ? (
              <MobileView matched="student"></MobileView>
            ) : (
              matchedProfession.map((matched, indx) => (
                <MobileView key={indx} matched={matched}></MobileView>
              ))
            )}
          </>
        )}
        {activeTat === "preferred eduction" && (
          <>
            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-2 scrollbar-hide"
            >
              {educations.map((item, indx) => (
                <PreferredEducationMenu
                  key={indx}
                  item={item}
                  education={education}
                  handleEducation={handleEducation}
                ></PreferredEducationMenu>
              ))}
            </div>
            {education === "secondary" ? (
              <MobileView matched="secondary"></MobileView>
            ) : (
              matchedEducation.map((matched, indx) => (
                <MobileView key={indx} matched={matched}></MobileView>
              ))
            )}
          </>
        )}
        {activeTat === "preferred location" && (
          <>
            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-2 scrollbar-hide"
            >
              {locations.map((item, indx) => (
                <PreferredLocationMenu
                  key={indx}
                  item={item}
                  location={location}
                  handleLocation={handleLocation}
                ></PreferredLocationMenu>
              ))}
            </div>
            {location === "bangladesh" ? (
              <MobileView matched="bangladesh"></MobileView>
            ) : (
              matchedLocation.map((matched, indx) => (
                <MobileView key={indx} matched={matched}></MobileView>
              ))
            )}
          </>
        )}
      </div>

      {/* <div className="block sm:hidden">
      <h2 className="text-red-700 font-bold text-5xl">Hello Metches Page</h2>
    </div> */}
    </>
  );
}
