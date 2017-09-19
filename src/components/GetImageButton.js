import React, { Component } from 'react'

export default class GetImageButton extends Component {
    render() {
        return (
            <div>
                <button type="submit" onClick={this.props.handleClick}>Submit</button>
            </div>
        )
    }
}
