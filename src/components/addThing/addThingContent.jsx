import React from 'react';
import { Input, Select } from 'antd';
import { bootSizeType, colorType, seasonType } from '../../types/index'
 
const Option = Select.Option;
const { TextArea } = Input;

const AddThingContent = (props) => {

    return (
        <div>
            <div>Заголовок</div>
            <div><Input maxLength="50"  style={{ width: 500 }} /></div>
            <div>Размер</div>
            <div>
                <Select defaultValue={bootSizeType.SIZE_37} style={{ width: 500 }} >
                    {Object.values(bootSizeType).map((size, i) =>	
						<Option value={size} key={i} >{size}</Option>
					)}
                </Select>
            </div>      
            <div>Цвет</div>
            <div>
                <Select defaultValue={colorType.BLACK} style={{ width: 500 }} >
                    {Object.values(colorType).map((size, i) =>	
                        <Option value={size} key={i} >{size}</Option>
                    )}
                </Select>
            </div>       
            <div>Сезон</div>
            <div>
                <Select defaultValue={seasonType.SUMMER} style={{ width: 500 }} >
                    {Object.values(seasonType).map((size, i) =>	
                        <Option value={size} key={i} >{size}</Option>
                    )}
                </Select>
            </div>      
            <div>Комментарий</div>
            <div><TextArea autosize={{ minRows: 2, maxRows: 5 }} style={{ width: 500 }} maxLength="250" /></div>            


        </div>
    )
}

export default AddThingContent  