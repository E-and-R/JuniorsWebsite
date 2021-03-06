import React from 'react';
import Lottie from 'lottie-react-web';

import skills from '../animations/mySkillsComp.json'
import hire from '../animations/hireComp.json'

export default class LottieControl extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isStopped: false,
      isPaused: false,
      speed: 1,
      direction: 1,
      isDataA: true,
    };
  }

  render() {
    const centerStyle = {
      display: 'block',
      margin: '10px auto',
      textAlign: 'center',
    };
    const { isStopped, isPaused, direction, speed, isDataA } = this.state;
    const defaultOptions = { animationData: (isDataA ? skills : hire) };
    const defaultOptions1 = { loop: false};

    return (<div>
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        isStopped={isStopped}
        isPaused={isPaused}
        speed={speed}
        direction={direction}
      />

      <p style={centerStyle}>Speed: x{speed}</p>
      <input
        style={centerStyle}
        type="range" value={speed} min="0" max="3" step="0.5"
        onChange={e => this.setState({ speed: e.currentTarget.value })}
      />
      <button
        style={centerStyle}
        onClick={() => this.setState({ isStopped: true })}
      >stop</button>
      <button
        style={centerStyle}
        onClick={() => this.setState({ isStopped: false })}
      >play</button>
      <button
        style={centerStyle}
        onClick={() => this.setState({ isPaused: !isPaused })}
      >pause</button>
      <button
        style={centerStyle}
        onClick={() => this.setState({ isDataA: hire })}
      >change direction</button>
      <button
        style={centerStyle}
        onClick={() => this.setState({ isDataA: skills })}
      >toggle animation</button>
    </div>);
  }
}
