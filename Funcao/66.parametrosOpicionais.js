function area(l, j) {
    const area = l * j

    if(area > 20){
        console.log('Area : ', area)
    } else {
        return area
    }
}


console.log(area(10, 20))