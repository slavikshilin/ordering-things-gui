import React, { Component } from 'react';
import { Input, Select } from 'antd';
import { bootParams, bootType, bootPlatformSizeType, bootHeelsSizeType, bootSizeType, colorType, seasonType } from '../../types/index'
 
const Option = Select.Option;
const { TextArea } = Input;

class AddThingContent extends Component {

    getThingParams() {
        const thingType = this.props.thingType;

        if (thingType === 'boot') {
            return (
                <div>
                    <div>{bootParams.bootType}</div>
                    <div>
                        <Select defaultValue={bootType.SHOES} style={{ width: 500 }} >
                            {Object.values(bootType).map((type, i) =>	
                                <Option value={type} key={i} >{type}</Option>
                            )}
                        </Select>
                    </div> 
                    <div>{bootParams.bootSizeType}</div>
                    <div>
                        <Select defaultValue={bootSizeType.SIZE_38} style={{ width: 500 }} >
                            {Object.values(bootSizeType).map((bootSize, i) =>	
                                <Option value={bootSize} key={i} >{bootSize}</Option>
                            )}
                        </Select>
                    </div>      
                    <div>{bootParams.bootHeelsSizeType}</div>
                    <div>
                        <Select defaultValue={bootHeelsSizeType.HEELS_SIZE_0} style={{ width: 500 }} >
                            {Object.values(bootHeelsSizeType).map((bootHeelsSize, i) =>	
                                <Option value={bootHeelsSize} key={i} >{bootHeelsSize}</Option>
                            )}
                        </Select>
                    </div>   
                    <div>{bootParams.bootPlatformSizeType}</div>
                    <div>
                        <Select defaultValue={bootPlatformSizeType.PLATFORM_SIZE_0} style={{ width: 500 }} >
                            {Object.values(bootPlatformSizeType).map((bootPlatformSize, i) =>	
                                <Option value={bootPlatformSize} key={i} >{bootPlatformSize}</Option>
                            )}
                        </Select>
                    </div>                                                          
                </div>  
            )
        } else {
            return null;
        }
    }

    render() {

        return (
            <div>
                <div>
                    <div>Название</div>
                    <div><Input maxLength="50" style={{ width: 500 }} /></div>
                </div>
                <div>
                    <div>Сезон</div>
                    <div>
                        <Select defaultValue={seasonType.SUMMER} style={{ width: 500 }} >
                            {Object.values(seasonType).map((season, i) =>	
                                <Option value={season} key={i} >{season}</Option>
                            )}
                        </Select>
                    </div> 
                </div>
                <div>
                    <div>Цвет</div>
                    <div>
                        <Select defaultValue={colorType.BLACK} style={{ width: 500 }} >
                            {Object.values(colorType).map((color, i) =>	
                                <Option value={color} key={i} >{color}</Option>
                            )}
                        </Select>
                    </div>       
                </div>
                            
                {this.getThingParams()}

                <div>        
                    <div>Комментарий</div>
                    <div><TextArea autosize={{ minRows: 2, maxRows: 5 }} style={{ width: 500 }} maxLength="250" /></div>            
                </div>

            </div>
        )
    }
}

export default AddThingContent  