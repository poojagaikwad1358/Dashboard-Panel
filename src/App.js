import './App.scss';
import React from 'react'
import { Grid, PersonSquare, Nut, CashCoin, PatchCheck, QuestionDiamond, ChevronRight, ChevronDown, EmojiSmile, Search } from 'react-bootstrap-icons';
import { useRef, useState } from 'react';
import './App.scss';
import Hi_Img from './Assets/Hi.png'
import Card from './Components/Card/Card';
import { ProductSellTable } from './Components/ProductSellTable/ProductSellTable';
import OverviewAndDonut from './Components/Overview/OverviewAndDonut';
function App() {
  const contentRef = useRef(null);
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  const contentStyle = {
    display: showContent ? 'block' : 'none',
    marginTop: '-210px',
    marginLeft: '38px',
  };

  return (
    <>
      <div className='App'>
        <div className="row flex-nowrap sidebar-wrapper" style={{ height: '100%' }}>
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark " style={{ position: 'sticky', top: '0', zIndex: 100, height: '100vh' }}>
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-5 d-none d-sm-inline "><Nut className='mb-1' /> Dashboard</span>
              </a>
              <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li className="nav-item">
                  <a href="#" className="nav-link align-middle px-0">
                    <Nut className='mb-1' />   <span className="ms-1 d-none d-sm-inline">Dashboard  </span>
                  </a>
                </li>

                <li>
                  <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                    <Grid className='mb-1' /> <span className="ms-1 d-none d-sm-inline">Product</span> <ChevronRight className='d-none d-lg-inline icon-wrapper' size={12} />
                  </a>
                  <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                    <li className="w-100">
                      <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 1</a>
                    </li>
                    <li>
                      <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 2</a>
                    </li>
                    <li>
                      <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 3</a>
                    </li>
                    <li>
                      <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 4</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="nav-link px-0 align-middle">
                    <PersonSquare className='mb-1' /> <span className="ms-1 d-none d-sm-inline">Customers</span> <ChevronRight className='d-none d-lg-inline icon-wrapper' size={12} /> </a>
                </li>

                <li>
                  <a href="#" className="nav-link px-0 align-middle">
                    <CashCoin /> <span className="ms-1 d-none d-sm-inline">Income</span> <ChevronRight className='d-none d-lg-inline icon-wrapper' size={12} /> </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-0 align-middle">
                    <PatchCheck className='mb-1' /> <span className="ms-1 d-none d-sm-inline">Promote</span> <ChevronRight className='d-none d-lg-inline icon-wrapper' size={12} /> </a>
                </li>

                <li>
                  <a href="#" className="nav-link px-0 align-middle">
                    <QuestionDiamond /> <span className="ms-1 d-none d-sm-inline">Help</span> <ChevronRight className='d-none d-lg-inline icon-wrapper' size={12} /> </a>
                </li>
              </ul>
              <hr />

              <div className=" dropdown pb-4 mx-2 profile-wrapper" >
                <div className=''>
                  <a onClick={toggleContent} href="#" className=" d-flex align-items-center text-white text-decoration-none" aria-expanded="false">
                    <img src="https://github.com/jenny.png" alt="hugenerd" width="35" height="35" className="rounded-circle" />
                    <div className='d-grid'>
                      <div className="d-none d-sm-inline mx-2 p-0">Evano</div>
                      <div className="d-none d-sm-inline mx-2 text-secondary"><small className='mt-0 p-0'>Project Manager</small></div>
                    </div>
                    <ChevronDown className='icon-wrapper' size={12} />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark text-small shadow " ref={contentRef} style={contentStyle}>
                    <li><a className="dropdown-item" href="#">New project</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col py-4 px-5">
            <div className="row d-flex me-2">
              <h5 className="  col-md-8 mb-2">Hello Evano <span><img src={Hi_Img} height={18} width={18} /></span>,</h5>
              <form className="d-flex col-md-4">
                <div className="input-group bg-light border-0">
                  <span className="input-group-text"><Search color='grey' /></span>
                  <input className="form-control border-start-0" type="search" placeholder="Search" aria-label="Search" />
                </div>
              </form>
            </div>
            <div className='row flex-nowrap'>
              <Card />
            </div>
            <OverviewAndDonut />
            <div className='mt-5'>
              <ProductSellTable />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
