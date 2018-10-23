import React from 'react'
import { Spin, Icon } from 'antd'

const Splash = () => {

    const antIcon = <Icon type="loading-3-quarters" style={{ fontSize: 60 }} spin />;

    return (
        <div className="splash-parent">
            <Spin indicator={antIcon} size="large" />
        </div>
    )
}

export default Splash