import { FC } from 'react';
import { Content } from '../../../features/layout/components/content';
import { KTIcon } from '../../../features/helpers';

const InformationDashboardWrapper: FC = () => (
  <Content>
    <div className="d-flex flex-wrap flex-stack">
      <div className="d-flex flex-column flex-grow-1 pe-8">
        <div className="d-flex flex-wrap justify-content-center">
          <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">

          <div className="fw-bold fs-6 text-gray-500">Recaudos</div>
            <div className="d-flex align-items-center">
              <KTIcon
                iconName="arrow-up"
                className="fs-3 text-success me-2"
              />
              <div className="fs-2 fw-bolder">4500$</div>
            </div>
            
          </div>

          <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
          <div className="fw-bold fs-6 text-gray-500">Compras</div>
            <div className="d-flex align-items-center">
              <KTIcon
                iconName="arrow-down"
                className="fs-3 text-danger me-2"
              />
              <div className="fs-2 fw-bolder">75</div>
            </div>
            
          </div>

          <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
          <div className="fw-bold fs-6 text-gray-500">Consignaciones</div>
            <div className="d-flex align-items-center">
              <KTIcon
                iconName="arrow-up"
                className="fs-3 text-success me-2"
              />
              <div className="fs-2 fw-bolder">60%</div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </Content>
);

export { InformationDashboardWrapper };
