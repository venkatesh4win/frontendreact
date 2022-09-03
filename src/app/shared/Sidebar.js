import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import { Trans } from "react-i18next";

class Sidebar extends Component {
  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({ [menuState]: false });
    } else if (Object.keys(this.state).length === 0) {
      this.setState({ [menuState]: true });
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({ [i]: false });
      });
      this.setState({ [menuState]: true });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector("#sidebar").classList.remove("active");
    Object.keys(this.state).forEach(i => {
      this.setState({ [i]: false });
    });

    const dropdownPaths = [
      { path: "/apps", state: "appsMenuOpen" },
      { path: "/books", state: "basicUiMenuOpen" },
      { path: "/advanced-ui", state: "advancedUiMenuOpen" },
      { path: "/form-elements", state: "formElementsMenuOpen" },
      { path: "/tables", state: "tablesMenuOpen" },
      { path: "/maps", state: "mapsMenuOpen" },
      { path: "/icons", state: "iconsMenuOpen" },
      { path: "/charts", state: "chartsMenuOpen" },
      { path: "/user-pages", state: "userPagesMenuOpen" },
      { path: "/error-pages", state: "errorPagesMenuOpen" },
      { path: "/general-pages", state: "generalPagesMenuOpen" },
      { path: "/ecommerce", state: "ecommercePagesMenuOpen" }
    ];

    dropdownPaths.forEach(obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({ [obj.state]: true });
      }
    });
  }

  render() {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          {/* <li className="nav-item navbar-brand-mini-wrapper">
            <Link
              className="nav-link navbar-brand brand-logo-mini"
              to="/dashboard"
            >
              <img
                src={require("../../assets/images/logo-mini.svg")}
                alt="logo"
              />
            </Link>
          </li> */}
          {/* <li className="nav-item nav-profile">
            <a
              href="!#"
              className="nav-link"
              onClick={evt => evt.preventDefault()}
            >
              <div className="profile-image">
                <img
                  className="img-xs rounded-circle"
                  src={require("../../assets/images/faces/face8.jpg")}
                  alt="profile"
                />
                <div className="dot-indicator bg-success"></div>
              </div>
              <div className="text-wrapper">
                <p className="profile-name">Henry Klein</p>
                <p className="designation">
                  <Trans>Administrator</Trans>
                </p>
              </div>
              <div className="icon-container">
                <i className="icon-bubbles"></i>
                <div className="dot-indicator bg-danger"></div>
              </div>
            </a>
          </li> */}
          {/* <li className="nav-item nav-category">
            <span className="nav-link">
              <Trans>Dashboard</Trans>
            </span>
          </li> */}
          <li
            className={
              this.isPathActive("/dashboard") ? "nav-item active" : "nav-item"
            }
          >
            <Link className="nav-link" to="/dashboard">
              <span className="menu-title">
                <Trans>Dashboard</Trans>
              </span>
              <i className="icon-screen-desktop menu-icon"></i>
            </Link>
          </li>
          {/* <li className="nav-item nav-category">
            <span className="nav-link">
              <Trans>UI Elements</Trans>
            </span>
          </li> */}
          <li
            className={
              this.isPathActive("/tables/data-table") ? "nav-item active" : "nav-item"
            }
          >
            <Link className="nav-link" to="/tables/data-table">
              <span className="menu-title">
                <Trans>Users</Trans>
              </span>
              <i className="icon-people menu-icon"></i>
            </Link>
          </li>
         
          {/* <li
            className={
              this.isPathActive("/rtl") ? "nav-item active" : "nav-item"
            }
          >
            <Link className="nav-link" to="/rtl">
              <span className="menu-title">RTL</span>
              <i className="icon-reload menu-icon"></i>
            </Link>
          </li> */}
          {/* <li className="nav-item nav-category">
            <span className="nav-link">
              <Trans>Applications</Trans>
            </span>
          </li> */}
          <li
            className={
              this.isPathActive("/apps") 
                ? "nav-item active"
                : "nav-item"
            }
          >
            <div
              className={
                this.state.appsMenuOpen ? "nav-link menu-expanded" : "nav-link"
              }
              onClick={() => this.toggleMenuState("appsMenuOpen")}
              data-toggle="collapse"
              aria-expanded={this.state.appsMenuOpen}
            >
              <span className="menu-title">
                <Trans>Stats</Trans>
              </span>
              <i className="icon-cup menu-icon"></i>
            </div>
            <Collapse in={this.state.appsMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive(" ")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to=" "
                    >
                      Listening
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive(" ")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to=" "
                    >
                      <Trans>Book Reports</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive(" ")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to=" "
                    >
                      <Trans>Publisher Reports</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive(" ")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to=" "
                    >
                      <Trans>Podcast</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive(" ")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to=" "
                    >
                      <Trans>Meditation</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive(" ")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to=" "
                    >
                      <Trans>Affirmation</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive(" ")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to=" "
                    >
                      <Trans>Songs</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive(" ")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to=" "
                    >
                      <Trans>CA & News</Trans>
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          {/* <li
            className={
              this.isPathActive("/form-elements/basic-elements") ? "nav-item active" : "nav-item"
            }
          >
            <Link className="nav-link" to="/form-elements/basic-elements">
              <span className="menu-title">
                <Trans>Add Content</Trans>
              </span>
              <i className="icon-plus menu-icon"></i>
            </Link>
          </li> */}
          <li
            className={
              this.isPathActive("/books")  ? "nav-item active"
                : "nav-item"
            }
          >
            <div
              className={
                this.state.appsMenuOpen ? "nav-link menu-expanded" : "nav-link"
              }
              onClick={() => this.toggleMenuState("basicUiMenuOpen")}
              data-toggle="collapse"
              aria-expanded={this.state.basicUiMenuOpen}
            >
              <span className="menu-title">
                <Trans>Add Content</Trans>
              </span>
              <i className="icon-plus menu-icon"></i>
            </div>
            <Collapse in={this.state.basicUiMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/books")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/books"
                    >
                    AudioBooks
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive( " ")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to=" "
                    >
                      <Trans>Podcast</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive(" ")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to=" "
                    >
                      <Trans>Songs</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive(" ")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to=" "
                    >
                      <Trans>Podcast</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive(" ")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to=" "
                    >
                      <Trans>Meditation</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive(" ")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to=" "
                    >
                      <Trans>Affirmation</Trans>
                    </Link>
                  </li>
                
                </ul>
              </div>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/apps") 
                ? "nav-item active"
                : "nav-item"
            }
          >
            <div
              className={
                this.state.appsMenuOpen ? "nav-link menu-expanded" : "nav-link"
              }
              onClick={() => this.toggleMenuState("advancedUiMenuOpen")}
              data-toggle="collapse"
              aria-expanded={this.state.advancedUiMenuOpen}
            >
              <span className="menu-title">
                <Trans>Promotion List</Trans>
              </span>
              <i className="icon-cup menu-icon"></i>
            </div>
            <Collapse in={this.state.advancedUiMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive(" ")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to=" "
                    >
                   Featured Books
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive(" ")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to=" "
                    >
                      <Trans>Trending Books</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive(" ")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to=" "
                    >
                      <Trans>New Arrivals</Trans>
                    </Link>
                  </li>
                 
                
                
                </ul>
              </div>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/apps") 
                ? "nav-item active"
                : "nav-item"
            }
          >
            <div
              className={
                this.state.appsMenuOpen ? "nav-link menu-expanded" : "nav-link"
              }
              onClick={() => this.toggleMenuState("formElementsMenuOpen")}
              data-toggle="collapse"
              aria-expanded={this.state.formElementsMenuOpen}
            >
              <span className="menu-title">
                <Trans>Plans</Trans>
              </span>
              <i className="icon-layers menu-icon"></i>
            </div>
            <Collapse in={this.state.formElementsMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive(" ")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to=" "
                    >
                  Edit plans monthly/
hourly
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive(" ")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to=" "
                    >
                      <Trans>Rewards</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive(" ")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to=" "
                    >
                      <Trans>Refferals</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive(" ")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to=" "
                    >
                      <Trans>Coupon Code</Trans>
                    </Link>
                  </li>
                 
                
                
                </ul>
              </div>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/revenue") ? "nav-item active" : "nav-item"
            }
          >
            <Link className="nav-link" to=" ">
              <span className="menu-title">
                <Trans>Revenue</Trans>
              </span>
              <i className="icon-people menu-icon"></i>
            </Link>
          </li>
          <li
            className={
              this.isPathActive("/apps")
                ? "nav-item active"
                : "nav-item"
            }
          >
            <div
              className={
                this.state.publishers ? "nav-link menu-expanded" : "nav-link"
              }
              onClick={() => this.toggleMenuState("publishers")}
              data-toggle="collapse"
              aria-expanded={this.state.publishers}
            >
              <span className="menu-title">
                <Trans>Publishers & Add Hashtags</Trans>
              </span>
              <i className="icon-star menu-icon"></i>
            </div>
            <Collapse in={this.state.publishers}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive(" ")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to=" "
                    >
                  Add Publishers
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/apps/todo-list")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to=" "
                    >
                      <Trans>Add Hashtags</Trans>
                    </Link>
                  </li>
                  
              
                 
                
                
                </ul>
              </div>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/badges") 
                ? "nav-item active"
                : "nav-item"
            }
          >
            <div
              className={
                this.state.badges ? "nav-link menu-expanded" : "nav-link"
              }
              onClick={() => this.toggleMenuState("badges")}
              data-toggle="collapse"
              aria-expanded={this.state.badges}
            >
              <span className="menu-title">
                <Trans>Badges & Levels</Trans>
              </span>
              <i className="icon-graduation menu-icon"></i>
            </div>
            <Collapse in={this.state.badges}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/apps/kanban-board1")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to=" "
                    >
                 Add Badges & Category
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/apps/todo-list")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to=" "
                    >
                      <Trans>Define Levels</Trans>
                    </Link>
                  </li>
                  
              
                 
                
                
                </ul>
              </div>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/setting") 
                ? "nav-item active"
                : "nav-item"
            }
          >
            <div
              className={
                this.state.setting ? "nav-link menu-expanded" : "nav-link"
              }
              onClick={() => this.toggleMenuState("setting")}
              data-toggle="collapse"
              aria-expanded={this.state.setting}
            >
              <span className="menu-title">
                <Trans>Settings</Trans>
              </span>
              <i className="icon-settings menu-icon"></i>
            </div>
            <Collapse in={this.state.setting}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/apps/kanban-board")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to=" "
                    >
                 User Management
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/apps/todo-list")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to=" "
                    >
                      <Trans>Customer Service</Trans>
                    </Link>
                  </li>
                  
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/apps/todo-list")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to=" "
                    >
                      <Trans>FAQ</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/apps/todo-list")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to=" "
                    >
                      <Trans>User Feedback</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/apps/todo-list")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to=" "
                    >
                      <Trans>Book Review</Trans>
                    </Link>
                  </li>
                 
                
                
                </ul>
              </div>
            </Collapse>
          </li>
          {/* <li className="nav-item nav-category">
            <span className="nav-link">
              <Trans>UI Elements</Trans>
            </span>
          </li>
           <li
            className={
              this.isPathActive("/basic-ui") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.basicUiMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("basicUiMenuOpen")}
              data-toggle="collapse"
            >
              <span className="menu-title">
                <Trans>Basic UI Elements</Trans>
              </span>
              <i className="icon-layers menu-icon"></i>
            </div>
            <Collapse in={this.state.basicUiMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/basic-ui/accordions")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/basic-ui/accordions"
                    >
                      <Trans>Accordions</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/basic-ui/buttons")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/basic-ui/buttons"
                    >
                      <Trans>Buttons</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/basic-ui/badges")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/basic-ui/badges"
                    >
                      <Trans>Badges</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/basic-ui/breadcrumbs")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/basic-ui/breadcrumbs"
                    >
                      <Trans>Breadcrumbs</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/basic-ui/dropdowns")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/basic-ui/dropdowns"
                    >
                      <Trans>Dropdowns</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/basic-ui/modals")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/basic-ui/modals"
                    >
                      <Trans>Modals</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/basic-ui/progressbar")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/basic-ui/progressbar"
                    >
                      <Trans>Progress bar</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/basic-ui/pagination")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/basic-ui/pagination"
                    >
                      <Trans>Pagination</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/basic-ui/tabs")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/basic-ui/tabs"
                    >
                      <Trans>Tabs</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/basic-ui/typography")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/basic-ui/typography"
                    >
                      <Trans>Typography</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/basic-ui/tooltips")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/basic-ui/tooltips"
                    >
                      <Trans>Tooltips</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/basic-ui/popups")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/basic-ui/popups"
                    >
                      <Trans>Popups</Trans>
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/advanced-ui") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.advancedUiMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("advancedUiMenuOpen")}
              data-toggle="collapse"
            >
              <span className="menu-title">
                <Trans>Advanced UI</Trans>
              </span>
              <i className="icon-star menu-icon"></i>
            </div>
            <Collapse in={this.state.advancedUiMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/advanced-ui/dragula")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/advanced-ui/dragula"
                    >
                      Dragula
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/advanced-ui/clipboard")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/advanced-ui/clipboard"
                    >
                      <Trans>Clipboard</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/advanced-ui/context-menu")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/advanced-ui/context-menu"
                    >
                      <Trans>Context menu</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/advanced-ui/sliders")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/advanced-ui/sliders"
                    >
                      <Trans>Sliders</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/advanced-ui/carousel")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/advanced-ui/carousel"
                    >
                      <Trans>Carousel</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/advanced-ui/loaders")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/advanced-ui/loaders"
                    >
                      <Trans>Loaders</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/advanced-ui/tree-view")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/advanced-ui/tree-view"
                    >
                      Tree View
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/form-elements")
                ? "nav-item active"
                : "nav-item"
            }
          >
            <div
              className={
                this.state.formElementsMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("formElementsMenuOpen")}
              data-toggle="collapse"
            >
              <span className="menu-title">
                <Trans>Form Elements</Trans>
              </span>
              <i className="icon-book-open menu-icon"></i>
            </div>
            <Collapse in={this.state.formElementsMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/form-elements/basic-elements")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/form-elements/basic-elements"
                    >
                      <Trans>Basic Elements</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/form-elements/advanced-elements")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/form-elements/advanced-elements"
                    >
                      <Trans>Advanced Elements</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/form-elements/validation")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/form-elements/validation"
                    >
                      <Trans>Validation</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/form-elements/wizard")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/form-elements/wizard"
                    >
                      <Trans>Wizard</Trans>
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/tables") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.tablesMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("tablesMenuOpen")}
              data-toggle="collapse"
            >
              <span className="menu-title">
                <Trans>Tables</Trans>
              </span>
              <i className="icon-grid menu-icon"></i>
            </div>
            <Collapse in={this.state.tablesMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/tables/basic-table")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/tables/basic-table"
                    >
                      <Trans>Basic Table</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/tables/data-table")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/tables/data-table"
                    >
                      <Trans>Data Table</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/tables/react-table")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/tables/react-table"
                    >
                      React Table
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/tables/sortable-table")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/tables/sortable-table"
                    >
                      <Trans>Sortable Table</Trans>
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/maps") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.mapsMenuOpen ? "nav-link menu-expanded" : "nav-link"
              }
              onClick={() => this.toggleMenuState("mapsMenuOpen")}
              data-toggle="collapse"
            >
              <span className="menu-title">
                <Trans>Maps</Trans>
              </span>
              <i className="icon-location-pin menu-icon"></i>
            </div>
            <Collapse in={this.state.mapsMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/maps/vector-map")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/maps/vector-map"
                    >
                      Vector Maps
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/maps/simple-map")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/maps/simple-map"
                    >
                      Simple Maps
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/notifications")
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link className="nav-link" to="/notifications">
              <span className="menu-title">
                <Trans>Notifications</Trans>
              </span>
              <i className="icon-bell menu-icon"></i>
            </Link>
          </li>
          <li
            className={
              this.isPathActive("/icons") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.iconsMenuOpen ? "nav-link menu-expanded" : "nav-link"
              }
              onClick={() => this.toggleMenuState("iconsMenuOpen")}
              data-toggle="collapse"
            >
              <span className="menu-title">
                <Trans>Icons</Trans>
              </span>
              <i className="icon-globe menu-icon"></i>
            </div>
            <Collapse in={this.state.iconsMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/icons/mdi")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/icons/mdi"
                    >
                      Material
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/icons/flag-icons")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/icons/flag-icons"
                    >
                      Flag icons
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/icons/font-awesome")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/icons/font-awesome"
                    >
                      Font Awesome
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/icons/simple-line")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/icons/simple-line"
                    >
                      Simple Line Icons
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/icons/themify")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/icons/themify"
                    >
                      Themify
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/icons/typicons")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/icons/typicons"
                    >
                      Typicons
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/text-editors")
                ? "nav-item active"
                : "nav-item"
            }
          >
            <Link className="nav-link" to="/text-editors">
              <span className="menu-title">
                <Trans>Text Editor</Trans>
              </span>
              <i className="icon-anchor menu-icon"></i>
            </Link>
          </li>
          <li
            className={
              this.isPathActive("/code-editor") ? "nav-item active" : "nav-item"
            }
          >
            <Link className="nav-link" to="/code-editor">
              <span className="menu-title">
                <Trans>Code Editor</Trans>
              </span>
              <i className="icon-mouse menu-icon"></i>
            </Link>
          </li>
          <li
            className={
              this.isPathActive("/charts") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.chartsMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("chartsMenuOpen")}
              data-toggle="collapse"
            >
              <span className="menu-title">
                <Trans>Charts</Trans>
              </span>
              <i className="icon-chart menu-icon"></i>
            </div>
            <Collapse in={this.state.chartsMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/charts/chart-js")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/charts/chart-js"
                    >
                      Chart Js
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/charts/c3-chart")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/charts/c3-chart"
                    >
                      C3 Charts
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/charts/chartist")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/charts/chartist"
                    >
                      Chartist
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/charts/google-charts")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/charts/google-charts"
                    >
                      Google Charts
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/charts/sparkline-charts")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/charts/sparkline-charts"
                    >
                      Sparkline Charts
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/charts/guage-chart")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/charts/guage-chart"
                    >
                      Guage Chart
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li className="nav-item nav-category">
            <span className="nav-link">
              <Trans>Extra Pages</Trans>
            </span>
          </li>
          <li
            className={
              this.isPathActive("/user-pages") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.userPagesMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("userPagesMenuOpen")}
              data-toggle="collapse"
            >
              <span className="menu-title">
                <Trans>User Pages</Trans>
              </span>
              <i className="icon-disc menu-icon"></i>
            </div>
            <Collapse in={this.state.userPagesMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/user-pages/login-1")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/user-pages/login-1"
                    >
                      <Trans>Login</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/user-pages/login-2")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/user-pages/login-2"
                    >
                      <Trans>Login 2</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/user-pages/register-1")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/user-pages/register-1"
                    >
                      <Trans>Register</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/user-pages/register-2")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/user-pages/register-2"
                    >
                      <Trans>Register 2</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/user-pages/lockscreen")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/user-pages/lockscreen"
                    >
                      <Trans>Lockscreen</Trans>
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/error-pages") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.errorPagesMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("errorPagesMenuOpen")}
              data-toggle="collapse"
            >
              <span className="menu-title">
                <Trans>Error Pages</Trans>
              </span>
              <i className="icon-flag menu-icon"></i>
            </div>
            <Collapse in={this.state.errorPagesMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/error-pages/error-404")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/error-pages/error-404"
                    >
                      404
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/error-pages/error-500")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/error-pages/error-500"
                    >
                      500
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/general-pages")
                ? "nav-item active"
                : "nav-item"
            }
          >
            <div
              className={
                this.state.generalPagesMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("generalPagesMenuOpen")}
              data-toggle="collapse"
            >
              <span className="menu-title">
                <Trans>General Pages</Trans>
              </span>
              <i className="icon-doc menu-icon"></i>
            </div>
            <Collapse in={this.state.generalPagesMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/general-pages/blank-page")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/general-pages/blank-page"
                    >
                      <Trans>Blank Page</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/general-pages/profile")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/general-pages/profile"
                    >
                      <Trans>Profile</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/general-pages/faq-1")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/general-pages/faq-1"
                    >
                      <Trans>FAQ</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/general-pages/faq-2")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/general-pages/faq-2"
                    >
                      <Trans>FAQ 2</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/general-pages/news-grid")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/general-pages/news-grid"
                    >
                      <Trans>News Grid</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/general-pages/timeline")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/general-pages/timeline"
                    >
                      <Trans>Timeline</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/general-pages/search-results")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/general-pages/search-results"
                    >
                      <Trans>Search Results</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/general-pages/portfolio")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/general-pages/portfolio"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/general-pages/user-listing")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/general-pages/user-listing"
                    >
                      <Trans>User Listing</Trans>
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/ecommerce") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.ecommercePagesMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("ecommercePagesMenuOpen")}
              data-toggle="collapse"
            >
              <span className="menu-title">
                <Trans>E-commerce</Trans>
              </span>
              <i className="menu-arrow"></i>
              <i className="icon-briefcase menu-icon"></i>
            </div>
            <Collapse in={this.state.ecommercePagesMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/ecommerce/invoice")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/ecommerce/invoice"
                    >
                      <Trans>Invoice</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/ecommerce/pricing")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/ecommerce/pricing"
                    >
                      <Trans>Pricing</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/ecommerce/product-catalogue")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/ecommerce/product-catalogue"
                    >
                      <Trans>Product Catalogue</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/ecommerce/project-list")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/ecommerce/project-list"
                    >
                      <Trans>Project List</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/ecommerce/orders")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/ecommerce/orders"
                    >
                      <Trans>Orders</Trans>
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li className="nav-item nav-category">
            <span className="nav-link">
              <Trans>Help</Trans>
            </span>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="http://bootstrapdash.com/demo/stellar-admin/react/documentation/documentation.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="menu-title">
                <Trans>Documentation</Trans>
              </span>
              <i className="icon-folder-alt menu-icon"></i>
            </a>
          </li>  */}
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector("body");
    document.querySelectorAll(".sidebar .nav-item").forEach(el => {
      el.addEventListener("mouseover", function() {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.add("hover-open");
          // if (el.querySelector('.ReactCollapse--collapse')) {
          //   el.querySelector('.ReactCollapse--collapse').setAttribute('style', 'height: auto; overflow: initial;');
          // }
        }
      });
      el.addEventListener("mouseout", function() {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.remove("hover-open");
          // if (el.querySelector('.ReactCollapse--collapse')) {
          //   el.querySelector('.ReactCollapse--collapse').setAttribute('style', 'height: 0; overflow: hidden;');
          // }
        }
      });
    });
  }
}

export default withRouter(Sidebar);
