import React from "react";

export default function Footer() {
  return (
    <div className="w-full bg-neutral mt-20">
      <div className="max-w-screen-lg mx-auto px-4">
        <footer className="footer text-neutral-content p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <nav className="text-center md:text-left">
            <h6 className="text-xl font-semibold">
              About BMC
            </h6>
            <p className="mt-2">
            BMC.com is the No.1 most trusted matrimony site
              for Bangladeshi brides and grooms. Lakhs of members have
              successfully found their life partners here! Browse through our
              vast selection of profiles from all Religions{" "}
              <a className="text-blue-500" href="#">
                More...
              </a>
            </p>
          </nav>
          <nav className="sm:text-left md:mx-auto">
            <h6 className="text-xl font-semibold">Help & Support</h6>
            <div className="flex flex-col mt-2 space-y-2">
              <a href="/livehelp" target="_blank">Live help</a>
              <a href="/contactus" target="_blank">Contact us</a>
              <a href="/feedback" target="_blank">Feedback</a>
              <a href="/faq" target="_blank">FAQs</a>
            </div>
          </nav>
          <nav className="sm:text-left">
            <h6 className="text-xl font-semibold">Quick Links</h6>
            <div className="flex flex-col mt-2 space-y-2">
              <a href="/membershipupgrade" target="_blank">Upgrade</a>
              <a className="font-bold" href="#">
                Save Matrimony
              </a>
              <a href="/bangladeshibridegroom" target="_blank">Popular Matrimony Searches</a>
              <a href="/termcondition" target="_blank">Terms, Conditions and Refund Policy</a>
              <a href="/privacypolicy" target="_blank">Privacy Policy</a>
            </div>
          </nav>
        </footer>

        <footer className="footer footer-center text-sm text-base-200 p-4">
          <aside>
            <p>
               is part of Globalmatrimony.com | Copyright ©
              2025. All rights reserved. This website is strictly for matrimony
              purposes only and not a dating website.
            </p>
          </aside>
        </footer>

        <footer className="footer text-neutral-content items-center p-4">
          <aside className="grid-flow-col items-center justify-center">
            <img
              src="/payment-gateway-footer.png"
              alt="Payment Gateway"
              className="max-w-full h-auto"
            />
          </aside>
        </footer>
      </div>
    </div>
  );
}
