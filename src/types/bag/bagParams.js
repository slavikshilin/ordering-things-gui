import thingType from '../thingType';
import bagType from './bagType';
import paramControlType from '../paramControlType';
import colorType from '../common/colorType';
import bagBrands from './bagBrands'; 

 /**
 * Параметры сумок
 * @enum {string}
 */
const bagParams = {
    
    /** Тип */
    type: { Text: "Тип", ParamType: paramControlType.NONE, Default: thingType.BAG },
    
    /** Название */
    title: { Text: "Название", ParamType: paramControlType.INPUT, Default: '' }, 

    /** Производитель */
    vendor: { Text: "Производитель", ParamType: paramControlType.AUTO_COMPLETE, List: bagBrands, Default: '' }, 

    /** Цвет */   
    colorType: { Text: "Цвет",  ParamType: paramControlType.SELECT, List: colorType, Default: colorType.BLACK }, 

    /** Тип */
    bagType: { Text: "Тип",  ParamType: paramControlType.SELECT, List: bagType, Default: bagType.BAG },
    
    /** Комментарий */
    comment: { Text: "Комментарий", ParamType: paramControlType.TEXT_AREA, Default: '' } 
     
};

export default bagParams;   