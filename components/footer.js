import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="p-4 lg:p-24 bg-tint w-full">
      <div className="grid grid-cols-4 lg:grid-cols-8 mb-24 gap-4">
        <div className="col-span-4">
          <Logo mono />
          <h2 className="text-xl mt-12">Crezco helps customers grow</h2>
        </div>
        <div className="col-span-2 lg:col-span-1 text-sm mt-12 lg:mt-0">
          <h3 className="font-bold tracking-wide text-black text-opacity-70">
            Company
          </h3>
          <ul>
            <li className="my-4">
              <a
                href="https://www.crezco.com/about"
                className="hover:underline text-black text-opacity-70 hover:text-opacity-90"
              >
                About
              </a>
            </li>
            <li className="my-4">
              <a
                href="https://www.crezco.com/contact-us"
                className="hover:underline text-black text-opacity-70 hover:text-opacity-90"
              >
                Contact us
              </a>
            </li>
            <li className="my-4">
              <a
                href="https://support.crezco.com"
                className="hover:underline text-black text-opacity-70 hover:text-opacity-90"
              >
                Support pages
              </a>
            </li>
            <li className="my-4">
              <a
                href="https://www.linkedin.com/company/crezcoltd"
                className="hover:underline text-black text-opacity-70 hover:text-opacity-90"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-2 lg:col-span-1 text-sm mt-12 lg:mt-0">
          <h3 className="font-bold tracking-wide text-black text-opacity-70">
            Developers
          </h3>
          <ul>
            <li className="my-4">
              <a
                href="https://documentation.crezco.com"
                className="hover:underline text-black text-opacity-70 hover:text-opacity-90"
              >
                Developer docs
              </a>
            </li>
            <li className="my-4">
              <a
                href="https://crezco.atlassian.net/servicedesk/customer/portals"
                className="hover:underline text-black text-opacity-70 hover:text-opacity-90"
              >
                Developer support
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-2 lg:col-span-1 text-sm mt-12 lg:mt-0">
          <h3 className="font-bold tracking-wide text-black text-opacity-70">
            Discover
          </h3>
          <ul>
            <li className="my-4">
              <a
                href="https://www.crezco.com/why-crezco"
                className="hover:underline text-black text-opacity-70 hover:text-opacity-90"
              >
                Pricing
              </a>
            </li>
            <li className="my-4">
              <a
                href="https://www.crezco.com/how-it-works"
                className="hover:underline text-black text-opacity-70 hover:text-opacity-90"
              >
                Open Banking
              </a>
            </li>
            <li className="my-4">
              <a
                href="https://www.crezco.com/security"
                className="hover:underline text-black text-opacity-70 hover:text-opacity-90"
              >
                Security
              </a>
            </li>
            <li className="my-4">
              <a
                href="https://www.crezco.com/how-it-works"
                className="hover:underline text-black text-opacity-70 hover:text-opacity-90"
              >
                How to&nbsp;pay
              </a>
            </li>
            <li className="my-4">
              <a
                href="https://www.crezco.com/how-it-works"
                className="hover:underline text-black text-opacity-70 hover:text-opacity-90"
              >
                How to be&nbsp;paid
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-2 lg:col-span-1 text-sm mt-12 lg:mt-0">
          <h3 className="font-bold tracking-wide text-black text-opacity-70">
            Legal
          </h3>
          <ul>
            <li className="my-4">
              <a
                href="https://www.crezco.com/terms"
                className="hover:underline text-black text-opacity-70 hover:text-opacity-90"
              >
                Terms
              </a>
            </li>
            <li className="my-4">
              <a
                href="https://www.crezco.com/privacy-policy"
                className="hover:underline text-black text-opacity-70 hover:text-opacity-90"
              >
                Privacy policy
              </a>
            </li>
            <li className="my-4">
              <a
                href="https://www.crezco.com/cookies"
                className="hover:underline text-black text-opacity-70 hover:text-opacity-90"
              >
                Cookies
              </a>
            </li>
            <li className="my-4">
              <a
                href="https://www.crezco.com/gift-aid"
                className="hover:underline text-black text-opacity-70 hover:text-opacity-90"
              >
                Gift Aid
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-xs font-normal text-black text-opacity-50 mb-1 leading-relaxed">
        To find out more about Crezco, please contact{" "}
        <a
          href="mailto:hello@crezco.com"
          className="underline hover:text-black hover:text-opacity-80"
        >
          hello@crezco.com
        </a>
        . Crezco Limited is a company registered in England and Wales
        (Registered Company Number 11752182).
        <br />
        Crezco’s registered address is: 192 Campden Hill Road, London, England,
        W8 7TH.
        <br />
        Crezco is authorised and regulated by the UK Financial Conduct Authority
        as an Authorised Payment Institution (Firm Reference Number 925173).
        <br />
        Crezco is registered with the Information Commissioner’s Office (Firm
        Reference Number ZA782880).
        <br />
        Crezco © 2021 All rights reserved.
      </p>
    </footer>
  );
}
