export const sortByKey = (dataList: any[], keyName: string) => {
    return dataList.sort((itemA, itemB) => {
        if (itemA[keyName] === itemB[keyName]) {
            return 0;
        } else if (itemA[keyName] > itemB[keyName]) {
            return 1;
        } else {
            return -1;
        }
    });
};

/*
* Return the object matched with given Field name 
* From given list of objects
* 
* @params {Array<any>} list
* @params {String} fieldName
* @params {String|Number|Boolean|null|undefined} value
*/
export const findByField = (
    list: any[],
    fieldName: string,
    value: string | number | boolean | null | undefined
) => {
    return list.filter(item => {
        return item[fieldName] === value;
    })[0];
};