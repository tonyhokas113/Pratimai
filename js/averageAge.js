function averageAge(asmuo) {
    let childCount = 1;
    let childAgeSum = asmuo.age;
    
    if (asmuo.children) {
        for (let i = 0; i < asmuo.children.length; i++) {
            const child = asmuo.children[i];
            
            const childInfo = averageAge(child);

            childCount += childInfo.childCount;
            childAgeSum += childInfo.ageSum;
            
           
        }
    }
    return {
        childCount: childCount,
        ageSum: childAgeSum
    }
}


const gimine2 = {
    name: 'Petras',
    age: 40,
    children: [
        {
            name: 'Maryte',
            age: 45,
            children: [
                {
                    name: 'Onute',
                    age: 70
                },
                {
                    name: 'Elvyra',
                    age: 66
                },
            ]
        },
        {
            name: 'Jonas',
            age: 43,
            children: [
                {
                    name: 'Aleksas',
                    age: 20,
                    children: [
                        {
                            name: 'Gokas',
                            age: 200
                        }
                    ]
                },
                {
                    name: 'Gabriele',
                    age: 80
                },
            ]
        },
    ]
}

const average = averageAge(gimine2);
let vidutinisAmzius = average.ageSum / average.childCount;
console.log(vidutinisAmzius);
