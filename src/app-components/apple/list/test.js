import React from 'react';
import { connect } from 'react-redux'
import { Button, Input, Breadcrumb, Tooltip, Table, Spin, Layout } from 'antd'


export default class List extends React.Component {
    constructor(props){
      super(props)
    }
    render() {
        return (
            <div>
                <input value={this.props.name}/>
                <p>{this.props.name}</p>
            </div >
        )
    }

}
