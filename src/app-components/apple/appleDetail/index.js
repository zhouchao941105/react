import React from 'react'
import { Button } from 'antd'
import { Link } from 'react-router'
const AppleDetail = ({ params }) => {
    return (
        <div>
            <Button>
                <Link to={`/apple/List`} >back to application apple</Link>
            </Button>
            <Button>
                <Link to={`/google/List`} >back to application google</Link>
            </Button>
            <p>it's <strong>Detail</strong> for apple</p>
        </div>
    )
}
export default AppleDetail 