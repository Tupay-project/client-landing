import { FC } from 'react'
import { useIntl } from 'react-intl'
import { Content } from '../../../features/layout/components/content'
import { ToolbarWrapper } from '../../../features/layout/components/toolbar'
import { PageTitle } from '../../../features/layout/core'


const TargetDashboardWrapper: FC = () => (
  <>
    <ToolbarWrapper />
    <Content>
      <div>Targetas</div>
    </Content>
  </>
)

const DashboardWrapperTarget: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'Targetas' })}</PageTitle>
      <TargetDashboardWrapper />
    </>
  )
}

export { DashboardWrapperTarget }
