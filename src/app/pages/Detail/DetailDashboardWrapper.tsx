import { FC } from 'react'
import { useIntl } from 'react-intl'
import { Content } from '../../../features/layout/components/content'
import { ToolbarWrapper } from '../../../features/layout/components/toolbar'
import { PageTitle } from '../../../features/layout/core'


const DetailsDashboardWrapper: FC = () => (
  <>
    <ToolbarWrapper />
    <Content>
      <div>Detail</div>
    </Content>
  </>
)

const DashboardWrapperDetail: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'Detail' })}</PageTitle>
      <DetailsDashboardWrapper />
    </>
  )
}

export { DashboardWrapperDetail }
