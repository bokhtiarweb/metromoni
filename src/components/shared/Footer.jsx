import React from "react";

export default function Footer() {
  return (
    <div className="w-full bg-neutral">
      <div className="max-w-screen-lg mx-auto">
        <footer className="footer text-neutral-content p-10 grid grid-cols-3">
          <nav>
            <h6 className="text-xl">About BangladeshiMatrimony</h6>
            <p>
              BangladeshiMatrimony.com is the No.1 most trusted matrimony site
              for Bangladeshi brides and grooms. Lakhs of members have
              successfully found their life partners here! Browse through our
              vast selection of profiles from all Religions{" "}
              <a className="text-blue-500" href="#">
                More...
              </a>
            </p>
          </nav>
          <nav className="ml-4">
            <h6 className="text-xl">Help & Support</h6>
            <a href="#">Live help</a>
            <a href="#">Contact us</a>
            <a href="#">Feedback</a>
            <a href="#">FAQs</a>
          </nav>
          <nav className="ml-4">
            <h6 className="text-xl">Quick link</h6>
            <a href="#">Upgrade</a>
            <a className="font-bold" href="#">
              Save Matrimony
            </a>
            <a href="#">Popular Matrimony Searches</a>
            <a href="#">Privacy Policy</a>
          </nav>
        </footer>
        <footer className="footer footer-center text-base-200 p-4">
          <aside>
            <p>
              BangladeshiMatrimony is part of Globalmatrimony.com | Copyright ©
              2025. All rights reserved. This website is strictly for matrimony
              purpose only and not a dating website
            </p>
          </aside>
        </footer>
        <footer className="footer text-neutral-content items-center p-4">
          <aside className="grid-flow-col items-center">
            <img src="./payment-gateway-footer.png" alt="" />
          </aside>
        </footer>
      </div>
    </div>
  );
}
