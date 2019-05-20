import React, { Component } from 'react'

class ValidationComponent extends Component {
    constructor(props) {
        super(props)

        this.shortMessage = 'Text too short'
        this.longMessage = 'Text long enough'
        this.lengthThreshold = 5
    }

    render() {
        return(
            <div>
                {
                    this.props.textLength >= this.lengthThreshold ? this.longMessage : this.shortMessage
                }
            </div>
        )
    }
}

export default ValidationComponent