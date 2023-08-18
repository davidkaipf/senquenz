// Shows current audio graph
// Application can be paused and started

import React                            from 'react';
import                                       '../../../css/module/BottomBar.css';

import {ReactComponent as SvgPlay}      from '../../../img/play.svg';
import {ReactComponent as SvgPause}     from '../../../img/pause.svg';
import {WaveformVisualizer}             from '../../audio/WaveformVisualizer';

export class BottomBar extends React.Component{

    constructor(props) {
        super(props);

        this.tick       = this.tick.bind(this);
        this.frequency  = React.createRef();

        this.state      = {audioData: new Uint8Array(0)}
    }

    componentDidMount() {
        this.rafId = requestAnimationFrame(this.tick);
    }

    tick(){
        this.setState({audioData: this.props.audioData})
        this.rafId = requestAnimationFrame(this.tick);
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.rafId);
    }

    render() {
        return(
            <div className = "bottomBar" id={this.props.showInterfaceCom? null: 'hideComponents'}>
                <div className = "gradientBottom">
                    <div className = "iconsBottom">
                        <div className = "play"
                             onClick   = {(event) => this.props.eventHandler(event)}
                        >
                        {this.props.play?  <SvgPause/>: <SvgPlay/>}
                        </div>
                    </div>
                </div>

                <div className = "frequency" ref={(input) => { this.frequency = input; }}>
                    {this.props.audio ?
                        <WaveformVisualizer audioData   ={this.state.audioData}
                                            width       ={this.frequency.clientWidth}
                                            height      ={this.frequency.clientHeight}
                        /> : ''}
                </div>
            </div>
        )
    }
}
