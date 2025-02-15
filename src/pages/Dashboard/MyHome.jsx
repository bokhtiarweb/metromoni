import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PageContent from "./Contents/PageContent";

export default function MyHome() {
  return (
    <div className="grid grid-cols-8 bg-gray-100">
      {/* Left section */}
      <div className="sm:col-span-3 lg:col-span-2">
        <div>
          {/* Accordian section start here */}
          <div className="join join-vertical w-full">
            {/* First accordian  */}
            <div className="collapse collapse-arrow join-item border-b border-base-300">
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
                    className="tab-content bg-base-100 border-base-300 "
                  >
                    <div className="text-gray-600">
                      <a
                        href="#"
                        target="_blank"
                        className="flex justify-between py-2 px-1 border-b border-gray-400"
                      >
                        <span>Pending</span>
                        <div className="badge badge-primary badge-md">0</div>
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="flex justify-between py-2 px-1 border-b border-gray-400"
                      >
                        <span>Accepted</span>
                        <div className="badge badge-primary badge-md">0</div>
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="flex justify-between py-2 px-1 border-b border-gray-400"
                      >
                        <span>Replied</span>
                        <div className="badge badge-primary badge-md">0</div>
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="flex justify-between py-2 px-1 border-b border-gray-400"
                      >
                        <span>Need Time/Info</span>
                        <div className="badge badge-primary badge-md">0</div>
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="flex justify-between py-2 px-1 border-b border-gray-400"
                      >
                        <span>Declined</span>
                        <div className="badge badge-primary badge-md">0</div>
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
                    className="tab-content bg-base-100 border-base-300"
                  >
                    <div className="text-gray-600">
                      <a
                        href="#"
                        target="_blank"
                        className="flex justify-between py-2 px-1 border-b border-gray-400"
                      >
                        <span>Pending</span>
                        <div className="badge badge-primary badge-md">0</div>
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="flex justify-between py-2 px-1 border-b border-gray-400"
                      >
                        <span>Accepted</span>
                        <div className="badge badge-primary badge-md">0</div>
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="flex justify-between py-2 px-1 border-b border-gray-400"
                      >
                        <span>Replied</span>
                        <div className="badge badge-primary badge-md">0</div>
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="flex justify-between py-2 px-1 border-b border-gray-400"
                      >
                        <span>Need Time / Info</span>
                        <div className="badge badge-primary badge-md">0</div>
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="flex justify-between py-2 px-1 border-b border-gray-400"
                      >
                        <span>Declined</span>
                        <div className="badge badge-primary badge-md">0</div>
                      </a>
                    </div>
                  </div>
                </div>
                {/* Tab end here */}
              </div>
            </div>
            {/* Second accordian  */}
            <div className="collapse collapse-arrow join-item border-b border-base-300">
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
                    className="tab-content bg-base-100 border-base-300 "
                  >
                    <div className="text-gray-600">
                      <a
                        href="#"
                        target="_blank"
                        className="flex justify-between py-2 px-1 border-b border-gray-400"
                      >
                        <span>Photo</span>
                        <div className="badge badge-primary badge-md">0</div>
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="flex justify-between py-2 px-1 border-b border-gray-400"
                      >
                        <span>Profile Info</span>
                        <div className="badge badge-primary badge-md">0</div>
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="flex justify-between py-2 px-1 border-b border-gray-400"
                      >
                        <span>Phone No.Grant</span>
                        <div className="badge badge-primary badge-md">0</div>
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
                    className="tab-content bg-base-100 border-base-300"
                  >
                    <div className="text-gray-600">
                      <a
                        href="#"
                        target="_blank"
                        className="flex justify-between py-2 px-1 border-b border-gray-400"
                      >
                        <span>Photo</span>
                        <div className="badge badge-primary badge-md">0</div>
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="flex justify-between py-2 px-1 border-b border-gray-400"
                      >
                        <span>Profile Info</span>
                        <div className="badge badge-primary badge-md">0</div>
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="flex justify-between py-2 px-1 border-b border-gray-400"
                      >
                        <span>Photo Grant</span>
                        <div className="badge badge-primary badge-md">0</div>
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="flex justify-between py-2 px-1 border-b border-gray-400"
                      >
                        <span>Phone No.Grant</span>
                        <div className="badge badge-primary badge-md">0</div>
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
        <div className="border-b border-gray-400 my-4 pb-2">
          <a
            href="#"
            target="_blank"
            className="text-lg font-bold px-4 border-b border-gray-400 text-gray-600"
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
                  <tr>
                    <td>
                      <a href="#" target="_blank">
                        SMS sent
                      </a>
                    </td>
                    <td>
                      <a href="#" target="_blank">
                        <div className="badge badge-primary badge-md">0</div>
                      </a>
                    </td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <td>
                      <a href="#" target="_blank">
                        SMS Received
                      </a>
                    </td>
                    <td>
                      <a href="#" target="_blank">
                        <div className="badge badge-primary badge-md">0</div>
                      </a>
                    </td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <td>
                      <a href="#" target="_blank">
                        Members you have sortlisted
                      </a>
                    </td>
                    <td>
                      <a href="#" target="_blank">
                        <div className="badge badge-primary badge-md">0</div>
                      </a>
                    </td>
                  </tr>
                  {/* row 4 */}
                  <tr>
                    <td>
                      <a href="#" target="_blank">
                        Members you have blocked
                      </a>
                    </td>
                    <td>
                      <a href="#" target="_blank">
                        <div className="badge badge-primary badge-md">0</div>
                      </a>
                    </td>
                  </tr>
                  {/* row 5 */}
                  <tr>
                    <td>
                      <a href="#" target="_blank">
                        Memebers you have ignored
                      </a>
                    </td>
                    <td>
                      <a href="#" target="_blank">
                        <div className="badge badge-primary badge-md">0</div>
                      </a>
                    </td>
                  </tr>
                  {/* row 6 */}
                  <tr>
                    <td>
                      <a href="#" target="_blank">
                        Mobile no(s) viewed by You
                      </a>
                    </td>
                    <td>
                      <a href="#" target="_blank">
                        <div className="badge badge-primary badge-md">0</div>
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
                        <div className="badge badge-primary badge-md">0</div>
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
      <div className="sm:col-span-5 lg:col-span-6">
        {/* Section tab start here */}
        <div>
          <Tabs>
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
  );
}
