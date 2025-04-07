import React, { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import toast, { Toaster } from "react-hot-toast";

//INTERNAL IMPORT
import {
  FaWallet,
  MdAdminPanelSettings,
  MdGeneratingTokens,
} from "../Components/ReactICON/index";

const ADMIN_ADDRESS = process.env.NEXT_PUBLIC_ADMIN_ADDRESS;

const Header = ({ page }) => {
  const [tokenBalComp, setTokenBalComp] = useState();

  const { address } = useAccount();

  const navigation = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "Staking",
      link: "#staking",
    },
    {
      name: "Crypto",
      link: "#crypto",
    },
    {
      name: "Partners",
      link: "#partners",
    },
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header__content">
              <button
                className="header__btn"
                type="button"
                aria-label="header__nav"
              >
                <span />
                <span />
                <span />
              </button>

              <a href="/" className="header__logo">
                <img src="img/logo.svg" alt="" />
              </a>

              <span className="header__tagline">Stake-X</span>

              <ul className="header__nav" id="header__nav">
                {navigation.map((item, index) => (
                  <li key={index}>
                    <a
                      href={
                        page == "activity"
                          ? "/"
                          : page == "admin"
                          ? "/"
                          : `${item.link}`
                      }
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              <ConnectButton />

              <a
                style={{
                  marginLeft: "10px",
                }}
                data-bs-target="#modal-deposit1"
                type="button"
                data-bs-toggle="modal"
                class="header__profile"
              >
                <i class="ti ti-user-circle">
                  <MdGeneratingTokens />
                </i>
                <span>Token dStake</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
