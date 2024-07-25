import React from "react";
import { Link } from "react-router-dom";
import FloatingChatButton from "./FloatingChatButton";
import Logo from '../../features/assets/images/Footer.png';
import { ThemeModeSwitcher } from '../../features/partials/layout/theme-mode/ThemeModeSwitcher';
import { Languages } from '../../features/partials/layout/header-menus/Languages';
import clsx from "clsx";
import { useThemeMode } from '../../features/partials/layout/theme-mode/ThemeModeProvider';
import './HeaderLanding.scss';

const HeaderLanding = () => {
  const { mode } = useThemeMode();
  
  return (
    <header className={clsx("fixed-top header-background shadow-sm", {
      "bg-dark text-white": mode === "dark",
      "bg-white text-dark": mode === "light"
    })}>
      <div className="container py-3 py-lg-4">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center flex-equal">
            <button
              className="btn btn-icon btn-active-color-primary me-3 d-flex d-lg-none"
              id="kt_landing_menu_toggle"
            >
              <i className="ki-duotone ki-abstract-14 fs-2hx text-dark">
                <span className="path1"></span>
                <span className="path2"></span>
              </i>
            </button>
            <a href="#inicio" className="text-dark text-decoration-none fs-3 fw-bold">
              <img src={Logo} alt="Logo" className="w-50"/>
            </a>
          </div>

          <div className="d-lg-block menu-wrapper" id="kt_header_nav_wrapper">
            <div
              className="d-lg-block p-5 p-lg-0"
              data-kt-drawer="true"
              data-kt-drawer-name="landing-menu"
              data-kt-drawer-activate="{default: true, lg: false}"
              data-kt-drawer-overlay="true"
              data-kt-drawer-width="200px"
              data-kt-drawer-direction="start"
              data-kt-drawer-toggle="#kt_landing_menu_toggle"
              data-kt-swapper="true"
              data-kt-swapper-mode="prepend"
              data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav_wrapper'}"
            >
              <div
                className="menu menu-column flex-nowrap menu-rounded menu-lg-row menu-title-gray-600 menu-state-title-primary nav nav-flush fs-5 fw-semibold"
                id="kt_landing_menu"
              >
                <div className="menu-item">
                  <a
                    className="menu-link nav-link active py-3 px-4 px-xxl-6"
                    href="#Productos"
                    data-kt-scroll-toggle="true"
                    data-kt-drawer-dismiss="true"
                  >
                    Productos
                  </a>
                </div>

                <div className="menu-item">
                  <a
                    className="menu-link nav-link py-3 px-4 px-xxl-6"
                    href="#Soluciones"
                    data-kt-scroll-toggle="true"
                    data-kt-drawer-dismiss="true"
                  >
                    Soluciones
                  </a>
                </div>

                <div className="menu-item">
                  <a
                    className="menu-link nav-link py-3 px-4 px-xxl-6"
                    href="#Tarifas"
                    data-kt-scroll-toggle="true"
                    data-kt-drawer-dismiss="true"
                  >
                    Tarifas
                  </a>
                </div>

                <div className="menu-item">
                  <a
                    className="menu-link nav-link py-3 px-4 px-xxl-6"
                    href="#Contacta"
                    data-kt-scroll-toggle="true"
                    data-kt-drawer-dismiss="true"
                  >
                    Contacta un asesor
                  </a>
                </div>
              </div>
            </div>
          </div>
          
         
          <div className="flex-equal text-end ms-1">
            <Link
              to="/auth/login"
              className="btn btn-success init "
              style={{
                backgroundColor: "#0beea6",
                color: "#000",
                borderRadius: "20px",
                padding: "7px 50px",
              }}
            >
              Iniciar Sesión
            </Link>
            
          </div>
          <div className="flex-equal  d-flex align-items-center justify-content-center">
          <ThemeModeSwitcher
            toggleBtnClass={clsx("btn-active-light-primary btn-custom")}
          />
          <Languages />
          </div>
        </div>

        <FloatingChatButton /> 

      </div>
    </header>
  );
};

export default HeaderLanding;
