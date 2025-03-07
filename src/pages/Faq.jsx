import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function Faq() {
  return (
    <div className="max-w-screen-lg mx-auto pb-8">
      <div>
        <div>
          <h2 className="text-orange-500 text-2xl font-semibold">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-6">
          <div className="mb-4">
            <h3 className="text-xl font-bold">Topics</h3>
          </div>
          <Tabs>
            <TabList>
              <Tab>Profile</Tab>
              <Tab>View more</Tab>
              <Tab>Contact profiles</Tab>
              <Tab>Payment</Tab>
              <Tab>Report issues and Privacy</Tab>
              <Tab>Product and services</Tab>
            </TabList>
            <TabPanel>
              {/* Photo collapse start */}
              <div>
                <div className="ml-2 py-2">
                  <p className="font-bold">(1.1) Photo</p>
                </div>
                {/* collapse-1 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    1. How can I add a photo?
                  </div>
                  <div className="collapse-content">
                    <p>
                      Click{" "}
                      <a href="#" className="text-blue-500">
                        here
                      </a>{" "}
                      to upload photo. Please note: It may take up to 2 hours
                      for photo validation, after which it will be visible to
                      everyone.
                    </p>
                  </div>
                </div>
                {/* collapse-2 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    2. How can I set my photo visible only to those people whom
                    I have contacted/responded to me?
                  </div>
                  <div className="collapse-content">
                    <p>
                      Click <a href="#">here</a> to change photo privacy
                      settings. Or, open your profile page Edit profile Settings
                      Photo Choose - Make my photo visible only to members I
                      prefer Save
                    </p>
                  </div>
                </div>
                {/* collapse-3 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    3. How can I make my photo visible only to members I prefer,
                    and not everyone?
                  </div>
                  <div className="collapse-content">
                    <p>
                      Click <a href="#">here</a> to change photo privacy
                      settings. Or, open your profile page Edit profile Settings
                      Photo Make my photo visible only to members I prefer Save
                    </p>
                  </div>
                </div>
                {/* collapse-4 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    4. Why is my photo not visible on my profile?
                  </div>
                  <div className="collapse-content">
                    <p>
                      Your photo could be Rejected as it does not comply with
                      our photo guidelines. Or it could be Under validation, in
                      which case it may can take up to 24 hours to be visible to
                      matches.
                    </p>
                  </div>
                </div>
                {/* collapse-5 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    5. How do I remove a photo from my profile?
                  </div>
                  <div className="collapse-content">
                    <p>
                      You can remove your photo(s) <a href="#">here</a>.
                      Alternatively, open your profile page Click on the photo
                      at the top of the page Profile completeness Edit Profile
                    </p>
                  </div>
                </div>
                {/* collapse-6 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    6. How can I request a member for his/her photo.
                  </div>
                  <div className="collapse-content">
                    <p>
                      Matches with no photos feature the avatar with an option
                      to request photo. Alternatively, you can visit the
                      profile(s) of match(es) and send a photo request.
                    </p>
                  </div>
                </div>
              </div>
              {/* Delete and deactive profile */}
              <div>
                <div className="ml-2 py-2">
                  <p className="font-bold">(1.2) Delete/Deactivate Profile</p>
                </div>
                {/* collapse-1 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    1. How to delete my profile as my wedding has been fixed?
                  </div>
                  <div className="collapse-content">
                    <p>
                      to upload photo. Please note: It may take up to 2 hours
                      for photo validation, after which it will be visible to
                      everyone.To delete your profile by clicking{" "}
                      <a href="#" className="text-blue-500">
                        here
                      </a>{" "}
                      Delete Profile Select reason Select source Fill details
                      Submit Enter password Delete profile
                    </p>
                  </div>
                </div>
                {/* collapse-2 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    2. How can I temporarily deactivate my profile?
                  </div>
                  <div className="collapse-content">
                    <p>
                      To deactivate your profile, please log in to your account
                      and go to My home Settings Account settings Deactivate
                      profile Yes, I want to hide my profile Save
                    </p>
                  </div>
                </div>
                {/* collapse-3 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    3. My profile has been suspended. What can I do?
                  </div>
                  <div className="collapse-content">
                    <p>Get in touch with our customer care at 1800-3000-2222</p>
                  </div>
                </div>
              </div>
              {/* Edit profile */}
              <div>
                <div className="ml-2 py-2">
                  <p className="font-bold">(1.3) Edit Profile</p>
                </div>
                {/* collapse-1 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    1. How can I edit my profile?
                  </div>
                  <div className="collapse-content">
                    <p>
                      You can edit your profile by clicking{" "}
                      <a href="#" className="text-blue-500">
                        here
                      </a>{" "}
                      Make changes Save
                    </p>
                  </div>
                </div>
                {/* collapse-2 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    2. Why am I am unable to edit certain fields on my profile?
                  </div>
                  <div className="collapse-content">
                    <p>
                      You will not be able to edit profile created by, name,
                      date of birth, marital status, height, physical status,
                      caste, and about me details more than once. To make any
                      changes to your profile, please contact us at
                      1800-3000-2222.
                    </p>
                  </div>
                </div>
                {/* collapse-3 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    3. My profile has been suspended. What can I do?
                  </div>
                  <div className="collapse-content">
                    <p>Get in touch with our customer care at 1800-3000-2222</p>
                  </div>
                </div>
              </div>
              {/* Others */}
              <div>
                <div className="ml-2 py-2">
                  <p className="font-bold">(1.4) Others</p>
                </div>
                {/* collapse-1 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    1. What is profile completeness?
                  </div>
                  <div className="collapse-content">
                    <p>
                      It indicates whether or not you have updated all the
                      important details about yourself. More details improve
                      profile credibility.
                    </p>
                  </div>
                </div>
                {/* collapse-2 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    2. How will my profile look to other members?
                  </div>
                  <div className="collapse-content">
                    <p>
                      You will not be able to edit profile created by, name,
                      date of birth, marital status, height, physical status,
                      caste, and about me details more than once. To make any
                      changes to your profile, please contact us at
                      1800-3000-2222.You can view how your profile looks to
                      other members by clicking <a href="#">here</a>.
                    </p>
                  </div>
                </div>
                {/* collapse-3 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    3. How can I log out?
                  </div>
                  <div className="collapse-content">
                    <p>
                      You can log out by clicking <a href="#">here</a>
                    </p>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                {/* collapse-1 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    1. How can I make my profile more prominent?
                  </div>
                  <div className="collapse-content">
                    <p>
                      Please make sure your profile is 100% complete. You can
                      also subscribe to an add-on, profile highlighter{" "}
                      <a href="#" className="text-blue-500">
                        here
                      </a>{" "}
                      F & be featured in your matches' search results.
                    </p>
                  </div>
                </div>
                {/* collapse-2 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    2. What is a Mutual Match?
                  </div>
                  <div className="collapse-content">
                    <p>
                      Mutual match gives you a list of members whose partner
                      preferences match your profile and whose profile matches
                      your partner preference. To view them, click
                      <a href="#">here</a>
                    </p>
                  </div>
                </div>
                {/* collapse-3 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    3. What are Daily Recommendations?
                  </div>
                  <div className="collapse-content">
                    <p>
                      Daily recommendations are chosen profiles that closely
                      match your partner preference. Click to view them{" "}
                      <a href="#">here</a>
                    </p>
                  </div>
                </div>
                {/* collapse-4 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    4. What is Top Placement?
                  </div>
                  <div className="collapse-content">
                    <p>
                      Top placement is an add-on that shows your profile at the
                      top of your prospects' search results. To subscribe to the
                      add-on, click <a href="#">here</a>
                    </p>
                  </div>
                </div>
                {/* collapse-5 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    5. I am not getting enough matches. What do I do?
                  </div>
                  <div className="collapse-content">
                    <p>
                      You can try broadening your partner preferences to find
                      suitable matches. Alternatively, make sure you have
                      updated your profile to receive relevant matches.
                    </p>
                  </div>
                </div>
                {/* collapse-6 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    6. What are New Matches?
                  </div>
                  <div className="collapse-content">
                    <p>
                      New matches are matches who closely match your partner
                      preference & have registered with us the previous day. To
                      view them, click <a href="#">here</a>
                    </p>
                  </div>
                </div>
              </div>
              {/* Photo collapse start */}
              <div>
                <div className="ml-2 py-2">
                  <p className="font-bold">Searches</p>
                </div>
                {/* collapse-1 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    1. How can I search using Matri ID?
                  </div>
                  <div className="collapse-content">
                    <p>
                      You can search for a member using his/her Matri ID. To
                      search now, click <a href="#">here</a>
                    </p>
                  </div>
                </div>
                {/* collapse-2 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    2. How can I manually search for profiles?
                  </div>
                  <div className="collapse-content">
                    <p>
                      You can use Regular Search as a basic search option to
                      find relevant matches <a href="#">here</a> Alternatively,
                      for a more refined search you can use Advanced Search{" "}
                      <a href="#">here</a>.
                    </p>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                {/* collapse-1 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    1. What is Send Interest?
                  </div>
                  <div className="collapse-content">
                    <p>
                      Please make sure your profile is 100% complete. You can
                      also subscribe to an add-on, profile highlighter{" "}
                      <a href="#" className="text-blue-500">
                        here
                      </a>{" "}
                      F & be featured in your matches' search results.
                    </p>
                  </div>
                </div>
                {/* collapse-2 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    2. How can I contact another member?
                  </div>
                  <div className="collapse-content">
                    <p>
                      Mutual match gives you a list of members whose partner
                      preferences match your profile and whose profile matches
                      your partner preference. To view them, click
                      <a href="#">here</a>
                    </p>
                  </div>
                </div>
                {/* collapse-3 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    3. I'm a paid member. How can I contact a member like?
                  </div>
                  <div className="collapse-content">
                    <p>
                      Daily recommendations are chosen profiles that closely
                      match your partner preference. Click to view them{" "}
                      <a href="#">here</a>
                    </p>
                  </div>
                </div>
                {/* collapse-4 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    4. How do I know who else is online?
                  </div>
                  <div className="collapse-content">
                    <p>
                      Top placement is an add-on that shows your profile at the
                      top of your prospects' search results. To subscribe to the
                      add-on, click <a href="#">here</a>
                    </p>
                  </div>
                </div>
                {/* collapse-5 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    5. How to shortlist profiles that I am interested in?
                  </div>
                  <div className="collapse-content">
                    <p>
                      You can try broadening your partner preferences to find
                      suitable matches. Alternatively, make sure you have
                      updated your profile to receive relevant matches.
                    </p>
                  </div>
                </div>
                {/* collapse-6 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    6. I would like to update my Trust Badge?
                  </div>
                  <div className="collapse-content">
                    <p>
                      New matches are matches who closely match your partner
                      preference & have registered with us the previous day. To
                      view them, click <a href="#">here</a>
                    </p>
                  </div>
                </div>
                {/* collapse-6 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    7. My match's contact number is invalid/incorrect. How do I
                    report it?
                  </div>
                  <div className="collapse-content">
                    <p>
                      New matches are matches who closely match your partner
                      preference & have registered with us the previous day. To
                      view them, click <a href="#">here</a>
                    </p>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <div className="ml-2 py-2">
                  <p className="font-bold">Searches</p>
                </div>
                {/* collapse-1 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    1. How can I search using Matri ID?
                  </div>
                  <div className="collapse-content">
                    <p>
                      You can search for a member using his/her Matri ID. To
                      search now, click <a href="#">here</a>
                    </p>
                  </div>
                </div>
                {/* collapse-2 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    2. How can I manually search for profiles?
                  </div>
                  <div className="collapse-content">
                    <p>
                      You can use Regular Search as a basic search option to
                      find relevant matches <a href="#">here</a> Alternatively,
                      for a more refined search you can use Advanced Search{" "}
                      <a href="#">here</a>.
                    </p>
                  </div>
                </div>
                {/* collapse-3 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    2. How can I manually search for profiles?
                  </div>
                  <div className="collapse-content">
                    <p>
                      You can use Regular Search as a basic search option to
                      find relevant matches <a href="#">here</a> Alternatively,
                      for a more refined search you can use Advanced Search{" "}
                      <a href="#">here</a>.
                    </p>
                  </div>
                </div>
                {/* collapse-4 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    2. How can I manually search for profiles?
                  </div>
                  <div className="collapse-content">
                    <p>
                      You can use Regular Search as a basic search option to
                      find relevant matches <a href="#">here</a> Alternatively,
                      for a more refined search you can use Advanced Search{" "}
                      <a href="#">here</a>.
                    </p>
                  </div>
                </div>
                {/* collapse-5 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    2. How can I manually search for profiles?
                  </div>
                  <div className="collapse-content">
                    <p>
                      You can use Regular Search as a basic search option to
                      find relevant matches <a href="#">here</a> Alternatively,
                      for a more refined search you can use Advanced Search{" "}
                      <a href="#">here</a>.
                    </p>
                  </div>
                </div>
                {/* collapse-6 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    2. How can I manually search for profiles?
                  </div>
                  <div className="collapse-content">
                    <p>
                      You can use Regular Search as a basic search option to
                      find relevant matches <a href="#">here</a> Alternatively,
                      for a more refined search you can use Advanced Search{" "}
                      <a href="#">here</a>.
                    </p>
                  </div>
                </div>
                {/* collapse-7 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    2. How can I manually search for profiles?
                  </div>
                  <div className="collapse-content">
                    <p>
                      You can use Regular Search as a basic search option to
                      find relevant matches <a href="#">here</a> Alternatively,
                      for a more refined search you can use Advanced Search{" "}
                      <a href="#">here</a>.
                    </p>
                  </div>
                </div>
              </div>
              {/* Membership */}
              <div>
                <div className="ml-2 py-2">
                  <p className="font-bold">Membership</p>
                </div>
                {/* collapse-1 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    1. How can I search using Matri ID?
                  </div>
                  <div className="collapse-content">
                    <p>
                      You can search for a member using his/her Matri ID. To
                      search now, click <a href="#">here</a>
                    </p>
                  </div>
                </div>
                {/* collapse-2 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    2. How can I manually search for profiles?
                  </div>
                  <div className="collapse-content">
                    <p>
                      You can use Regular Search as a basic search option to
                      find relevant matches <a href="#">here</a> Alternatively,
                      for a more refined search you can use Advanced Search{" "}
                      <a href="#">here</a>.
                    </p>
                  </div>
                </div>
                {/* collapse-3 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    2. How can I manually search for profiles?
                  </div>
                  <div className="collapse-content">
                    <p>
                      You can use Regular Search as a basic search option to
                      find relevant matches <a href="#">here</a> Alternatively,
                      for a more refined search you can use Advanced Search{" "}
                      <a href="#">here</a>.
                    </p>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              {/* Other */}
              <div>
                <div className="ml-2 py-2">
                  <p className="font-bold">Other</p>
                </div>
                {/* collapse-1 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    1. How can I search using Matri ID?
                  </div>
                  <div className="collapse-content">
                    <p>
                      You can search for a member using his/her Matri ID. To
                      search now, click <a href="#">here</a>
                    </p>
                  </div>
                </div>
                {/* collapse-2 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    2. How can I manually search for profiles?
                  </div>
                  <div className="collapse-content">
                    <p>
                      You can use Regular Search as a basic search option to
                      find relevant matches <a href="#">here</a> Alternatively,
                      for a more refined search you can use Advanced Search{" "}
                      <a href="#">here</a>.
                    </p>
                  </div>
                </div>
                {/* collapse-3 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    2. How can I manually search for profiles?
                  </div>
                  <div className="collapse-content">
                    <p>
                      You can use Regular Search as a basic search option to
                      find relevant matches <a href="#">here</a> Alternatively,
                      for a more refined search you can use Advanced Search{" "}
                      <a href="#">here</a>.
                    </p>
                  </div>
                </div>
              </div>
              {/* Other Members */}
              <div>
                <div className="ml-2 py-2">
                  <p className="font-bold">Other Members</p>
                </div>
                {/* collapse-1 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    1. How can I search using Matri ID?
                  </div>
                  <div className="collapse-content">
                    <p>
                      You can search for a member using his/her Matri ID. To
                      search now, click <a href="#">here</a>
                    </p>
                  </div>
                </div>
                {/* collapse-2 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    2. How can I manually search for profiles?
                  </div>
                  <div className="collapse-content">
                    <p>
                      You can use Regular Search as a basic search option to
                      find relevant matches <a href="#">here</a> Alternatively,
                      for a more refined search you can use Advanced Search{" "}
                      <a href="#">here</a>.
                    </p>
                  </div>
                </div>
                {/* collapse-3 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    2. How can I manually search for profiles?
                  </div>
                  <div className="collapse-content">
                    <p>
                      You can use Regular Search as a basic search option to
                      find relevant matches <a href="#">here</a> Alternatively,
                      for a more refined search you can use Advanced Search{" "}
                      <a href="#">here</a>.
                    </p>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              {/* Other */}
              <div>
                {/* collapse-1 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    1. How can I search using Matri ID?
                  </div>
                  <div className="collapse-content">
                    <p>
                      You can search for a member using his/her Matri ID. To
                      search now, click <a href="#">here</a>
                    </p>
                  </div>
                </div>
                {/* collapse-2 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    2. How can I manually search for profiles?
                  </div>
                  <div className="collapse-content">
                    <p>
                      You can use Regular Search as a basic search option to
                      find relevant matches <a href="#">here</a> Alternatively,
                      for a more refined search you can use Advanced Search{" "}
                      <a href="#">here</a>.
                    </p>
                  </div>
                </div>
                {/* collapse-3 */}
                <div className="collapse collapse-plus border border-base-300 bg-base-200">
                  <input type="checkbox" className="peer min-h-0 " />
                  <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                    2. How can I manually search for profiles?
                  </div>
                  <div className="collapse-content">
                    <p>
                      You can use Regular Search as a basic search option to
                      find relevant matches <a href="#">here</a> Alternatively,
                      for a more refined search you can use Advanced Search{" "}
                      <a href="#">here</a>.
                    </p>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
