import logo from '@/public/images/logo.png';

import Image from "next/image";

export default function TopHeader() {
    return(
    <header id="page-topbar">
      <div className="navbar-header">
        <div className="d-flex">
          {/* LOGO */}
          <div className="navbar-brand-box">
            <a href="#" className="logo logo-dark">
              <span className="logo-lg">
                <Image src={logo} alt="logo" />
              </span>
            </a>
          </div>
          {/* <button
            type="button"
            className="btn btn-sm px-3 font-size-16 header-item"
            id="vertical-menu-btn"
          >
            <i className="fa fa-fw fa-bars" />
          </button> */}
          {/* App Search*/}
        </div>
        {/* <form className="p-3">
                <div className="form-group m-0">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search ..."
                      aria-label="Search Result"
                    />
                    <button className="btn btn-primary" type="submit">
                      <i className="mdi mdi-magnify" />
                    </button>
                  </div>
                </div>
              </form> */}
        <div className="d-flex">
          {/* <div className="dropdown d-inline-block d-lg-none ms-2">
            <button
              type="button"
              className="btn header-item"
              id="page-header-search-dropdown"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i data-feather="search" className="icon-lg" />
            </button>
            <div
              className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
              aria-labelledby="page-header-search-dropdown"
            >
              
            </div>
          </div> */}
          
          <div className="dropdown d-inline-block">
            {/* <button
              type="button"
              className="btn header-item bg-light-subtle border-start border-end"
              id="page-header-user-dropdown"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                className="rounded-circle header-profile-user"
                src="assets/images/users/avatar-1.jpg"
                alt="Header Avatar"
              />
              <span className="d-none d-xl-inline-block ms-1 fw-medium">
                Paul K.
              </span>
              <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
            </button> */}
            <div className="dropdown-menu dropdown-menu-end">
              {/* item*/}
              <a className="dropdown-item" href="apps-contacts-profile.html">
                <i className="mdi mdi-face-profile font-size-16 align-middle me-1" />{" "}
                Profile
              </a>
              <a className="dropdown-item" href="auth-lock-screen.html">
                <i className="mdi mdi-lock font-size-16 align-middle me-1" />{" "}
                Lock screen
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="auth-logout.html">
                <i className="mdi mdi-logout font-size-16 align-middle me-1" />{" "}
                Logout

                
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>

    )
}