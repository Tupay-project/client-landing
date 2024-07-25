import { FC } from 'react'
import { useIntl } from 'react-intl'
import { Content } from '../../../features/layout/components/content'
import { ToolbarWrapper } from '../../../features/layout/components/toolbar'
import { PageTitle } from '../../../features/layout/core'


const DispersionDashboardWrapper: FC = () => (
  <>
    <ToolbarWrapper />
    <Content>
      <div>Dispersion</div>
    </Content>
  </>
)

const DashboardWrapperDispersion: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'DISPERSION' })}</PageTitle>
      <DispersionDashboardWrapper />
    </>
  )
}

export { DashboardWrapperDispersion }
