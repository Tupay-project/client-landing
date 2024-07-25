import { FC } from 'react'
import { useIntl } from 'react-intl'
import { Content } from '../../../features/layout/components/content'
import { ToolbarWrapper } from '../../../features/layout/components/toolbar'
import { PageTitle } from '../../../features/layout/core'


const IngressDashboardWrapper: FC = () => (
  <>
    <ToolbarWrapper />
    <Content>
      <div>Ingreso</div>
    </Content>
  </>
)

const DashboardWrapperIngress: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'INGRESO' })}</PageTitle>
      <IngressDashboardWrapper />
    </>
  )
}

export { DashboardWrapperIngress }
