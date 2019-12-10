import React from 'react';

export default class YouTubeDebugger extends React.Component {

    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    handleBitRateClick = () => {
        this.setState({
            settings: { ...this.state.settings, bitrate: 12 }
        }
        )
    }

    handleResolutionClick = () => {
        this.setState({
            settings: { ...this.state.settings, video: { resolution: '720p' } }
        }
        )
    }

    render() {
        return (
            <div>
                <button onClick={this.handleBitRateClick} className='bitrate'>{this.state.settings.bitrate}</button>
                <button onClick={this.handleResolutionClick} className='resolution'>{this.state.settings.video.resolution}</button>
            </div>
        )
    }
}
