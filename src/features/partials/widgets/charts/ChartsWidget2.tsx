import { useEffect, useRef, FC } from 'react';
import ApexCharts, { ApexOptions } from 'apexcharts';
import { getCSS, getCSSVariableValue } from '../../../assets/ts/_utils';
import { useThemeMode } from '../../layout/theme-mode/ThemeModeProvider';

type Props = {
  className: string;
};

const ChartsWidget2: FC<Props> = ({ className }) => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const { mode } = useThemeMode();

  const refreshChart = () => {
    if (!chartRef.current) {
      return;
    }

    const height = parseInt(getCSS(chartRef.current, 'height'));

    const chart = new ApexCharts(chartRef.current, getChartOptions(height));
    if (chart) {
      chart.render();
    }

    return chart;
  };

  useEffect(() => {
    const chart = refreshChart();
    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, [chartRef, mode]);

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Ingresos</span>
          <span className='text-muted fw-semibold fs-7'>$ 0,00</span>
        </h3>
        <div className='d-flex flex-column'>
          <span className='text-muted fs-7'>Semanal: $0,00</span>
          <span className='text-muted fs-7'>Mensual: $0,00</span>
          <span className='text-muted fs-7'>Anual: $0,00</span>
          <span className='text-muted fs-7'>Total: $0,00</span>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body'>
        {/* begin::Chart */}
        <div ref={chartRef} id='kt_charts_widget_2_chart' style={{ height: '350px' }}></div>
        {/* end::Chart */}
      </div>
      {/* end::Body */}
    </div>
  );
};

export { ChartsWidget2 };

function getChartOptions(height: number): ApexOptions {
  const labelColor = getCSSVariableValue('--bs-gray-20');
  const borderColor = getCSSVariableValue('--bs-gray-200');
  const baseColor = getCSSVariableValue('--bs-green');
  const secondaryColor = getCSSVariableValue('--bs-gray-300');
  const tertiaryColor = getCSSVariableValue('--bs-blue');

  return {
    series: [
      {
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58],
      },
      {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105],
      },
      {
        name: 'Expenses',
        data: [35, 41, 36, 26, 45, 48],
      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'bar',
      height: height,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '70%',
        borderRadius: 0,
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: labelColor,
          fontSize: '10px',
        },
      },
    },
    fill: {
      opacity: 1,
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      hover: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val) {
          return '$' + val + ' thousands';
        },
      },
    },
    colors: [baseColor, secondaryColor, tertiaryColor],
    grid: {
      borderColor: borderColor,
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
  };
}
