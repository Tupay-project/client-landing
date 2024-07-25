import {KTIcon} from '../../../../features/helpers'
import { Content } from '../../../../features/layout/components/content'
import {Card4} from '../../../../features/partials/content/cards/Card4'

export function Documents() {
  return (
    <Content>
      <div className='d-flex flex-wrap flex-stack mb-6'>
        <h3 className='fw-bolder my-2'>
          Mis documentos
        </h3>

        <div className='d-flex my-2'>
          <div className='d-flex align-items-center position-relative me-4'>
            <KTIcon iconName='magnifier' className='fs-3 position-absolute ms-3' />
            <input
              type='text'
              id='kt_filter_search'
              className='form-control form-control-white form-control-sm w-150px ps-9'
              placeholder='Search'
            />
          </div>

          <a href='#' className='btn btn-primary btn-sm'>
            File Manager
          </a>
        </div>
      </div>

      <div className='row g-6 g-xl-9 mb-6 mb-xl-9'>
        <div className='col-12 col-sm-12 col-xl'>
          <Card4
            icon='media/svg/files/folder-document.svg'
            title='Finance'
            description='7 files'
          />
        </div>
        <div className='col-12 col-sm-12 col-xl'>
          <Card4
            icon='media/svg/files/folder-document.svg'
            title='Customers'
            description='3 files'
          />
        </div>
        <div className='col-12 col-sm-12 col-xl'>
          <Card4
            icon='media/svg/files/folder-document.svg'
            title='CRM Project'
            description='25 files'
          />
        </div>
      </div>


    </Content>
  )
}
