import React from "react";
import { KTIcon } from "../../../helpers";

type Props = {
  className: string;
};

const TablesWidget13: React.FC<Props> = ({ className }) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold fs-3 mb-1">
            Resumen Ejecutivo
          </span>
        </h3>
        <div className="card-toolbar">
          {/* begin::Menu */}
          <button
            type="button"
            className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
          >
            <KTIcon iconName="category" className="fs-2" />
          </button>
          {/* begin::Menu 2 */}
          <div
            className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-200px"
            data-kt-menu="true"
          >
            {/* begin::Menu item */}
            <div className="menu-item px-3">
              <div className="menu-content fs-6 text-gray-900 fw-bold px-3 py-4">
                Acciones rápidas
              </div>
            </div>
      
            <div className="separator mb-3 opacity-75"></div>
  
            <div className="separator mt-3 opacity-75"></div>
            {/* end::Menu separator */}
            {/* begin::Menu item */}
            <div className="menu-item px-3">
              <div className="menu-content px-3 py-3">
                <a className="btn btn-primary btn-sm px-4" href="#">
                  Exportar PDF
                </a>
              </div>
            </div>
            {/* end::Menu item */}
          </div>
          {/* end::Menu 2 */}
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className="card-body py-3">
        {/* begin::Table container */}
        <div className="table-responsive">
          {/* begin::Table */}
          <table className="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
            {/* begin::Table head */}
            <thead>
              <tr className="fw-bold text-muted">
                <th className="w-25px">
                  <div className="form-check form-check-sm form-check-custom form-check-solid">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="1"
                      data-kt-check="true"
                      data-kt-check-target=".widget-13-check"
                    />
                  </div>
                </th>
                <th className="min-w-150px">Transacción</th>
                <th className="min-w-140px">Ciudad</th>
                <th className="min-w-120px">Fecha</th>
                <th className="min-w-120px">Detalle</th>
                <th className="min-w-120px">Monto</th>
                <th className="min-w-120px">Estado</th>
                <th className="min-w-100px text-end">Acciones</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                <td>
                  <div className="form-check form-check-sm form-check-custom form-check-solid">
                    <input
                      className="form-check-input widget-13-check"
                      type="checkbox"
                      value="1"
                    />
                  </div>
                </td>
                <td>Lorem ipsum</td>
                <td>Lorem ipsum</td>
                <td>Lorem ipsum</td>
                <td>Lorem ipsum</td>
                <td>Lorem ipsum</td>
                <td>Lorem ipsum</td>
                <td className="text-end">
                  <a
                    href="#"
                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                  >
                    <KTIcon iconName="switch" className="fs-3" />
                  </a>
                  <a
                    href="#"
                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                  >
                    <KTIcon iconName="pencil" className="fs-3" />
                  </a>
                  <a
                    href="#"
                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                  >
                    <KTIcon iconName="trash" className="fs-3" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-check form-check-sm form-check-custom form-check-solid">
                    <input
                      className="form-check-input widget-13-check"
                      type="checkbox"
                      value="1"
                    />
                  </div>
                </td>
                <td>Lorem ipsum</td>
                <td>Lorem ipsum</td>
                <td>Lorem ipsum</td>
                <td>Lorem ipsum</td>
                <td>Lorem ipsum</td>
                <td>Lorem ipsum</td>
                <td className="text-end">
                  <a
                    href="#"
                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                  >
                    <KTIcon iconName="switch" className="fs-3" />
                  </a>
                  <a
                    href="#"
                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                  >
                    <KTIcon iconName="pencil" className="fs-3" />
                  </a>
                  <a
                    href="#"
                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                  >
                    <KTIcon iconName="trash" className="fs-3" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-check form-check-sm form-check-custom form-check-solid">
                    <input
                      className="form-check-input widget-13-check"
                      type="checkbox"
                      value="1"
                    />
                  </div>
                </td>
                <td>Lorem ipsum</td>
                <td>Lorem ipsum</td>
                <td>Lorem ipsum</td>
                <td>Lorem ipsum</td>
                <td>Lorem ipsum</td>
                <td>Lorem ipsum</td>
                <td className="text-end">
                  <a
                    href="#"
                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                  >
                    <KTIcon iconName="switch" className="fs-3" />
                  </a>
                  <a
                    href="#"
                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                  >
                    <KTIcon iconName="pencil" className="fs-3" />
                  </a>
                  <a
                    href="#"
                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                  >
                    <KTIcon iconName="trash" className="fs-3" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-check form-check-sm form-check-custom form-check-solid">
                    <input
                      className="form-check-input widget-13-check"
                      type="checkbox"
                      value="1"
                    />
                  </div>
                </td>
                <td>Lorem ipsum</td>
                <td>Lorem ipsum</td>
                <td>Lorem ipsum</td>
                <td>Lorem ipsum</td>
                <td>Lorem ipsum</td>
                <td>Lorem ipsum</td>
                <td className="text-end">
                  <a
                    href="#"
                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                  >
                    <KTIcon iconName="switch" className="fs-3" />
                  </a>
                  <a
                    href="#"
                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                  >
                    <KTIcon iconName="pencil" className="fs-3" />
                  </a>
                  <a
                    href="#"
                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                  >
                    <KTIcon iconName="trash" className="fs-3" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-check form-check-sm form-check-custom form-check-solid">
                    <input
                      className="form-check-input widget-13-check"
                      type="checkbox"
                      value="1"
                    />
                  </div>
                </td>
                <td>Lorem ipsum</td>
                <td>Lorem ipsum</td>
                <td>Lorem ipsum</td>
                <td>Lorem ipsum</td>
                <td>Lorem ipsum</td>
                <td>Lorem ipsum</td>
                <td className="text-end">
                  <a
                    href="#"
                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                  >
                    <KTIcon iconName="switch" className="fs-3" />
                  </a>
                  <a
                    href="#"
                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                  >
                    <KTIcon iconName="pencil" className="fs-3" />
                  </a>
                  <a
                    href="#"
                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                  >
                    <KTIcon iconName="trash" className="fs-3" />
                  </a>
                </td>
              </tr>
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  );
};

export { TablesWidget13 };
