import React, { useRef, useState } from "react";
import "../../index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
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

export default function MyHome() {
  const [activeTat, setActiveTab] = useState("dashboard");
  const [profession, setProfession] = useState("student");
  const [matchedProfession, setMatchedProfession] = useState([]);
  const [education, setEducation] = useState("secondary");
  const [matchedEducation, setMatchedEducation] = useState([]);
  const [location, setLocation] = useState("bangladesh");
  const [matchedLocation, setMatchedLocation] = useState([]);
  const scrollRef = useRef(null);

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
      <div className="hidden sm:block">
        <div className="grid grid-cols-8 bg-gray-100">
          {/* Left section */}
          <div className="sm:col-span-3 lg:col-span-2">
            <div>
              {/* Accordian section start here */}
              <div className="join join-vertical w-full">
                {/* First accordian  */}
                <div className="collapse collapse-arrow join-item border-b border-gray-300">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title text-xl font-medium text-gray-700">
                    Messages
                  </div>
                  <div className="collapse-content">
                    {/* Tab start here */}
                    <div role="tablist" className="tabs tabs-lifted">
                      <input
                        type="radio"
                        name="my_tabs_2"
                        role="tab"
                        className="tab"
                        aria-label="Inbox 4"
                        defaultChecked
                      />
                      <div
                        role="tabpanel"
                        className="tab-content bg-gray-100 border-gray-300 "
                      >
                        <div className="text-gray-600">
                          <a
                            href="#"
                            target="_blank"
                            className="flex justify-between py-2 px-1 border-b border-gray-400"
                          >
                            <span>Pending</span>
                            <div className="badge badge-primary badge-md">
                              0
                            </div>
                          </a>
                          <a
                            href="#"
                            target="_blank"
                            className="flex justify-between py-2 px-1 border-b border-gray-400"
                          >
                            <span>Accepted</span>
                            <div className="badge badge-primary badge-md">
                              0
                            </div>
                          </a>
                          <a
                            href="#"
                            target="_blank"
                            className="flex justify-between py-2 px-1 border-b border-gray-400"
                          >
                            <span>Replied</span>
                            <div className="badge badge-primary badge-md">
                              0
                            </div>
                          </a>
                          <a
                            href="#"
                            target="_blank"
                            className="flex justify-between py-2 px-1 border-b border-gray-400"
                          >
                            <span>Need Time/Info</span>
                            <div className="badge badge-primary badge-md">
                              0
                            </div>
                          </a>
                          <a
                            href="#"
                            target="_blank"
                            className="flex justify-between py-2 px-1 border-b border-gray-400"
                          >
                            <span>Declined</span>
                            <div className="badge badge-primary badge-md">
                              0
                            </div>
                          </a>
                        </div>
                      </div>

                      <input
                        type="radio"
                        name="my_tabs_2"
                        role="tab"
                        className="tab"
                        aria-label="Sent 3"
                      />
                      <div
                        role="tabpanel"
                        className="tab-content bg-gray-100 border-gray-300"
                      >
                        <div className="text-gray-600">
                          <a
                            href="#"
                            target="_blank"
                            className="flex justify-between py-2 px-1 border-b border-gray-400"
                          >
                            <span>Pending</span>
                            <div className="badge badge-primary badge-md">
                              0
                            </div>
                          </a>
                          <a
                            href="#"
                            target="_blank"
                            className="flex justify-between py-2 px-1 border-b border-gray-400"
                          >
                            <span>Accepted</span>
                            <div className="badge badge-primary badge-md">
                              0
                            </div>
                          </a>
                          <a
                            href="#"
                            target="_blank"
                            className="flex justify-between py-2 px-1 border-b border-gray-400"
                          >
                            <span>Replied</span>
                            <div className="badge badge-primary badge-md">
                              0
                            </div>
                          </a>
                          <a
                            href="#"
                            target="_blank"
                            className="flex justify-between py-2 px-1 border-b border-gray-400"
                          >
                            <span>Need Time / Info</span>
                            <div className="badge badge-primary badge-md">
                              0
                            </div>
                          </a>
                          <a
                            href="#"
                            target="_blank"
                            className="flex justify-between py-2 px-1 border-b border-gray-400"
                          >
                            <span>Declined</span>
                            <div className="badge badge-primary badge-md">
                              0
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Tab end here */}
                  </div>
                </div>
                {/* Second accordian  */}
                <div className="collapse collapse-arrow join-item border-b border-gray-300">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-xl font-medium text-gray-700">
                    Requests
                  </div>
                  <div className="collapse-content">
                    {/* Tab start here */}
                    <div role="tablist" className="tabs tabs-lifted">
                      <input
                        type="radio"
                        name="my_tabs_3"
                        role="tab"
                        className="tab"
                        aria-label="Inbox 3"
                        defaultChecked
                      />
                      <div
                        role="tabpanel"
                        className="tab-content bg-gray-100 border-gray-300 "
                      >
                        <div className="text-gray-600">
                          <a
                            href="#"
                            target="_blank"
                            className="flex justify-between py-2 px-1 border-b border-gray-400"
                          >
                            <span>Photo</span>
                            <div className="badge badge-primary badge-md">
                              0
                            </div>
                          </a>
                          <a
                            href="#"
                            target="_blank"
                            className="flex justify-between py-2 px-1 border-b border-gray-400"
                          >
                            <span>Profile Info</span>
                            <div className="badge badge-primary badge-md">
                              0
                            </div>
                          </a>
                          <a
                            href="#"
                            target="_blank"
                            className="flex justify-between py-2 px-1 border-b border-gray-400"
                          >
                            <span>Phone No.Grant</span>
                            <div className="badge badge-primary badge-md">
                              0
                            </div>
                          </a>
                        </div>
                      </div>

                      <input
                        type="radio"
                        name="my_tabs_3"
                        role="tab"
                        className="tab"
                        aria-label="Sent 5"
                      />
                      <div
                        role="tabpanel"
                        className="tab-content bg-gray-100 border-gray-300"
                      >
                        <div className="text-gray-600">
                          <a
                            href="#"
                            target="_blank"
                            className="flex justify-between py-2 px-1 border-b border-gray-400"
                          >
                            <span>Photo</span>
                            <div className="badge badge-primary badge-md">
                              0
                            </div>
                          </a>
                          <a
                            href="#"
                            target="_blank"
                            className="flex justify-between py-2 px-1 border-b border-gray-400"
                          >
                            <span>Profile Info</span>
                            <div className="badge badge-primary badge-md">
                              0
                            </div>
                          </a>
                          <a
                            href="#"
                            target="_blank"
                            className="flex justify-between py-2 px-1 border-b border-gray-400"
                          >
                            <span>Photo Grant</span>
                            <div className="badge badge-primary badge-md">
                              0
                            </div>
                          </a>
                          <a
                            href="#"
                            target="_blank"
                            className="flex justify-between py-2 px-1 border-b border-gray-400"
                          >
                            <span>Phone No.Grant</span>
                            <div className="badge badge-primary badge-md">
                              0
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Tab end here */}
                  </div>
                </div>
              </div>
              {/* Accordian section end here */}
            </div>
            {/* Chat History */}
            <div className="border-b border-gray-300 my-4 pb-2">
              <a
                href="#"
                target="_blank"
                className="text-lg font-bold px-4text-gray-600"
              >
                Chat History
              </a>
            </div>
            {/* Your Activity Board */}
            <div>
              <h2 className="text-lg font-bold px-4 border-b border-gray-400 text-gray-600">
                Your Activity Board
              </h2>
              <div>
                <div className="overflow-x-auto">
                  <table className="table">
                    <tbody className="text-gray-600">
                      {/* row 1 */}
                      <tr className="border-b border-gray-300">
                        <td>
                          <a href="#" target="_blank">
                            SMS sent
                          </a>
                        </td>
                        <td>
                          <a href="#" target="_blank">
                            <div className="badge badge-primary badge-md">
                              0
                            </div>
                          </a>
                        </td>
                      </tr>
                      {/* row 2 */}
                      <tr className="border-b border-gray-300">
                        <td>
                          <a href="#" target="_blank">
                            SMS Received
                          </a>
                        </td>
                        <td>
                          <a href="#" target="_blank">
                            <div className="badge badge-primary badge-md">
                              0
                            </div>
                          </a>
                        </td>
                      </tr>
                      {/* row 3 */}
                      <tr className="border-b border-gray-300">
                        <td>
                          <a href="#" target="_blank">
                            Members you have sortlisted
                          </a>
                        </td>
                        <td>
                          <a href="#" target="_blank">
                            <div className="badge badge-primary badge-md">
                              0
                            </div>
                          </a>
                        </td>
                      </tr>
                      {/* row 4 */}
                      <tr className="border-b border-gray-300">
                        <td>
                          <a href="#" target="_blank">
                            Members you have blocked
                          </a>
                        </td>
                        <td>
                          <a href="#" target="_blank">
                            <div className="badge badge-primary badge-md">
                              0
                            </div>
                          </a>
                        </td>
                      </tr>
                      {/* row 5 */}
                      <tr className="border-b border-gray-300">
                        <td>
                          <a href="#" target="_blank">
                            Memebers you have ignored
                          </a>
                        </td>
                        <td>
                          <a href="#" target="_blank">
                            <div className="badge badge-primary badge-md">
                              0
                            </div>
                          </a>
                        </td>
                      </tr>
                      {/* row 6 */}
                      <tr className="border-b border-gray-300">
                        <td>
                          <a href="#" target="_blank">
                            Mobile no(s) viewed by You
                          </a>
                        </td>
                        <td>
                          <a href="#" target="_blank">
                            <div className="badge badge-primary badge-md">
                              0
                            </div>
                          </a>
                        </td>
                      </tr>
                      {/* row 2 */}
                      <tr>
                        <td>
                          <a href="#" target="_blank">
                            Daily MatchWatch Archive
                          </a>
                        </td>
                        <td>
                          <a href="#" target="_blank">
                            <div className="badge badge-primary badge-md">
                              0
                            </div>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* Right section */}
          <div className="sm:col-span-5 lg:col-span-6 bg-gray-100 lg:w-[760px]">
            {/* Section tab start here */}
            <div>
              <Tabs>
                <TabList className={"sm:flex-wrap flex fixed bg-gray-100 z-10"}>
                  <Tab>
                    <div className="text-center">
                      <div className="badge badge-md bg-gray-100 border-0">
                        987,654
                      </div>
                      <p className="text-sm font-semibold">Latest matches</p>
                    </div>
                  </Tab>
                  <Tab>
                    <div className="text-center">
                      <div className="badge badge-md bg-gray-100 border-0">
                        987,654
                      </div>
                      <p>Yet to viewed</p>
                    </div>
                  </Tab>
                  <Tab>
                    <div className="text-center">
                      <div className="badge badge-md bg-gray-100 border-0">
                        987,654
                      </div>
                      <p>Recently Updated</p>
                    </div>
                  </Tab>
                  <Tab>
                    <div className="text-center">
                      <div className="badge badge-md bg-gray-100 border-0">
                        987,654
                      </div>
                      <p>viewed not contacted</p>
                    </div>
                  </Tab>
                  <Tab>
                    <div className="text-center">
                      <div className="badge badge-md bg-gray-100 border-0">
                        987,654
                      </div>
                      <p>viewed your mobile No</p>
                    </div>
                  </Tab>
                </TabList>

                <TabPanel className={`lg:w-[760px]`}>
                  <div className="py-4 -z-10">
                    <div className="sm:flex-wrap md:flex items-center gap-3 pl-2 sm:mt-32 lg:mt-16">
                      <div className="form-control">
                        <label className="cursor-pointer flex items-center gap-1">
                          <input
                            type="checkbox"
                            className="checkbox checkbox-xs checkbox-accent"
                          />
                          <span className="label-text">
                            Show profiles with photo
                          </span>
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="cursor-pointer flex items-center gap-1">
                          <input
                            type="checkbox"
                            className="checkbox checkbox-xs checkbox-accent"
                          />
                          <span className="label-text">
                            Don't show already contacted
                          </span>
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="cursor-pointer flex items-center gap-1">
                          <input
                            type="checkbox"
                            className="checkbox checkbox-xs checkbox-accent"
                          />
                          <span className="label-text">
                            Don't show already viewed
                          </span>
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="cursor-pointer flex items-center gap-1">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="checkbox checkbox-xs checkbox-accent"
                          />
                          <span className="label-text">Show all</span>
                        </label>
                      </div>
                      <div className="form-control">
                        <label>
                          <button
                            className="p-1 border text-blue-500 rounded-md ml-2"
                            type="submit"
                          >
                            submit
                          </button>
                        </label>
                      </div>
                    </div>
                    <PageContent></PageContent>
                    <PageContent></PageContent>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="py-4">
                    <div className="flex items-center gap-3 pl-2 mt-16">
                      <div className="form-control">
                        <label className="cursor-pointer flex items-center gap-1">
                          <input
                            type="checkbox"
                            className="checkbox checkbox-xs checkbox-accent"
                          />
                          <span className="label-text">
                            Show profiles with photo
                          </span>
                        </label>
                      </div>
                      <div className="form-control">
                        <label>
                          <button
                            className="p-1 border text-blue-500 rounded-md"
                            type="submit"
                          >
                            submit
                          </button>
                        </label>
                      </div>
                    </div>
                    <PageContent></PageContent>
                    <PageContent></PageContent>
                  </div>
                </TabPanel>
                <TabPanel>
                  <h2>Any content 3</h2>
                </TabPanel>
                <TabPanel>
                  <div className="py-4">
                    <div className="flex items-center gap-3 pl-2 mt-16">
                      <div className="form-control">
                        <label className="cursor-pointer flex items-center gap-1">
                          <input
                            type="checkbox"
                            className="checkbox checkbox-xs checkbox-accent"
                          />
                          <span className="label-text">
                            Show profiles with photo
                          </span>
                        </label>
                      </div>
                      <div className="form-control">
                        <label>
                          <button
                            className="p-1 border text-blue-500 rounded-md"
                            type="submit"
                          >
                            submit
                          </button>
                        </label>
                      </div>
                    </div>
                    <PageContent></PageContent>
                    <PageContent></PageContent>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="py-4">
                    <div className="sm:mt-32 lg:mt-16">
                      <PageContent></PageContent>
                    </div>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
            {/* Section tab end here */}
          </div>
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
    </>
  );
}
