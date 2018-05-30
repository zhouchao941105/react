import React from 'react'
import { Button, Card } from 'antd'
import { Link } from 'react-router-dom'
const Meta = Card.Meta;
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
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                />
            </Card>
        </div>
    )
}
export default AppleDetail 