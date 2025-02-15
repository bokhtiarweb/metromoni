import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Banner from "./Shared/Banner";
import PageContent from "./Contents/PageContent";
import { FaArrowsAltH } from "react-icons/fa";

const options = {
  sect: ["Any", "Ahmadiyya", "Hanafi", "Shia", "Sunni"],
  languages: [
    "Hausa",
    "Javanese",
    "Mandarin",
    "Pashtu",
    "Sundanese",
    "Turkmen",
  ],
  countries: [
    "Bangladesh",
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
  ],
  education: [
    "Any",
    "Ph.D.",
    "Masters",
    "Bachelors",
    "Civil Service",
    "Professional Certifications",
  ],
};

export default function Search() {
  const [selectedSect, setSelectedSect] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(["Bengali"]);
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [selectedEducation, setSelectedEducation] = useState([]);
  const [showPhotos, setShowPhotos] = useState(false);

  const toggleSelection = (value, state, setState) => {
    if (state.includes(value)) {
      setState(state.filter((item) => item !== value));
    } else {
      setState([...state, value]);
    }
  };

  return (
    <>
      <div>
        <div>
          <Banner></Banner>
        </div>
        <div className="py-4">
          <Tabs>
            <TabList>
              <Tab>Regular</Tab>
              <Tab>Advanced</Tab>
              <Tab>Keyword Search</Tab>
              <Tab>My Matrimony Id</Tab>
            </TabList>

            <TabPanel>
              <div>
                <div className="py-4 border-b-2 border-dotted border-gray-400">
                  <h2 className="text-xl font-semibold text-orange-500">
                    Find Bangladeshi Profiles Here
                  </h2>
                </div>
                <div className="py-4">
                  <div className="overflow-x-auto">
                    <form>
                      <table className="table">
                        <tbody>
                          {/* age */}
                          <tr>
                            <td>
                              <div className="font-lg font-semibold text-lg">
                                Age
                              </div>
                            </td>
                            <td>
                              <div className="flex">
                                <div className="flex items-center gap-2 w-full max-w-sm">
                                  <select
                                    value={`18`}
                                    onChange={() => {}}
                                    className="select select-bordered select-sm  w-full"
                                  >
                                    <option disabled defaultValue={`18`}>
                                      18
                                    </option>
                                    <option>19</option>
                                    <option>20</option>
                                    <option>21</option>
                                    <option>22</option>
                                    <option>23</option>
                                    <option>24</option>
                                    <option>25</option>
                                    <option>26</option>
                                  </select>
                                  <div className="label">
                                    <span className="label-text font-lg font-semibold mr-1">
                                      To
                                    </span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 w-full max-w-sm">
                                  <select
                                    value={`21`}
                                    onChange={() => {}}
                                    className="select select-bordered select-sm w-full"
                                  >
                                    <option disabled defaultValue={`21`}>
                                      21
                                    </option>
                                    <option>22</option>
                                    <option>23</option>
                                    <option>24</option>
                                    <option>25</option>
                                    <option>26</option>
                                  </select>
                                  <div className="label">
                                    <span className="label-text font-lg font-semibold">
                                      Years
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          {/* height */}
                          <tr>
                            <td>
                              <div className="font-lg font-semibold text-lg">
                                Height
                              </div>
                            </td>
                            <td>
                              <div className="flex">
                                <div className="flex items-center gap-2 w-full max-w-sm">
                                  <select
                                    value={`132 cm`}
                                    onChange={() => {}}
                                    className="select select-bordered select-sm  w-full"
                                  >
                                    <option disabled defaultValue={`132 cm`}>
                                      132 cm
                                    </option>
                                    <option>140 cm</option>
                                    <option>145 cm</option>
                                    <option>150 cm</option>
                                    <option>155 cm</option>
                                    <option>160 cm</option>
                                  </select>
                                  <div className="label">
                                    <span className="label-text font-lg font-semibold mr-1">
                                      To
                                    </span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 w-full max-w-sm">
                                  <select
                                    value={`132 cm`}
                                    onChange={() => {}}
                                    className="select select-bordered select-sm  w-full"
                                  >
                                    <option disabled defaultValue={`132 cm`}>
                                      132 cm
                                    </option>
                                    <option>140 cm</option>
                                    <option>145 cm</option>
                                    <option>150 cm</option>
                                    <option>155 cm</option>
                                    <option>160 cm</option>
                                  </select>
                                </div>
                              </div>
                            </td>
                          </tr>
                          {/* Merital status */}
                          <tr>
                            <td>
                              <div className="font-lg font-semibold text-lg">
                                Merital status
                              </div>
                            </td>
                            <td>
                              <div className="flex sm:flex-wrap items-center gap-3">
                                <div className="form-control">
                                  <label className="cursor-pointer flex items-center gap-1">
                                    <input
                                      type="checkbox"
                                      className="checkbox checkbox-xs checkbox-accent"
                                    />
                                    <span className="label-text">Any</span>
                                  </label>
                                </div>
                                <div className="form-control">
                                  <label className="cursor-pointer flex items-center gap-1">
                                    <input
                                      type="checkbox"
                                      className="checkbox checkbox-xs checkbox-accent"
                                      defaultChecked
                                    />
                                    <span className="label-text">
                                      Unmarried
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
                                      Widow/Widower
                                    </span>
                                  </label>
                                </div>
                                <div className="form-control">
                                  <label className="cursor-pointer flex items-center gap-1">
                                    <input
                                      type="checkbox"
                                      className="checkbox checkbox-xs checkbox-accent"
                                    />
                                    <span className="label-text">Devorced</span>
                                  </label>
                                </div>
                                <div className="form-control">
                                  <label className="cursor-pointer flex items-center gap-1">
                                    <input
                                      type="checkbox"
                                      className="checkbox checkbox-xs checkbox-accent"
                                    />
                                    <span className="label-text">
                                      Seperated
                                    </span>
                                  </label>
                                </div>
                                <div className="form-control">
                                  <label className="cursor-pointer flex items-center gap-1">
                                    <input
                                      type="checkbox"
                                      className="checkbox checkbox-xs checkbox-accent"
                                    />
                                    <span className="label-text">Married</span>
                                  </label>
                                </div>
                              </div>
                            </td>
                          </tr>
                          {/* Any children */}
                          <tr>
                            <td>
                              <div className="font-lg font-semibold text-lg">
                                Have children
                              </div>
                            </td>
                            <td>
                              <div className="flex sm:flex-wrap items-center gap-3">
                                <div className="form-control">
                                  <label className="cursor-pointer flex items-center gap-1">
                                    <input
                                      type="checkbox"
                                      className="checkbox checkbox-xs checkbox-accent"
                                    />
                                    <span className="label-text">No</span>
                                  </label>
                                </div>
                                <div className="form-control">
                                  <label className="cursor-pointer flex items-center gap-1">
                                    <input
                                      type="checkbox"
                                      className="checkbox checkbox-xs checkbox-accent"
                                    />
                                    <span className="label-text">
                                      Yes, living together
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
                                      Yes, not living together
                                    </span>
                                  </label>
                                </div>
                                <div className="form-control">
                                  <label className="cursor-pointer flex items-center gap-1">
                                    <input
                                      type="checkbox"
                                      className="checkbox checkbox-xs checkbox-accent"
                                      defaultChecked
                                    />
                                    <span className="label-text">
                                      Doesn`t matter
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </td>
                          </tr>
                          {/* Religion */}
                          <tr>
                            <td>
                              <div className="font-lg font-semibold text-lg">
                                Religion
                              </div>
                            </td>
                            <td>
                              <div className="flex items-center gap-2 w-full max-w-sm">
                                <select
                                  value={`Islam`}
                                  onChange={() => {}}
                                  className="select select-bordered select-sm  w-full"
                                >
                                  <option disabled defaultValue={`Islam`}>
                                    Islam
                                  </option>
                                  <option>140 cm</option>
                                  <option>145 cm</option>
                                  <option>150 cm</option>
                                  <option>155 cm</option>
                                  <option>160 cm</option>
                                </select>
                              </div>
                            </td>
                          </tr>
                          {/* Sect section */}
                          <tr>
                            <td>
                              <div className="font-lg font-semibold text-lg">
                                Sect
                              </div>
                            </td>
                            <td>
                              <div className="mb-4">
                                <label className="block font-medium text-gray-700">
                                  Sect
                                </label>
                                <div className="flex items-center gap-4">
                                  <select
                                    multiple
                                    className="w-full p-2 border rounded-md h-24"
                                    onDoubleClick={(e) =>
                                      toggleSelection(
                                        e.target.value,
                                        selectedSect,
                                        setSelectedSect
                                      )
                                    }
                                  >
                                    {options.sect.map((sect) => (
                                      <option
                                        key={sect}
                                        value={sect}
                                        className="p-2"
                                      >
                                        {sect}
                                      </option>
                                    ))}
                                  </select>
                                  <FaArrowsAltH className="text-5xl"></FaArrowsAltH>
                                  <select
                                    className="w-full p-2 border rounded-md h-24"
                                    multiple
                                  >
                                    {selectedSect.map((sect) => (
                                      <option key={sect}>{sect}</option>
                                    ))}
                                  </select>
                                </div>
                                <label className="flex font-medium text-gray-700 justify-around mt-1">
                                  <p>Double clik on the values to select</p>
                                  <p>Double clik on the values to deselect</p>
                                </label>
                              </div>
                            </td>
                          </tr>
                          {/* Mother Tongue */}
                          <tr>
                            <td>
                              <div className="font-lg font-semibold text-lg">
                                Mother Tongue
                              </div>
                            </td>
                            <td>
                              <div className="mb-4">
                                <label className="block font-medium text-gray-700">
                                  Mother Tongue
                                </label>
                                <div className="flex items-center gap-4">
                                  <select
                                    multiple
                                    className="w-full p-2 border rounded-md h-24"
                                    onDoubleClick={(e) =>
                                      toggleSelection(
                                        e.target.value,
                                        selectedLanguage,
                                        setSelectedLanguage
                                      )
                                    }
                                  >
                                    {options.languages.map((lang) => (
                                      <option key={lang} value={lang}>
                                        {lang}
                                      </option>
                                    ))}
                                  </select>
                                  <FaArrowsAltH className="text-5xl"></FaArrowsAltH>
                                  <select
                                    className="w-full p-2 border rounded-md h-24"
                                    multiple
                                  >
                                    {selectedLanguage.map((lang) => (
                                      <option key={lang}>{lang}</option>
                                    ))}
                                  </select>
                                </div>
                                <label className="flex font-medium text-gray-700 justify-around mt-1">
                                  <p>Double clik on the values to select</p>
                                  <p>Double clik on the values to deselect</p>
                                </label>
                              </div>
                            </td>
                          </tr>
                          {/* Living Country */}
                          <tr>
                            <td>
                              <div className="font-lg font-semibold text-lg">
                                Country Living In
                              </div>
                            </td>
                            <td>
                              <div className="mb-4">
                                <label className="block font-medium text-gray-700">
                                  Country Living In
                                </label>
                                <div className="flex items-center gap-4">
                                  <select
                                    multiple
                                    className="w-full p-2 border rounded-md h-24"
                                    onDoubleClick={(e) =>
                                      toggleSelection(
                                        e.target.value,
                                        selectedCountry,
                                        setSelectedCountry
                                      )
                                    }
                                  >
                                    {options.countries.map((country) => (
                                      <option key={country} value={country}>
                                        {country}
                                      </option>
                                    ))}
                                  </select>
                                  <FaArrowsAltH className="text-5xl"></FaArrowsAltH>
                                  <select
                                    className="w-full p-2 border rounded-md h-24"
                                    multiple
                                  >
                                    {selectedCountry.map((country) => (
                                      <option key={country}>{country}</option>
                                    ))}
                                  </select>
                                </div>
                                <label className="flex font-medium text-gray-700 justify-around mt-1">
                                  <p>Double clik on the values to select</p>
                                  <p>Double clik on the values to deselect</p>
                                </label>
                              </div>
                            </td>
                          </tr>
                          {/* Education */}
                          <tr>
                            <td>
                              <div className="font-lg font-semibold text-lg">
                                Education
                              </div>
                            </td>
                            <td>
                              <div className="mb-4">
                                <label className="block font-medium text-gray-700">
                                  Education
                                </label>
                                <div className="flex items-center gap-4">
                                  <select
                                    multiple
                                    className="w-full p-2 border rounded-md h-24"
                                    onDoubleClick={(e) =>
                                      toggleSelection(
                                        e.target.value,
                                        selectedEducation,
                                        setSelectedEducation
                                      )
                                    }
                                  >
                                    {options.education.map((edu) => (
                                      <option key={edu} value={edu}>
                                        {edu}
                                      </option>
                                    ))}
                                  </select>
                                  <FaArrowsAltH className="text-5xl"></FaArrowsAltH>
                                  <select
                                    className="w-full p-2 border rounded-md h-24"
                                    multiple
                                  >
                                    {selectedEducation.map((edu) => (
                                      <option key={edu}>{edu}</option>
                                    ))}
                                  </select>
                                </div>
                                <label className="flex font-medium text-gray-700 justify-around mt-1">
                                  <p>Double clik on the values to select</p>
                                  <p>Double clik on the values to deselect</p>
                                </label>
                              </div>
                            </td>
                          </tr>
                          {/* Show profile with photo */}
                          <tr>
                            <td>
                              <div className="font-lg font-semibold text-lg">
                                Show profiles with
                              </div>
                            </td>
                            <td>
                              <div className="flex items-center gap-2">
                                <input
                                  type="checkbox"
                                  className="h-4 w-4 text-blue-600"
                                  checked={showPhotos}
                                  onChange={() => setShowPhotos(!showPhotos)}
                                />
                                <label className="text-gray-700">photo</label>
                              </div>
                            </td>
                          </tr>
                          {/* Show profile with photo */}
                          <tr>
                            <td>
                              <div className="font-lg font-semibold text-lg">
                                Don`t Show
                              </div>
                            </td>
                            <td>
                              <div className="flex sm:flex-wrap items-center gap-3">
                                <div className="form-control">
                                  <label className="cursor-pointer flex items-center gap-1">
                                    <input
                                      type="checkbox"
                                      className="checkbox checkbox-xs checkbox-accent"
                                      defaultChecked
                                    />
                                    <span className="label-text">
                                      Profile alreay contacted
                                    </span>
                                  </label>
                                </div>
                                <div className="form-control">
                                  <label className="cursor-pointer flex items-center gap-1">
                                    <input
                                      type="checkbox"
                                      className="checkbox checkbox-xs checkbox-accent"
                                      defaultChecked
                                    />
                                    <span className="label-text">
                                      Profile alreay viewed
                                    </span>
                                  </label>
                                </div>
                                <div className="form-control">
                                  <label className="cursor-pointer flex items-center gap-1">
                                    <input
                                      type="checkbox"
                                      className="checkbox checkbox-xs checkbox-accent"
                                      defaultChecked
                                    />
                                    <span className="label-text">
                                      Shortlisted profiles
                                    </span>
                                  </label>
                                </div>
                                <div className="form-control">
                                  <label className="cursor-pointer flex items-center gap-1">
                                    <input
                                      type="checkbox"
                                      className="checkbox checkbox-xs checkbox-accent"
                                      defaultChecked
                                    />
                                    <span className="label-text">
                                      profile I have blocked
                                    </span>
                                  </label>
                                </div>
                                <div className="form-control">
                                  <label className="cursor-pointer flex items-center gap-1">
                                    <input
                                      type="checkbox"
                                      className="checkbox checkbox-xs checkbox-accent"
                                      defaultChecked
                                    />
                                    <span className="label-text">
                                      profile I have ingnored
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </td>
                          </tr>
                          {/* Search buttons */}
                          <tr>
                            <td></td>
                            <td>
                              <div className="flex justify-end gap-2 py-4">
                                <button className="btn btn-warning btn-sm">
                                  Search
                                </button>
                                <button className="btn btn-sm">
                                  Search & Save
                                </button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </form>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>Advanced</TabPanel>
            <TabPanel>Keyword Search</TabPanel>
            <TabPanel>My Matrimony Id</TabPanel>
          </Tabs>

          {/* <Tabs>
          <TabList className={"flex sm:flex-wrap fixed bg-gray-100 z-10"}>
            <Tab>
              <div className="text-center">
                <div className="badge badge-md">987,654</div>
                <p className="text-sm font-semibold text-gray-600">
                  Latest matches
                </p>
              </div>
            </Tab>
            <Tab>
              <div className="text-center">
                <div className="badge badge-md">987,654</div>
                <p>Yet to viewed</p>
              </div>
            </Tab>
            <Tab>
              <div className="text-center">
                <div className="badge badge-md">987,654</div>
                <p>Recently Updated</p>
              </div>
            </Tab>
            <Tab>
              <div className="text-center">
                <div className="badge badge-md">987,654</div>
                <p>viewed not contacted</p>
              </div>
            </Tab>
            <Tab>
              <div className="text-center">
                <div className="badge badge-md">987,654</div>
                <p>viewed your mobile No</p>
              </div>
            </Tab>
          </TabList>

          <TabPanel>
            <div className="py-4 -z-10">
              <div className="flex sm:flex-wrap items-center gap-3 pl-2 sm:mt-32 lg:mt-16">
                <div className="form-control">
                  <label className="cursor-pointer flex items-center gap-1">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs checkbox-accent"
                    />
                    <span className="label-text">Show profiles with photo</span>
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
                    <span className="label-text">Show profiles with photo</span>
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
                    <span className="label-text">Show profiles with photo</span>
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
        </Tabs> */}
        </div>
      </div>
    </>
  );
}
