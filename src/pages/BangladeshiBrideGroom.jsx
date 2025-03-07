import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import BrideGoomModal from "./Dashboard/Modals/BrideGoomModal";
const bridGroomImg = "/cat.jpg";

export default function BangladeshiBrideGroom() {
  return (
    <div className="max-w-screen-lg mx-auto py-8">
      <BrideGoomModal></BrideGoomModal>
      <div className="grid grid-cols-8">
        <div className="col-span-6">
          <a href="#" className="text-blue-500 hover:underline">
            Bangladeshi Matrimony
          </a>
          <div className="mt-6">
            <div>
              <h3>Bangladeshi Groom</h3>
              <p>Showing 1000+ Bangladeshi Groom Profiles</p>
            </div>

            {/* top Pagination */}
            <div className="pt-6 pb-4 flex justify-end">
              <div className="flex gap-1 mr-4">
                <button className="join-item btn btn-xs">Prev</button>
                <button className="join-item btn btn-xs bg-green-500">1</button>
                <button className="join-item btn btn-xs btn-active">2</button>
                <button className="join-item btn btn-xs">3</button>
                <button className="join-item btn btn-xs">4</button>
                <button className="join-item btn btn-xs">5</button>
                <button className="join-item btn btn-xs">Next</button>
              </div>
            </div>

            <div>
              <Tabs>
                <TabList>
                  <Tab>Brides</Tab>
                  <Tab>Grooms</Tab>
                </TabList>

                <TabPanel>
                  <div>
                    {/* card one */}
                    <div className="border mt-6 hover:shadow-lg">
                      <div>
                        <span className="text-blue-500 text-sm font-semibold">
                          BGD3525625
                        </span>
                        <span className="mx-2 text-gray-500">|</span>
                        <span className="text-gray-500">
                          Profile create by self
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-48 h-48 p-4 border">
                          <img
                            src={bridGroomImg}
                            alt=""
                            className="w-[100%] h-[100%]"
                          />
                        </div>
                        <div className="sm:grid md:flex justify-between w-full">
                          <div className="sm:w-full md:w-[50%] mt-4">
                            <div className="flex gap-6 my-2">
                              <span className="text-gray-400 text-sm">Age</span>
                              <span className="text-sm">
                                : 32yrs, 5ft 10 in / 177cm
                              </span>
                            </div>
                            <div className="flex gap-6 my-2">
                              <span className="text-gray-400 text-sm">
                                Religion
                              </span>
                              <span className="text-sm">: Islam</span>
                            </div>
                            <div className="flex gap-6 my-2">
                              <span className="text-gray-400 text-sm">
                                Location
                              </span>
                              <span className="text-sm">: Bangladesh</span>
                            </div>
                            <div className="flex gap-6 my-2">
                              <span className="text-gray-400 text-sm">
                                Education
                              </span>
                              <span className="text-sm">: M.Phil</span>
                            </div>
                            <div className="flex gap-6 my-2">
                              <span className="text-gray-400 text-sm">
                                Occupation
                              </span>
                              <span className="text-sm">: Adutor</span>
                            </div>
                          </div>
                          <div className="sm:w-full md:w-[50%] flex items-end justify-end mb-4 mr-4 sm:mt-4">
                            <button className="btn btn-sm bg-orange-600 text-white hover:bg-orange-500">
                              View Full Profile
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* card two */}
                    <div className="border mt-6 hover:shadow-lg">
                      <div>
                        <span className="text-blue-500 text-sm font-semibold">
                          BGD3525625
                        </span>
                        <span className="mx-2 text-gray-500">|</span>
                        <span className="text-gray-500">
                          Profile create by self
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-48 h-48 p-4 border">
                          <img
                            src={bridGroomImg}
                            alt=""
                            className="w-[100%] h-[100%]"
                          />
                        </div>
                        <div className="sm:grid md:flex justify-between w-full">
                          <div className="sm:w-full md:w-[50%] mt-4">
                            <div className="flex gap-6 my-2">
                              <span className="text-gray-400 text-sm">Age</span>
                              <span className="text-sm">
                                : 32yrs, 5ft 10 in / 177cm
                              </span>
                            </div>
                            <div className="flex gap-6 my-2">
                              <span className="text-gray-400 text-sm">
                                Religion
                              </span>
                              <span className="text-sm">: Islam</span>
                            </div>
                            <div className="flex gap-6 my-2">
                              <span className="text-gray-400 text-sm">
                                Location
                              </span>
                              <span className="text-sm">: Bangladesh</span>
                            </div>
                            <div className="flex gap-6 my-2">
                              <span className="text-gray-400 text-sm">
                                Education
                              </span>
                              <span className="text-sm">: M.Phil</span>
                            </div>
                            <div className="flex gap-6 my-2">
                              <span className="text-gray-400 text-sm">
                                Occupation
                              </span>
                              <span className="text-sm">: Adutor</span>
                            </div>
                          </div>
                          <div className="sm:w-full md:w-[50%] flex items-end justify-end mb-4 mr-4 sm:mt-4">
                            <button className="btn btn-sm bg-orange-600 text-white hover:bg-orange-500">
                              View Full Profile
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div>
                    {/* card one */}
                    <div className="border mt-6 hover:shadow-lg">
                      <div>
                        <span className="text-blue-500 text-sm font-semibold">
                          BGD3525625
                        </span>
                        <span className="mx-2 text-gray-500">|</span>
                        <span className="text-gray-500">
                          Profile create by self
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-48 h-48 p-4 border">
                          <img
                            src={bridGroomImg}
                            alt=""
                            className="w-[100%] h-[100%]"
                          />
                        </div>
                        <div className="sm:grid md:flex justify-between w-full">
                          <div className="sm:w-full md:w-[50%] mt-4">
                            <div className="flex gap-6 my-2">
                              <span className="text-gray-400 text-sm">Age</span>
                              <span className="text-sm">
                                : 32yrs, 5ft 10 in / 177cm
                              </span>
                            </div>
                            <div className="flex gap-6 my-2">
                              <span className="text-gray-400 text-sm">
                                Religion
                              </span>
                              <span className="text-sm">: Islam</span>
                            </div>
                            <div className="flex gap-6 my-2">
                              <span className="text-gray-400 text-sm">
                                Location
                              </span>
                              <span className="text-sm">: Bangladesh</span>
                            </div>
                            <div className="flex gap-6 my-2">
                              <span className="text-gray-400 text-sm">
                                Education
                              </span>
                              <span className="text-sm">: M.Phil</span>
                            </div>
                            <div className="flex gap-6 my-2">
                              <span className="text-gray-400 text-sm">
                                Occupation
                              </span>
                              <span className="text-sm">: Adutor</span>
                            </div>
                          </div>
                          <div className="sm:w-full md:w-[50%] flex items-end justify-end mb-4 mr-4 sm:mt-4">
                            <button className="btn btn-sm bg-orange-600 text-white hover:bg-orange-500">
                              View Full Profile
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* card two */}
                    <div className="border mt-6 hover:shadow-lg">
                      <div>
                        <span className="text-blue-500 text-sm font-semibold">
                          BGD3525625
                        </span>
                        <span className="mx-2 text-gray-500">|</span>
                        <span className="text-gray-500">
                          Profile create by self
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-48 h-48 p-4 border">
                          <img
                            src={bridGroomImg}
                            alt=""
                            className="w-[100%] h-[100%]"
                          />
                        </div>
                        <div className="sm:grid md:flex justify-between w-full">
                          <div className="sm:w-full md:w-[50%] mt-4">
                            <div className="flex gap-6 my-2">
                              <span className="text-gray-400 text-sm">Age</span>
                              <span className="text-sm">
                                : 32yrs, 5ft 10 in / 177cm
                              </span>
                            </div>
                            <div className="flex gap-6 my-2">
                              <span className="text-gray-400 text-sm">
                                Religion
                              </span>
                              <span className="text-sm">: Islam</span>
                            </div>
                            <div className="flex gap-6 my-2">
                              <span className="text-gray-400 text-sm">
                                Location
                              </span>
                              <span className="text-sm">: Bangladesh</span>
                            </div>
                            <div className="flex gap-6 my-2">
                              <span className="text-gray-400 text-sm">
                                Education
                              </span>
                              <span className="text-sm">: M.Phil</span>
                            </div>
                            <div className="flex gap-6 my-2">
                              <span className="text-gray-400 text-sm">
                                Occupation
                              </span>
                              <span className="text-sm">: Adutor</span>
                            </div>
                          </div>
                          <div className="sm:w-full md:w-[50%] flex items-end justify-end mb-4 mr-4 sm:mt-4">
                            <button className="btn btn-sm bg-orange-600 text-white hover:bg-orange-500">
                              View Full Profile
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              </Tabs>
            </div>

            {/* bottom Pagination */}
            <div className="pt-6 pb-4 flex justify-end">
              <div className="flex gap-1 mr-4">
                <button className="join-item btn btn-xs">Prev</button>
                <button className="join-item btn btn-xs bg-green-500">1</button>
                <button className="join-item btn btn-xs btn-active">2</button>
                <button className="join-item btn btn-xs">3</button>
                <button className="join-item btn btn-xs">4</button>
                <button className="join-item btn btn-xs">5</button>
                <button className="join-item btn btn-xs">Next</button>
              </div>
            </div>
          </div>
        </div>
        {/* right gird */}
        <div className="col-span-2 p-2">
          <div>
            <h2 className="text-xl">Quick Search</h2>
            {/* Quick Search */}
            <div className="mt-8">
              <div className="flex justify-between">
                <span>Looking for: </span>
                <div className="flex items-center gap-4">
                  <div className="form-control">
                    <label className="cursor-pointer flex items-center gap-1">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-xs checkbox-accent"
                      />
                      <span className="label-text">Bride</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="cursor-pointer flex items-center gap-1">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-xs checkbox-accent"
                      />
                      <span className="label-text">Groom</span>
                    </label>
                  </div>
                </div>
              </div>
              {/* Age from to */}
              <div className="mt-2">
                <div className="flex justify-between">
                  <span>Age: </span>
                  <div className="flex gap-4">
                    <div className="flex w-full max-w-xs">
                      <select className="select select-bordered select-xs">
                        <option disabled selected>
                          18
                        </option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                        <option>25</option>
                      </select>
                    </div>
                    <div className="w-full max-w-xs">
                      <select className="select select-bordered select-xs">
                        <option disabled selected>
                          21
                        </option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                        <option>25</option>
                        <option>26</option>
                        <option>27</option>
                        <option>28</option>
                        <option>29</option>
                        <option>30</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2 flex justify-between gap-4">
                <span>Religion: </span>
                <select className="select select-bordered select-xs w-full max-w-xs">
                  <option disabled selected>
                    Islam
                  </option>
                  <option>Hinduism</option>
                  <option>Christain</option>
                </select>
              </div>
              <div className="mt-4 text-end">
                <button className="btn btn-sm bg-orange-600 hover:bg-orange-500 text-white">
                  Search
                </button>
              </div>
            </div>

            {/* By Religion */}
            <div className="mt-8">
              <h2 className="text-xl bg-gray-100 p-2">By Religion</h2>
              <div className="mt-4">
                <ul>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Islam Groom
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Dinduism Groom
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Christianity Groom
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Buddhism Groom
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* By Region */}
            <div className="mt-8">
              <h2 className="text-xl bg-gray-100 p-2">By Region</h2>
              <div className="mt-4">
                <ul>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Islam Groom
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Dinduism Groom
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Christianity Groom
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Buddhism Groom
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* By Sect */}
            <div className="mt-8">
              <h2 className="text-xl bg-gray-100 p-2">By Sect</h2>
              <div className="mt-4">
                <ul>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Islam Groom
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Dinduism Groom
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Christianity Groom
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Buddhism Groom
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* By Country */}
            <div className="mt-8">
              <h2 className="text-xl bg-gray-100 p-2">By Country</h2>
              <div className="mt-4">
                <ul>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Islam Groom
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Dinduism Groom
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Christianity Groom
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Buddhism Groom
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
