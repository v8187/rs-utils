import { isObject } from "./is.utils";

export const setUID = (): string => {
    // item.id = Number(new Date()) + len;
    // return item;
    // http://www.ietf.org/rfc/rfc4122.txt
    const s: string[] = [],
        hexDigits = '0123456789abcdef';

    let i = 0;

    for (; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = '4';  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr(((s[19] as any) & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = '-';

    return s.join('');
};

export const fireWindowResize = (): void => {
    setTimeout((): void => {
        if (/msie\s|trident\/|edge\//i.test(window.navigator.userAgent)) {
            const resizeEvent = window.document.createEvent('UIEvents');
            resizeEvent.initUIEvent('resize', true, false, window, 0);
            window.dispatchEvent(resizeEvent);
        } else {
            window.dispatchEvent(new Event('resize'));
        }
    }, 0);
};

export const selectContent = (eleId: string): void => {
    if ((document as any).selection) { // IE
        const range = (document.body as any).createTextRange();
        range.moveToElementText(document.getElementById(eleId));
        range.select();
    } else if (window.getSelection) {
        const range = document.createRange() as any;
        range.selectNode(document.getElementById(eleId));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }
};

export const syntaxHighlight = (json: any) => {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, (match) => {
        let cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
};

/*  
 * Returns a deep copy of the object
 */
export const deepCopy = (oldObj: any): any => {
    let newObj = oldObj;
    if (oldObj && typeof oldObj === 'object' && !(oldObj instanceof RegExp)) {
        newObj = Object.prototype.toString.call(oldObj) === '[object Array]' ? [] : {};
        for (const i in oldObj) {
            if (oldObj[i] !== undefined) {
                newObj[i] = deepCopy(oldObj[i]);
            }
        }
    }
    return newObj;
};

/*  
 * Returns a merged Object from given N number of objects
 * Last object gets merged into object before it and 
 * it will continue untill all objects get merged into first one
 */
export const deepMergeObject = (target, ...sources): any => {
    const reduced = sources.reduce((accumulator, value, index, array) => {
        return mergeObject(accumulator, value);
    });

    return mergeObject(target, reduced);
};

/*  
 * Returns a merged Object by merging source into target
 */
export const mergeObject = (target, source) => {
    if (!(isObject(target) && isObject(source))) {
        console.error('[utils]: mergeObject(target, source): Both arguments must be JavaScript object.');
        return;
    }

    for (const key in source) {
        if (source.hasOwnProperty(key)) {
            if (isObject(target[key]) && isObject(source[key])) {
                target[key] = mergeObject(target[key], source[key]);
            } else {
                target[key] = source[key];
            }
        }
    }
    return target;
}

export const swapNumbers = (a: number, b: number) => {
    a += b;
    b = a - b;
    a -= b;
    return { a, b };
};