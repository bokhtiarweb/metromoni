import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaCheck } from "react-icons/fa";
const imgIdentity = "/trustbadge-identity.png";
const imgProfession = "/trustbadge-professional.png";

export default function EditProfileBadge() {
  return (
    <div className="py-4">
      <div>
        <h2 className="text-xl font-semibold text-gray-400 border-b-2 border-dotted">
          TRUST BADGE
        </h2>
        <div className="mt-4 sm:flex-wrap flex justify-between">
          <p className="text-gray-400">
            Adding trust badges to your profile is the easiest way to build
            trust with your prospects
          </p>
          <div className="sm:mt-4">
            <div className="flex items-center">
              <FaCheck className="text-green-600"></FaCheck>
              <span className="text-gray-400">
                Give your profile the credibility it deserves!
              </span>
            </div>
            <div className="flex items-center">
              <FaCheck className="text-green-600"></FaCheck>
              <span className="text-gray-400">
                More badges = More Responses!
              </span>
            </div>
          </div>
        </div>
        <div>
          <Tabs>
            <TabList>
              <Tab>Badges</Tab>
              <Tab>Badge Privacy</Tab>
            </TabList>
            <TabPanel>
              <div className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="text-center">
                    <img className="mx-auto" src={imgIdentity} alt="" />
                    <div className="mt-4">
                      <h2 className="text-2xl font-semibold text-gray-400">
                        Identity Badge
                      </h2>
                      <p className="text-sm text-gray-500 mt-2">
                        To activate this badge, please upload a copy of any one
                        of the below documents:
                      </p>
                      <select className="select select-bordered w-full max-w-xs mt-4">
                        <option disabled selected>
                          Select Proof
                        </option>
                        <option>Passport</option>
                      </select>
                      <label className="cursor-pointer flex items-center gap-1 mt-2">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs checkbox-accent"
                          defaultChecked
                        />
                        <span className="label-text">
                          I consent to the verification of my submitted
                          identification documents
                        </span>
                      </label>
                      <input
                        type="file"
                        className="file-input w-full max-w-xs mt-4"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <img className="mx-auto" src={imgProfession} alt="" />
                    <div className="mt-4">
                      <h2 className="text-2xl font-semibold text-gray-400">
                        Professional Badge
                      </h2>
                      <p className="text-sm text-gray-500 mt-2">
                        Please upload a copy of your latest education
                        certificate and / or salary slip to activate this badge
                      </p>
                      <div className="mt-4">
                        <strong>Latest Education Certificate</strong>
                        <input
                          type="file"
                          className="file-input file-input-bordered file-input-error w-full max-w-xs"
                        />
                      </div>
                      <label className="cursor-pointer flex items-center gap-1 mt-4">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs checkbox-accent"
                          defaultChecked
                        />
                        <span className="label-text">
                          I consent to the verification of my submitted
                          identification documents
                        </span>
                      </label>

                      <div>
                        <strong>Occupation</strong>
                        <select className="select select-sm select-bordered w-full max-w-xs mt-4">
                          <option disabled selected>
                            Select
                          </option>
                          <option>Payslip</option>
                          <option>EB Bill / Telephone Bill</option>
                        </select>
                        <input
                          type="file"
                          className="file-input file-input-bordered file-input-error w-full max-w-xs mt-2"
                        />
                      </div>
                      <label className="cursor-pointer flex items-center gap-1 mt-4">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs checkbox-accent"
                          defaultChecked
                        />
                        <span className="label-text">
                          I consent to the verification of my submitted
                          identification documents
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="mt-4">
                <p>Your documents are now visible to all paid members.</p>
                <div className="mt-4">
                  <label className="cursor-pointer flex items-center gap-1 mt-2">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs checkbox-accent"
                      defaultChecked
                    />
                    <span className="label-text">
                      Visible to all paid members
                    </span>
                  </label>
                  <label className="cursor-pointer flex items-center gap-1 mt-2">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs checkbox-accent"
                    />
                    <span className="label-text">
                      Visible to those paid members whom I had contacted /
                      responded
                    </span>
                  </label>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
