
// 빈 배열 체크하기
export const isEmpty = (array) => {
    if(array === "" || array === null || array === undefined || 
    (array !== null && typeof array === 'object' && !Object.keys(array).length)) {
        return true;
    } else {
        return false;
    }
}

// 특정수 이상 텍스트 잘라내서 ... 추가
export const elipsis = (str) => {
    console.log(str.length)
    if(str.length > 15) {
        return str.substr(0,15) + "...";
    } else {
        return str;
    }
}

