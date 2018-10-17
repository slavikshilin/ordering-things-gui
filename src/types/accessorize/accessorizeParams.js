import thingType from '../thingType';
import accessorizeType from './accessorizeType';
import paramControlType from '../paramControlType';
import colorType from '../common/colorType';
 
 /**
 * Параметры аксессуаров
 * @enum {string}
 */
const bagParams = {
    
    /** Тип */
    type: { Text: "Тип", ParamType: paramControlType.NONE, Default: thingType.BAG },
    
    /** Название */
    title: { Text: "Название", ParamType: paramControlType.INPUT, Default: '' }, 

    /** Производитель */
    vendor: { Text: "Производитель", ParamType: paramControlType.INPUT, Default: '' }, 

    /** Цвет */   
    colorType: { Text: "Цвет",  ParamType: paramControlType.SELECT, List: colorType, Default: colorType.BLACK }, 

    /** Тип */
    bagType: { Text: "Тип",  ParamType: paramControlType.SELECT, List: accessorizeType, Default: accessorizeType.BELT },
    
    /** Комментарий */
    comment: { Text: "Комментарий", ParamType: paramControlType.TEXT_AREA, Default: '' } 
     
};

export default bagParams;   