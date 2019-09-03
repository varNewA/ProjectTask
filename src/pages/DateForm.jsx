import { DatePicker } from 'antd';
import React from 'react';

class DateRange extends React.Component {
  state = {
    startValue: null,
    endValue: null,
    endOpen: false,
  };

  disabledStartDate = startValue => {
    const { endValue } = this.state;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  };

  disabledEndDate = endValue => {
    const { startValue } = this.state;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  };

  onChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  onStartChange = value => {
    this.onChange('startValue', value);
  };

  onEndChange = value => {
    this.onChange('endValue', value);
  };

  handleStartOpenChange = open => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  };

  handleEndOpenChange = open => {
    this.setState({ endOpen: open });
  };

  render() {
    const { startValue, endValue, endOpen } = this.state;
    return (
      <div>
        <div style={{ marginBottom: 10 }}>
          <label style={{ marginRight: 4 }}>开始时间</label>
          <DatePicker
            disabledDate={this.disabledStartDate}

            format="YYYY-MM-DD"
            value={startValue}
            placeholder="Start"
            onChange={this.onStartChange}
            onOpenChange={this.handleStartOpenChange}
          />
        </div>
        <div style={{ marginTop: 10 }}>
          <label style={{ marginRight: 4 }}>结束时间</label>
          <DatePicker
            disabledDate={this.disabledEndDate}

            format="YYYY-MM-DD"
            value={endValue}
            placeholder="End"
            onChange={this.onEndChange}
            open={endOpen}
            onOpenChange={this.handleEndOpenChange}
          />
        </div>
      </div>
    );
  }
}

export default DateRange