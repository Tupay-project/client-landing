import { FC } from 'react';
import { useIntl } from 'react-intl';
import { PageTitle } from '../../../features/layout/core';
// import { ToolbarWrapper } from '../../../features/layout/components/toolbar';
import { Content } from '../../../features/layout/components/content';
import { ChartsWidget2, TablesWidget13 } from '../../../features/partials/widgets';
import { ChartsWidget9 } from '../../../features/partials/widgets/charts/ChartsWidget9';
import { Statistics } from '../../modules/widgets/components/Statistics';

const DashboardPage: FC = () => (
  <>
    {/* <ToolbarWrapper /> */}
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
      <div className="row">
        <div className="col-12 p-5">
          <TablesWidget13 className={''} />
        </div>
      </div>
    </Content>
  </>
);

const DashboardWrapper: FC = () => {
  const intl = useIntl();
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'MENU.DASHBOARD' })}</PageTitle>
      <DashboardPage />
    </>
  );
};

export { DashboardWrapper };
