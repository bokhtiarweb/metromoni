import React, { useState } from "react";
import Banner from "./Shared/Banner";
import { FaAngleRight } from "react-icons/fa";
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

export default function Matches() {
  const [isActive, setActive] = useState(false);
  const [profileType, setProfileType] = useState(false);
  const [ageForm, setAgeForm] = useState(false);
  const [isHeight, setIsheight] = useState(false);
  const [maritalStatus, setMaritalStatus] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [activeModal, setActiveModal] = useState(null); // Track which modal is open

  const showSpecificModal = () => {
    setShowMore(!showMore)
  }

  const openActiveModal = () => {
    setActive(true);
    setProfileType(false);
    setAgeForm(false);
    setIsheight(false);
    setMaritalStatus(false)
  };

  const openProfileTypeModal = () => {
    setProfileType(true);
    setActive(false);
    setAgeForm(false);
    setIsheight(false);
    setMaritalStatus(false)
  };
  const openAgeModal = () => {
    setAgeForm(true);
    setProfileType(false);
    setActive(false);
    setIsheight(false);
    setMaritalStatus(false)
  };
  const openHeightModal = () => {
    setIsheight(true);
    setProfileType(false);
    setActive(false);
    setAgeForm(false);
    setMaritalStatus(false)
  }

  const openMaritalStatus = () => {
    setMaritalStatus(true)
    setIsheight(false);
    setProfileType(false);
    setActive(false);
    setAgeForm(false);
  }

  return (
    <div>
      {/* Banner */}
      <Banner></Banner>

      {/* Main cotent start here */}
      <div className="grid grid-cols-8 mt-4 px-2">
        <div className="col-span-2">
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
              openActiveModal={openActiveModal}
              setProfileType={setProfileType}
            ></ActiveModalContent>
            {/* Active Modal */}
            {isActive && <ActiveModal setActive={setActive}></ActiveModal>}
          </div>
          {/* profile type section start */}
          <div className="mt-1 relative">
            <ProfileTypeModalcontent openProfileTypeModal={openProfileTypeModal}></ProfileTypeModalcontent>
            {/* Profiletype Modal */}
            {profileType && (
              <ProfileTypeModal
              setProfileType={setProfileType}
              ></ProfileTypeModal>
            )}
          </div>
          {/* age form section start */}
          <div className="mt-1 relative">
            <AgeFormModalCotent openAgeModal={openAgeModal}></AgeFormModalCotent>
            {/* AgeForm Modal */}
            {ageForm && <AgeFormModal setAgeForm={setAgeForm}></AgeFormModal>}
          </div>
          {/* Height section start */}
          <div className="mt-1 relative">
            <HeightModalContent openHeightModal={openHeightModal}></HeightModalContent>
            {/* Height Modal */}
            {isHeight && <HeightModal setIsheight={setIsheight}></HeightModal>}
          </div>
          {/* marital status section start */}
          <div className="mt-1 relative">
            <MaritalStatusContent openMaritalStatus={openMaritalStatus}></MaritalStatusContent>
            {/* Marital modal */}
            {maritalStatus && <MaritalStatusModal setMaritalStatus={setMaritalStatus}></MaritalStatusModal>}
          </div>
          {/* Show more section start */}
          <div className="mt-1 relative">
            <ShowMoreModalContent showMore={showMore} setShowMore={setShowMore} activeModal={activeModal} setActiveModal={setActiveModal}></ShowMoreModalContent>
          </div>
          {/* Refine Search section sart */}
        </div>

        {/* Main cotent start here */}
        <div className="col-span-6 border border-red-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            perferendis mollitia molestiae, sint cumque inventore, doloremque
            dolores rem, nihil quidem assumenda nulla reiciendis in aliquid est
            at fuga saepe ad.
          </p>
        </div>
        {/* Main cotent end here */}
      </div>
    </div>
  );
}
