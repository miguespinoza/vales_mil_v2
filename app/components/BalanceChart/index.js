/**
 *
 * BalanceChart
 *
 */

import React from 'react';
import { Line } from 'react-chartjs-2';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

/* eslint-disable react/prefer-stateless-function */
class BalanceChart extends React.Component {
  render() {
    // const { balanceHistory } = this.props;
    // const labels = balanceHistory.map( b => b.timestamp);
    // const data = balanceHistory.map( b => b.balance);
    return (
      <div>
        Balance history
        <Line data={data} />
      </div>
    );
  }
}

BalanceChart.propTypes = {};

export default BalanceChart;
