import { FC } from 'react'
import { useIntl } from 'react-intl'
import { Content } from '../../../features/layout/components/content'
import { ToolbarWrapper } from '../../../features/layout/components/toolbar'
import { PageTitle } from '../../../features/layout/core'
import { Statistics } from '../../modules/widgets/components/Statistics'
import { ChartsWidget2, TablesWidget13 } from '../../../features/partials/widgets'
import { ChartsWidget9 } from '../../../features/partials/widgets/charts/ChartsWidget9'
import { AccountHeader } from '../../modules/accounts/AccountHeader'
import { ProfileHeader } from '../../modules/profile/ProfileHeader'
import { InformationDashboardWrapper } from './InformationDashboardWrapper'

const DashboardWrapper: FC = () => (
  <>
    <ToolbarWrapper />
    <Content>
      <div className="row">
        <div className="col-md-3">
          <Statistics />
        </div>
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-6">
              <ChartsWidget2 className={''} />
            </div>
            <div className="col-md-6">
              <ChartsWidget9 className={''} />
            </div>
          </div>
        </div>
      </div>
      {/* Nueva fila vacía con gráficas horizontales */}
      <div className="row">
        <div className="col-md-6">
          <InformationDashboardWrapper  />
        </div>
        
      </div>
      <div className="row">
        <div className="col-12 p-5">
          <TablesWidget13 className={''} />
        </div>
      </div>
      
    </Content>
  </>
)

const DashboardWrapperSalida: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'Salidas' })}</PageTitle>
      <DashboardWrapper />
    </>
  )
}

export { DashboardWrapperSalida }
