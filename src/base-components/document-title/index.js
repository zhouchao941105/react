import React from 'react'
export default class Title extends React.Component {
    setTitle() {
        console.log('works');
        document.title = this.props.title
    }
    componentDidMount() {
        this.setTitle()
    }
    render() {
        return React.Children.only(this.props.children)
    }
}