import React from 'react'
import { Spin } from 'antd'

const Splash = () => {
    return (
        <div className="splash-parent">
            <Spin tip="Загрузка..." size="large" />
        </div>
    )
}

export default Splash