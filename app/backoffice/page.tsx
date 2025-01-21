"use client"
import TopHeader from './components/topHeader';
import LeftNavigation from './components/leftNavigation';
import Footer from '../components/footer/Footer';
export default function Home() {
  return (
    <>
      {/* <body data-layout="horizontal"> */}
      {/* Begin page */}
      <div id="layout-wrapper">
        <TopHeader />
        {/* ========== Left Sidebar Start ========== */}
        <LeftNavigation />
        {/* Left Sidebar End */}
        {/* ============================================================== */}
        {/* Start right Content here */}
        {/* ============================================================== */}
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              {/* start page title */}
              {/* <div className="row">
                <div className="col-12">
                  <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 className="mb-sm-0 font-size-18">Welcome !</h4>
                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                          <a href="javascript: void(0);">Dashboard</a>
                        </li>
                        <li className="breadcrumb-item active">Welcome !</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* end page title */}
              <div className="row">
                <div className="col-xl-3 col-md-6">
                  {/* card */}
                  <div className="card card-h-100">
                    {/* card body */}
                    {/* <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <span className="text-muted mb-3 lh-1 d-block text-truncate">
                            Total Sales
                          </span>
                          <h4 className="mb-3">
                            $
                            <span className="counter-value" data-target="354.5">
                              0
                            </span>
                            k
                          </h4>
                          <div className="text-nowrap">
                            <span className="badge bg-success-subtle text-success">
                              +$20.9k
                            </span>
                            <span className="ms-1 text-muted font-size-13">
                              Since last week
                            </span>
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-end dash-widget">
                          <div
                            id="mini-chart1"
                            data-colors='["--bs-primary", "--bs-success"]'
                            className="apex-charts"
                          />
                        </div>
                      </div>
                    </div> */}
                    {/* end card body */}
                  </div>
                  {/* end card */}
                </div>
                {/* end col */}
                <div className="col-xl-3 col-md-6">
                  {/* card */}
                  <div className="card card-h-100">
                    {/* card body */}
                    {/* <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <span className="text-muted mb-3 lh-1 d-block text-truncate">
                            Total Items
                          </span>
                          <h4 className="mb-3">
                            <span className="counter-value" data-target={1256}>
                              0
                            </span>
                          </h4>
                          <div className="text-nowrap">
                            <span className="badge bg-danger-subtle text-danger">
                              -29 Trades
                            </span>
                            <span className="ms-1 text-muted font-size-13">
                              Since last week
                            </span>
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-end dash-widget">
                          <div
                            id="mini-chart2"
                            data-colors='["--bs-primary", "--bs-success"]'
                            className="apex-charts"
                          />
                        </div>
                      </div>
                    </div> */}
                    {/* end card body */}
                  </div>
                  {/* end card */}
                </div>
                {/* end col*/}
                <div className="col-xl-3 col-md-6">
                  {/* card */}
                  <div className="card card-h-100">
                    {/* card body */}
                    {/* <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <span className="text-muted mb-3 lh-1 d-block text-truncate">
                            Average Sales
                          </span>
                          <h4 className="mb-3">
                            $
                            <span className="counter-value" data-target="7.54">
                              0
                            </span>
                            M
                          </h4>
                          <div className="text-nowrap">
                            <span className="badge bg-success-subtle text-success">
                              + $2.8k
                            </span>
                            <span className="ms-1 text-muted font-size-13">
                              Since last week
                            </span>
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-end dash-widget">
                          <div
                            id="mini-chart3"
                            data-colors='["--bs-primary", "--bs-success"]'
                            className="apex-charts"
                          />
                        </div>
                      </div>
                    </div> */}
                    {/* end card body */}
                  </div>
                  {/* end card */}
                </div>
                {/* end col */}
                <div className="col-xl-3 col-md-6">
                  {/* card */}
                  <div className="card card-h-100">
                    {/* card body */}
                    {/* <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <span className="text-muted mb-3 lh-1 d-block text-truncate">
                            Order Delivery
                          </span>
                          <h4 className="mb-3">
                            <span className="counter-value" data-target="18.34">
                              0
                            </span>
                            %
                          </h4>
                          <div className="text-nowrap">
                            <span className="badge bg-success-subtle text-success">
                              +5.32%
                            </span>
                            <span className="ms-1 text-muted font-size-13">
                              Since last week
                            </span>
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-end dash-widget">
                          <div
                            id="mini-chart4"
                            data-colors='["--bs-primary", "--bs-success"]'
                            className="apex-charts"
                          />
                        </div>
                      </div>
                    </div> */}
                    {/* end card body */}
                  </div>
                  {/* end card */}
                </div>
                {/* end col */}
              </div>
              {/* end row*/}
              <div className="row">
                <div className="col-xl-8">
                  {/* card */}
                  <div className="card">
                    {/* card body */}
                    {/* <div className="card-body">
                      <div className="d-flex flex-wrap align-items-center mb-4">
                        <h5 className="card-title me-2">Market Overview</h5>
                        <div className="ms-auto">
                          <div>
                            <button
                              type="button"
                              className="btn btn-soft-primary btn-sm"
                            >
                              ALL
                            </button>
                            <button
                              type="button"
                              className="btn btn-soft-secondary btn-sm"
                            >
                              1M
                            </button>
                            <button
                              type="button"
                              className="btn btn-soft-secondary btn-sm"
                            >
                              6M
                            </button>
                            <button
                              type="button"
                              className="btn btn-soft-secondary btn-sm"
                            >
                              1Y
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="row align-items-center">
                        <div className="col-xl-8">
                          <div>
                            <div
                              id="market-overview"
                              data-colors='["--bs-primary", "--bs-success"]'
                              className="apex-charts"
                            />
                          </div>
                        </div>
                        <div className="col-xl-4">
                          <div className="p-4">
                            <div className="mt-0">
                              <div className="d-flex align-items-center">
                                <div className="avatar-sm m-auto">
                                  <span className="avatar-title rounded-circle bg-light text-dark font-size-13">
                                    1
                                  </span>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                  <span className="font-size-14">
                                    Mobile Phones
                                  </span>
                                </div>
                                <div className="flex-shrink-0">
                                  <span className="badge rounded-pill bg-success-subtle text-success  font-size-12 fw-medium">
                                    +5.4%
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="mt-3">
                              <div className="d-flex align-items-center">
                                <div className="avatar-sm m-auto">
                                  <span className="avatar-title rounded-circle bg-light text-dark font-size-13">
                                    2
                                  </span>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                  <span className="font-size-14">Smart Watch</span>
                                </div>
                                <div className="flex-shrink-0">
                                  <span className="badge rounded-pill bg-success-subtle text-success  font-size-12 fw-medium">
                                    +6.8%
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="mt-3">
                              <div className="d-flex align-items-center">
                                <div className="avatar-sm m-auto">
                                  <span className="avatar-title rounded-circle bg-light text-dark font-size-13">
                                    3
                                  </span>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                  <span className="font-size-14">
                                    Protable Acoustics
                                  </span>
                                </div>
                                <div className="flex-shrink-0">
                                  <span className="badge rounded-pill bg-danger-subtle text-danger  font-size-12 fw-medium">
                                    -4.9%
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="mt-3">
                              <div className="d-flex align-items-center">
                                <div className="avatar-sm m-auto">
                                  <span className="avatar-title rounded-circle bg-light text-dark font-size-13">
                                    4
                                  </span>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                  <span className="font-size-14">
                                    Smart Speakers
                                  </span>
                                </div>
                                <div className="flex-shrink-0">
                                  <span className="badge rounded-pill bg-success-subtle text-success  font-size-12 fw-medium">
                                    +3.5%
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="mt-3">
                              <div className="d-flex align-items-center">
                                <div className="avatar-sm m-auto">
                                  <span className="avatar-title rounded-circle bg-light text-dark font-size-13">
                                    5
                                  </span>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                  <span className="font-size-14">Camcorders</span>
                                </div>
                                <div className="flex-shrink-0">
                                  <span className="badge rounded-pill bg-danger-subtle text-danger  font-size-12 fw-medium">
                                    -0.3%
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="mt-4 pt-2">
                              <a href="" className="btn btn-primary w-100">
                                See All Balances{" "}
                                <i className="mdi mdi-arrow-right ms-1" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* end card */}
                  </div>
                  {/* end col */}
                </div>
                {/* end row*/}
                <div className="col-xl-4">
                  {/* card */}
                  <div className="card">
                    {/* card body */}
                    {/* <div className="card-body">
                      <div className="d-flex flex-wrap align-items-center mb-4">
                        <h5 className="card-title me-2">Sales by Locations</h5>
                        <div className="ms-auto">
                          <div className="dropdown">
                            <a
                              className="dropdown-toggle text-reset"
                              href="#"
                              id="dropdownMenuButton1"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span className="text-muted font-size-12">
                                Sort By:
                              </span>{" "}
                              <span className="fw-medium">
                                World
                                <i className="mdi mdi-chevron-down ms-1" />
                              </span>
                            </a>
                            <div
                              className="dropdown-menu dropdown-menu-end"
                              aria-labelledby="dropdownMenuButton1"
                            >
                              <a className="dropdown-item" href="#">
                                USA
                              </a>
                              <a className="dropdown-item" href="#">
                                Russia
                              </a>
                              <a className="dropdown-item" href="#">
                                Australia
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="sales-by-locations"
                        data-colors='["--bs-success"]'
                        style={{ height: 253 }}
                      />
                      <div className="px-2 py-2">
                        <p className="mb-1">
                          USA <span className="float-end">75%</span>
                        </p>
                        <div className="progress mt-2" style={{ height: 6 }}>
                          <div
                            className="progress-bar progress-bar-striped bg-primary"
                            role="progressbar"
                            style={{ width: "75%" }}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={75}
                          ></div>
                        </div>
                        <p className="mt-3 mb-1">
                          Russia <span className="float-end">55%</span>
                        </p>
                        <div className="progress mt-2" style={{ height: 6 }}>
                          <div
                            className="progress-bar progress-bar-striped bg-primary"
                            role="progressbar"
                            style={{ width: "55%" }}
                            aria-valuenow={55}
                            aria-valuemin={0}
                            aria-valuemax={55}
                          ></div>
                        </div>
                        <p className="mt-3 mb-1">
                          Australia <span className="float-end">85%</span>
                        </p>
                        <div className="progress mt-2" style={{ height: 6 }}>
                          <div
                            className="progress-bar progress-bar-striped bg-primary"
                            role="progressbar"
                            style={{ width: "85%" }}
                            aria-valuenow={85}
                            aria-valuemin={0}
                            aria-valuemax={85}
                          ></div>
                        </div>
                      </div>
                    </div> */}
                    {/* end card body */}
                  </div>
                  {/* end card */}
                </div>
                {/* end col */}
              </div>
              {/* end row*/}
              <div className="row">
                <div className="col-xl-3">
                  <div className="card">
                    {/* <div className="card-header align-items-center d-flex">
                      <h4 className="card-title mb-0 flex-grow-1">Customer List</h4>
                      <div className="flex-shrink-0">
                        <div className="dropdown">
                          <a
                            className=" dropdown-toggle"
                            href="#"
                            id="dropdownMenuButton2"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span className="text-muted">
                              All Members
                              <i className="mdi mdi-chevron-down ms-1" />
                            </span>
                          </a>
                          <div
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="dropdownMenuButton2"
                          >
                            <a className="dropdown-item" href="#">
                              Members
                            </a>
                            <a className="dropdown-item" href="#">
                              New Members
                            </a>
                            <a className="dropdown-item" href="#">
                              Old Members
                            </a>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* end card header */}
                    {/* <div className="card-body px-0">
                      <div
                        className="px-3"
                        data-simplebar=""
                        style={{ maxHeight: 386 }}
                      >
                        <div className="d-flex align-items-center pb-4">
                          <div className="avatar-md me-4">
                            <img
                              src="./assets/images/users/avatar-2.jpg"
                              className="img-fluid rounded-circle"
                              alt=""
                            />
                          </div>
                          <div className="flex-grow-1">
                            <h5 className="font-size-15 mb-1">
                              <a href="" className="text-dark">
                                Randy Matthews
                              </a>
                            </h5>
                            <span className="text-muted">Randy@gmail.com</span>
                          </div>
                          <div className="flex-shrink-0 text-end">
                            <div className="dropdown align-self-start">
                              <a
                                className="dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="bx bx-dots-vertical-rounded font-size-24 text-dark" />
                              </a>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">
                                  Copy
                                </a>
                                <a className="dropdown-item" href="#">
                                  Save
                                </a>
                                <a className="dropdown-item" href="#">
                                  Forward
                                </a>
                                <a className="dropdown-item" href="#">
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center pb-4">
                          <div className="avatar-md me-4">
                            <img
                              src="./assets/images/users/avatar-4.jpg"
                              className="img-fluid rounded-circle"
                              alt=""
                            />
                          </div>
                          <div className="flex-grow-1">
                            <h5 className="font-size-15 mb-1">
                              <a href="" className="text-dark">
                                Vernon Wood
                              </a>
                            </h5>
                            <span className="text-muted">Vernon@gmail.com</span>
                          </div>
                          <div className="flex-shrink-0 text-end">
                            <div className="dropdown align-self-start">
                              <a
                                className="dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="bx bx-dots-vertical-rounded font-size-24 text-dark" />
                              </a>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">
                                  Copy
                                </a>
                                <a className="dropdown-item" href="#">
                                  Save
                                </a>
                                <a className="dropdown-item" href="#">
                                  Forward
                                </a>
                                <a className="dropdown-item" href="#">
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center pb-4">
                          <div className="avatar-md me-4">
                            <img
                              src="./assets/images/users/avatar-5.jpg"
                              className="img-fluid rounded-circle"
                              alt=""
                            />
                          </div>
                          <div className="flex-grow-1">
                            <h5 className="font-size-15 mb-1">
                              <a href="" className="text-dark">
                                Howard Rhoades
                              </a>
                            </h5>
                            <span className="text-muted">Howard@gmail.com</span>
                          </div>
                          <div className="flex-shrink-0 text-end">
                            <div className="dropdown align-self-start">
                              <a
                                className="dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="bx bx-dots-vertical-rounded font-size-24 text-dark" />
                              </a>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">
                                  Copy
                                </a>
                                <a className="dropdown-item" href="#">
                                  Save
                                </a>
                                <a className="dropdown-item" href="#">
                                  Forward
                                </a>
                                <a className="dropdown-item" href="#">
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center pb-4">
                          <div className="avatar-md me-4">
                            <img
                              src="./assets/images/users/avatar-6.jpg"
                              className="img-fluid rounded-circle"
                              alt=""
                            />
                          </div>
                          <div className="flex-grow-1">
                            <h5 className="font-size-15 mb-1">
                              <a href="" className="text-dark">
                                Arthur Zurcher
                              </a>
                            </h5>
                            <span className="text-muted">Arthur@gmail.com</span>
                          </div>
                          <div className="flex-shrink-0 text-end">
                            <div className="dropdown align-self-start">
                              <a
                                className="dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="bx bx-dots-vertical-rounded font-size-24 text-dark" />
                              </a>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">
                                  Copy
                                </a>
                                <a className="dropdown-item" href="#">
                                  Save
                                </a>
                                <a className="dropdown-item" href="#">
                                  Forward
                                </a>
                                <a className="dropdown-item" href="#">
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center pb-4">
                          <div className="avatar-md me-4">
                            <img
                              src="./assets/images/users/avatar-8.jpg"
                              className="img-fluid rounded-circle"
                              alt=""
                            />
                          </div>
                          <div className="flex-grow-1">
                            <h5 className="font-size-15 mb-1">
                              <a href="" className="text-dark">
                                Angela Palmer
                              </a>
                            </h5>
                            <span className="text-muted">Angela@gmail.com</span>
                          </div>
                          <div className="flex-shrink-0 text-end">
                            <div className="dropdown align-self-start">
                              <a
                                className="dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="bx bx-dots-vertical-rounded font-size-24 text-dark" />
                              </a>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">
                                  Copy
                                </a>
                                <a className="dropdown-item" href="#">
                                  Save
                                </a>
                                <a className="dropdown-item" href="#">
                                  Forward
                                </a>
                                <a className="dropdown-item" href="#">
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center pb-3">
                          <div className="avatar-md me-4">
                            <img
                              src="./assets/images/users/avatar-9.jpg"
                              className="img-fluid rounded-circle"
                              alt=""
                            />
                          </div>
                          <div className="flex-grow-1">
                            <h5 className="font-size-15 mb-1">
                              <a href="" className="text-dark">
                                Dorothy Wimson
                              </a>
                            </h5>
                            <span className="text-muted">Dorothy@gmail.com</span>
                          </div>
                          <div className="flex-shrink-0 text-end">
                            <div className="dropdown align-self-start">
                              <a
                                className="dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="bx bx-dots-vertical-rounded font-size-24 text-dark" />
                              </a>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">
                                  Copy
                                </a>
                                <a className="dropdown-item" href="#">
                                  Save
                                </a>
                                <a className="dropdown-item" href="#">
                                  Forward
                                </a>
                                <a className="dropdown-item" href="#">
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* end card body */}
                  </div>
                  {/* end card */}
                </div>
                {/* end col */}
                <div className="col-xl-5">
                  <div className="card">
                    {/* <div className="card-header align-items-center d-flex">
                      <h4 className="card-title mb-0 flex-grow-1">
                        Selling Products
                      </h4>
                      <div className="flex-shrink-0">
                        <div className="dropdown align-self-start">
                          <a
                            className="dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="bx bx-dots-horizontal-rounded font-size-18 text-dark" />
                          </a>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              Copy
                            </a>
                            <a className="dropdown-item" href="#">
                              Save
                            </a>
                            <a className="dropdown-item" href="#">
                              Forward
                            </a>
                            <a className="dropdown-item" href="#">
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* end card header */}
                    {/* <div className="card-body px-0 pt-2">
                      <div
                        className="table-responsive px-3"
                        data-simplebar=""
                        style={{ maxHeight: 395 }}
                      >
                        <table className="table align-middle table-nowrap">
                          <tbody>
                            <tr>
                              <td style={{ width: 50 }}>
                                <div className="avatar-md me-4">
                                  <img
                                    src="./assets/images/product/img-1.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </div>
                              </td>
                              <td>
                                <div>
                                  <h5 className="font-size-15">
                                    <a href="" className="text-dark">
                                      Half sleeve T-shirt
                                    </a>
                                  </h5>
                                  <span className="text-muted">$240.00</span>
                                </div>
                              </td>
                              <td>
                                <p className="mb-1">
                                  <a href="" className="text-dark">
                                    Available
                                  </a>
                                </p>
                                <span className="text-muted">243K</span>
                              </td>
                              <td>
                                <div className="text-end">
                                  <ul className="mb-1 ps-0">
                                    <li className="bx bxs-star text-warning" />
                                    <li className="bx bxs-star text-warning" />
                                    <li className="bx bxs-star text-warning" />
                                    <li className="bx bxs-star text-warning" />
                                    <li className="bx bxs-star text-warning" />
                                  </ul>
                                  <span className="text-muted mt-1">145 Sales</span>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ width: 50 }}>
                                <div className="avatar-md me-4">
                                  <img
                                    src="./assets/images/product/img-2.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </div>
                              </td>
                              <td>
                                <div>
                                  <h5 className="font-size-15">
                                    <a href="" className="text-dark">
                                      Light blue T-shirt
                                    </a>
                                  </h5>
                                  <span className="text-muted">$650.00</span>
                                </div>
                              </td>
                              <td>
                                <p className="mb-1">
                                  <a href="" className="text-dark">
                                    Out Of Stock
                                  </a>
                                </p>
                                <span className="text-muted">1,253K</span>
                              </td>
                              <td>
                                <div className="text-end">
                                  <ul className="mb-1 ps-0">
                                    <li className="bx bxs-star text-warning" />
                                    <li className="bx bxs-star text-warning" />
                                    <li className="bx bxs-star text-warning" />
                                    <li className="bx bxs-star text-warning" />
                                    <li className="bx bx-star text-warning" />
                                  </ul>
                                  <span className="text-muted mt-1">260 Sales</span>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ width: 50 }}>
                                <div className="avatar-md me-4">
                                  <img
                                    src="./assets/images/product/img-3.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </div>
                              </td>
                              <td>
                                <div>
                                  <h5 className="font-size-15">
                                    <a href="" className="text-dark">
                                      Black Color T-shirt
                                    </a>
                                  </h5>
                                  <span className="text-muted">$325.00</span>
                                </div>
                              </td>
                              <td>
                                <p className="mb-1">
                                  <a href="" className="text-dark">
                                    Available
                                  </a>
                                </p>
                                <span className="text-muted">2,586K</span>
                              </td>
                              <td>
                                <div className="text-end">
                                  <ul className="mb-1 ps-0">
                                    <li className="bx bxs-star text-warning" />
                                    <li className="bx bxs-star text-warning" />
                                    <li className="bx bxs-star text-warning" />
                                    <li className="bx bxs-star text-warning" />
                                    <li className="bx bxs-star text-warning" />
                                  </ul>
                                  <span className="text-muted mt-1">220 Sales</span>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ width: 50 }}>
                                <div className="avatar-md me-4">
                                  <img
                                    src="./assets/images/product/img-4.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </div>
                              </td>
                              <td>
                                <div>
                                  <h5 className="font-size-15">
                                    <a href="" className="text-dark" />
                                    Hoodie (Blue)
                                  </h5>
                                  <span className="text-muted">$170.00</span>
                                </div>
                              </td>
                              <td>
                                <p className="mb-1">
                                  <a href="" className="text-dark">
                                    Available
                                  </a>
                                </p>
                                <span className="text-muted">4,565K</span>
                              </td>
                              <td>
                                <div className="text-end">
                                  <ul className="mb-1 ps-0">
                                    <li className="bx bxs-star text-warning" />
                                    <li className="bx bxs-star text-warning" />
                                    <li className="bx bxs-star text-warning" />
                                    <li className="bx bxs-star text-warning" />
                                    <li className="bx bxs-star text-warning" />
                                  </ul>
                                  <span className="text-muted mt-1">165 Sales</span>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ width: 50 }}>
                                <div className="avatar-md me-4">
                                  <img
                                    src="./assets/images/product/img-5.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </div>
                              </td>
                              <td>
                                <div>
                                  <h5 className="font-size-15">
                                    <a href="" className="text-dark" />
                                    Half sleeve T-Shirt
                                  </h5>
                                  <span className="text-muted">$150.00</span>
                                </div>
                              </td>
                              <td>
                                <p className="mb-1">
                                  <a href="" className="text-dark">
                                    Out Of Stock
                                  </a>
                                </p>
                                <span className="text-muted">5,265K</span>
                              </td>
                              <td>
                                <div className="text-end">
                                  <ul className="mb-1 ps-0">
                                    <li className="bx bxs-star text-warning" />
                                    <li className="bx bxs-star text-warning" />
                                    <li className="bx bxs-star text-warning" />
                                    <li className="bx bxs-star text-warning" />
                                    <li className="bx bx-star text-warning" />
                                  </ul>
                                  <span className="text-muted mt-1">165 Sales</span>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ width: 50 }}>
                                <div className="avatar-md me-4">
                                  <img
                                    src="./assets/images/product/img-6.png"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </div>
                              </td>
                              <td>
                                <div>
                                  <h5 className="font-size-15">
                                    <a href="" className="text-dark" />
                                    Green color T-shirt
                                  </h5>
                                  <span className="text-muted">$120.00</span>
                                </div>
                              </td>
                              <td>
                                <p className="mb-1">
                                  <a href="" className="text-dark">
                                    Available
                                  </a>
                                </p>
                                <span className="text-muted">125K</span>
                              </td>
                              <td>
                                <div className="text-end">
                                  <ul className="mb-1 ps-0">
                                    <li className="bx bxs-star text-warning" />
                                    <li className="bx bxs-star text-warning" />
                                    <li className="bx bxs-star text-warning" />
                                    <li className="bx bxs-star text-warning" />
                                    <li className="bx bx-star text-warning" />
                                  </ul>
                                  <span className="text-muted mt-1">165 Sales</span>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div> */}
                    {/* end card body */}
                  </div>
                  {/* end card */}
                </div>
                {/* end col */}
                <div className="col-xl-4">
                  <div className="card">
                    {/* <div className="card-header align-items-center d-flex">
                      <h4 className="card-title mb-0 flex-grow-1">Chat</h4>
                      <div className="flex-shrink-0">
                        <select className="form-select form-select-sm mb-0 my-n1">
                          <option value="Today" >
                            Today
                          </option>
                          <option value="Yesterday">Yesterday</option>
                          <option value="Week">Last Week</option>
                          <option value="Month">Last Month</option>
                        </select>
                      </div>
                    </div> */}
                    {/* end card header */}
                    {/* <div className="card-body px-0">
                      <div
                        className="px-3 chat-conversation"
                        data-simplebar=""
                        style={{ maxHeight: 350 }}
                      >
                        <ul className="list-unstyled mb-0">
                          <li className="chat-day-title">
                            <span className="title">Today</span>
                          </li>
                          <li>
                            <div className="conversation-list">
                              <div className="d-flex">
                                <img
                                  src="assets/images/users/avatar-3.jpg"
                                  className="rounded-circle avatar-sm"
                                  alt=""
                                />
                                <div className="flex-1">
                                  <div className="ctext-wrap">
                                    <div className="ctext-wrap-content">
                                      <div className="conversation-name">
                                        <span className="time">10:00 AM</span>
                                      </div>
                                      <p className="mb-0">Good Morning</p>
                                    </div>
                                    <div className="dropdown align-self-start">
                                      <a
                                        className="dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      >
                                        <i className="bx bx-dots-vertical-rounded" />
                                      </a>
                                      <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">
                                          Copy
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Save
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Forward
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="right">
                            <div className="conversation-list">
                              <div className="d-flex">
                                <div className="flex-1">
                                  <div className="ctext-wrap">
                                    <div className="ctext-wrap-content">
                                      <div className="conversation-name">
                                        <span className="time">10:02 AM</span>
                                      </div>
                                      <p className="mb-0">Good morning</p>
                                    </div>
                                    <div className="dropdown align-self-start">
                                      <a
                                        className="dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      >
                                        <i className="bx bx-dots-vertical-rounded" />
                                      </a>
                                      <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">
                                          Copy
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Save
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Forward
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <img
                                  src="assets/images/users/avatar-6.jpg"
                                  className="rounded-circle avatar-sm"
                                  alt=""
                                />
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="conversation-list">
                              <div className="d-flex">
                                <img
                                  src="assets/images/users/avatar-3.jpg"
                                  className="rounded-circle avatar-sm"
                                  alt=""
                                />
                                <div className="flex-1">
                                  <div className="ctext-wrap">
                                    <div className="ctext-wrap-content">
                                      <div className="conversation-name">
                                        <span className="time">10:04 AM</span>
                                      </div>
                                      <p className="mb-0">Hi there, How are you?</p>
                                    </div>
                                    <div className="dropdown align-self-start">
                                      <a
                                        className="dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      >
                                        <i className="bx bx-dots-vertical-rounded" />
                                      </a>
                                      <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">
                                          Copy
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Save
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Forward
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex">
                                <img
                                  src="assets/images/users/avatar-3.jpg"
                                  className="rounded-circle avatar-sm"
                                  alt=""
                                />
                                <div className="flex-1">
                                  <div className="ctext-wrap">
                                    <div className="ctext-wrap-content">
                                      <div className="conversation-name">
                                        <span className="time">10:04 AM</span>
                                      </div>
                                      <p className="mb-0">
                                        Waiting for your reply.As I heve to go back
                                        soon. i have to travel long distance.
                                      </p>
                                    </div>
                                    <div className="dropdown align-self-start">
                                      <a
                                        className="dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      >
                                        <i className="bx bx-dots-vertical-rounded" />
                                      </a>
                                      <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">
                                          Copy
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Save
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Forward
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="right">
                            <div className="conversation-list">
                              <div className="d-flex">
                                <div className="flex-1">
                                  <div className="ctext-wrap">
                                    <div className="ctext-wrap-content">
                                      <div className="conversation-name">
                                        <span className="time">10:08 AM</span>
                                      </div>
                                      <p className="mb-0">
                                        Hi, I am coming there in few minutes. Please
                                        wait!! I am in taxi right now.
                                      </p>
                                    </div>
                                    <div className="dropdown align-self-start">
                                      <a
                                        className="dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      >
                                        <i className="bx bx-dots-vertical-rounded" />
                                      </a>
                                      <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">
                                          Copy
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Save
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Forward
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <img
                                  src="assets/images/users/avatar-6.jpg"
                                  className="rounded-circle avatar-sm"
                                  alt=""
                                />
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="conversation-list">
                              <div className="d-flex">
                                <img
                                  src="assets/images/users/avatar-3.jpg"
                                  className="rounded-circle avatar-sm"
                                  alt=""
                                />
                                <div className="flex-1">
                                  <div className="ctext-wrap">
                                    <div className="ctext-wrap-content">
                                      <div className="conversation-name">
                                        <span className="time">10:06 AM</span>
                                      </div>
                                      <p className="mb-0">
                                        Thank You very much, I am waiting here at
                                        StarBuck cafe.
                                      </p>
                                    </div>
                                    <div className="dropdown align-self-start">
                                      <a
                                        className="dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      >
                                        <i className="bx bx-dots-vertical-rounded" />
                                      </a>
                                      <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">
                                          Copy
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Save
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Forward
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="conversation-list">
                              <div className="d-flex">
                                <img
                                  src="assets/images/users/avatar-3.jpg"
                                  className="rounded-circle avatar-sm"
                                  alt=""
                                />
                                <div className="flex-1">
                                  <div className="ctext-wrap">
                                    <div className="ctext-wrap-content">
                                      <div className="conversation-name">
                                        <span className="time">10:09 AM</span>
                                      </div>
                                      <p className="mb-0">
                                        img-1.jpg &amp; img-2.jpg images for a New
                                        Projects
                                      </p>
                                      <ul className="list-inline message-img mt-3  mb-0">
                                        <li className="list-inline-item message-img-list">
                                          <a className="d-inline-block m-1" href="">
                                            <img
                                              src="assets/images/small/img-1.jpg"
                                              alt=""
                                              className="rounded img-thumbnail"
                                            />
                                          </a>
                                        </li>
                                        <li className="list-inline-item message-img-list">
                                          <a className="d-inline-block m-1" href="">
                                            <img
                                              src="assets/images/small/img-2.jpg"
                                              alt=""
                                              className="rounded img-thumbnail"
                                            />
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="dropdown align-self-start">
                                      <a
                                        className="dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      >
                                        <i className="bx bx-dots-vertical-rounded" />
                                      </a>
                                      <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">
                                          Copy
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Save
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Forward
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="px-3">
                        <div className="row">
                          <div className="col">
                            <div className="position-relative">
                              <input
                                type="text"
                                className="form-control border bg-light-subtle"
                                placeholder="Enter Message..."
                              />
                            </div>
                          </div>
                          <div className="col-auto">
                            <button
                              type="submit"
                              className="btn btn-primary chat-send w-md waves-effect waves-light"
                            >
                              <span className="d-none d-sm-inline-block me-2">
                                Send
                              </span>{" "}
                              <i className="mdi mdi-send float-end" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  {/* end card */}
                </div>
                {/* end col */}
              </div>
              {/* end row */}
            </div>
            {/* container-fluid */}
          </div>
          {/* End Page-content */}
          
        </div>
        {/* end main content*/}
      </div>
      {/* END layout-wrapper */}

      {/* /Right-bar */}
      {/* Right bar overlay*/}
      <div className="rightbar-overlay" />
      {/* JAVASCRIPT */}
      {/* pace js */}
      {/* apexcharts */}
      {/* Plugins js*/}
      {/* dashboard init */}
    </>
  );
}
