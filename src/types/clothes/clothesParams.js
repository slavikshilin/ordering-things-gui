import thingType from '../thingType';
import clothesType from './clothesType';
import clothesSizeType from './clothesSizeType';
import paramControlType from '../paramControlType';
import seasonType from '../common/seasonType';
import colorType from '../common/colorType';
import clothesBrands from './clothesBrands';
 
 /**
 * Параметры одежды
 * @enum {string}
 */
const clothesParams = {
    
    /** Тип */
    type: { Text: "Тип", ParamType: paramControlType.NONE, Default: thingType.CLOTHES },
    
    /** Название */
    title: { Text: "Название", ParamType: paramControlType.INPUT, Default: '' }, 

    /** Производитель */
    vendor: { Text: "Производитель", ParamType: paramControlType.AUTO_COMPLETE, List: clothesBrands, Default: '' }, 

    /** Сезон */
    seasonType: { Text: "Сезон",  ParamType: paramControlType.SELECT, List: seasonType, Default: seasonType.SUMMER }, 

    /** Цвет */   
    colorType: { Text: "Цвет",  ParamType: paramControlType.SELECT, List: colorType, Default: colorType.BLACK }, 

    /** Тип */
    clothesType: { Text: "Тип",  ParamType: paramControlType.SELECT, List: clothesType, Default: clothesType.DRESS },
    
    /** Размер */
	clothesSizeType : { Text: "Размер", ParamType: paramControlType.SELECT, List: clothesSizeType, Default: clothesSizeType.SIZE_M },    
    
    /** Комментарий */
    comment: { Text: "Комментарий", ParamType: paramControlType.TEXT_AREA, Default: '' } 
     
};

export default clothesParams;   