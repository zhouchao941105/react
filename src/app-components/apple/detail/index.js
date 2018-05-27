import React from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
const AppleDetail = ({ params }) => {
    return (
        <div>
            <Button>
                <Link to={`/apple/list`} >back to application apple</Link>
            </Button>
            <Button>
                <Link to={`/google/list`} >back to application google</Link>
            </Button>
            <p>it's <strong>Detail</strong> for apple</p>
        </div>
    )
}
export default AppleDetail 