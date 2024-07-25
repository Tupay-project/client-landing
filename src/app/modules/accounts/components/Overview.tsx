import { Link } from 'react-router-dom'
import { KTIcon } from '../../../../features/helpers'

import { Content } from '../../../../features/layout/components/content'

export function Overview() {
  return (
    <Content>
      <div className='card mb-5 mb-xl-10' id='kt_profile_details_view'>
        <div className='card-header cursor-pointer'>
          <div className='card-title m-0'>
            <h3 className='fw-bolder m-0'>Detalle de la cuenta</h3>
          </div>

          <Link to='/crafted/account/settings' className='btn btn-primary align-self-center'>
            Editar perfil
          </Link>
        </div>

        <div className='card-body p-9'>
          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Nombre Completo</label>

            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-gray-900'>Max Smith</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Empresa</label>

            <div className='col-lg-8 fv-row'>
              <span className='fw-bold fs-6'>Keenthemes</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>
              Teléfono de Contacto
              <i
                className='fas fa-exclamation-circle ms-1 fs-7'
                data-bs-toggle='tooltip'
                title='El número de teléfono debe estar activo'
              ></i>
            </label>

            <div className='col-lg-8 d-flex align-items-center'>
              <span className='fw-bolder fs-6 me-2'>+573000011</span>

              <span className='badge badge-success'>Verificado</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Sitio Web de la Empresa</label>

            <div className='col-lg-8'>
              <a href='#' className='fw-bold fs-6 text-gray-900 text-hover-primary'>
                jabalabs.com
              </a>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>
              País
              <i
                className='fas fa-exclamation-circle ms-1 fs-7'
                data-bs-toggle='tooltip'
                title='País de origen'
              ></i>
            </label>

            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-gray-900'>Colombia</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Comunicación</label>

            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-gray-900'>Correo Electrónico, Teléfono</span>
            </div>
          </div>

          <div className='row mb-10'>
            <label className='col-lg-4 fw-bold text-muted'>Permitir Cambios</label>

            <div className='col-lg-8'>
              <span className='fw-bold fs-6'>Sí</span>
            </div>
          </div>

          <div className='notice d-flex bg-light-warning rounded border-warning border border-dashed p-6'>
            <KTIcon iconName='information-5' className='fs-2tx text-warning me-4' />
            <div className='d-flex flex-stack flex-grow-1'>
              <div className='fw-bold'>
                <h4 className='text-gray-800 fw-bolder'>¡Necesitamos tu atención!</h4>
                <div className='fs-6 text-gray-600'>
                  Tu pago fue rechazado. Para empezar a usar las herramientas, por favor
                  <Link className='fw-bolder' to='/crafted/account/settings'>
                    {' '}
                    Añadir Método de Pago
                  </Link>
                  .
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Content>
  )
}
