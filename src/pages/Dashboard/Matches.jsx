import React, { useState } from "react";
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
import PageContent from "./Contents/PageContent";
import PageContentGrid from "./Contents/PageContentGrid";

export default function Matches() {
  const [isActive, setActive] = useState(false);
  const [profileType, setProfileType] = useState(false);
  const [ageForm, setAgeForm] = useState(false);
  const [isHeight, setIsheight] = useState(false);
  const [maritalStatus, setMaritalStatus] = useState(false);
  const [activeModal, setActiveModal] = useState(null); // Track which modal is open

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

  return (
    <div className="my-4">
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
            <div className="collapse collapse-plus border border-base-300 bg-base-200">
              <input type="checkbox" className="peer min-h-0" defaultChecked />
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
              <ActiveModal showSpecificModal={showSpecificModal}></ActiveModal>
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
            {isHeight && <HeightModal setIsheight={setIsheight}></HeightModal>}
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
                <button className="btn btn-sm">Preferred Profiles (343)</button>
                <button className="btn btn-sm">Matchwatches Profiles</button>
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
                <button className="btn btn-sm text-sm">Select all</button>
                <button className="btn btn-sm text-sm">Shortlist</button>
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
              <select value={`10`} onChange={() => {}} className="select select-bordered select-xs w-2/6">
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
              <button className="join-item btn btn-xs">Prev</button>
              <button className="join-item btn btn-xs bg-green-500">1</button>
              <button className="join-item btn btn-xs btn-active">2</button>
              <button className="join-item btn btn-xs">3</button>
              <button className="join-item btn btn-xs">4</button>
              <button className="join-item btn btn-xs">5</button>
              <button className="join-item btn btn-xs">Next</button>
            </div>
          </div>
          {/* Pagination end */}
        </div>
        {/* Main cotent end here */}
      </div>
    </div>
  );
}
