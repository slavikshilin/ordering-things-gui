import thingType from '../thingType';
import bootType from './bootType';
import bootSizeType from './bootSizeType';
import bootPlatformSizeType from './bootPlatformSizeType';
import bootHeelsSizeType from './bootHeelsSizeType';
import paramControlType from '../paramControlType';
import seasonType from '../common/seasonType';
import colorType from '../common/colorType';
import bootBrands from './bootBrands';
 
 /**
 * Параметры обуви
 * @enum {string}
 */
const bootParams = {
    
    /** Тип */
    type: { Text: "Тип", ParamType: paramControlType.NONE, Default: thingType.BOOT },
    
    /** Название */
    title: { Text: "Название", ParamType: paramControlType.INPUT, Default: '' }, 

    /** Производитель */
    vendor: { Text: "Производитель", ParamType: paramControlType.AUTO_COMPLETE, List: bootBrands, Default: '' }, 

    /** Сезон */
    seasonType: { Text: "Сезон",  ParamType: paramControlType.SELECT, List: seasonType, Default: seasonType.SUMMER }, 

    /** Цвет */   
    colorType: { Text: "Цвет",  ParamType: paramControlType.SELECT, List: colorType, Default: colorType.BLACK }, 

    /** Тип */
    bootType: { Text: "Тип",  ParamType: paramControlType.SELECT, List: bootType, Default: bootType.SHOES },
    
    /** Размер */
	bootSizeType : { Text: "Размер", ParamType: paramControlType.SELECT, List: bootSizeType, Default: bootSizeType.SIZE_38 },    
	
    /** Платформа, см. */
	bootPlatformSizeType: { Text: "Платформа, см.", ParamType: paramControlType.SELECT, List: bootPlatformSizeType, Default: bootPlatformSizeType.PLATFORM_SIZE_0 },
	
    /** Каблук, см. */
    bootHeelsSizeType: { Text: "Каблук, см.", ParamType: paramControlType.SELECT, List: bootHeelsSizeType, Default: bootHeelsSizeType.HEELS_SIZE_0 },
    
    /** Комментарий */
    comment: { Text: "Комментарий", ParamType: paramControlType.TEXT_AREA, Default: '' } 
     
};

export default bootParams;   