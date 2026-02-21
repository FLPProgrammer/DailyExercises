function filterNumbers(nums: number[]): number {
    return nums
    .filter((num) => num % 2 === 0)
    .map((num) => num * 2)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

/*console.log(filterNumbers([1,2,3,4,5,6]))*/
 
/* =========================================================== */


function removeDuplicateElementsSet(nums: Number[]): Set<Number> {
    return new Set(nums);
}

/*console.log(removeDuplicateElementsSet([2,2,4,4,5,5,6,6,7,7]))*/

/**********************************/

function removeDuplicateElementsFromArray(strs: string[]): string[] {
    const result: string[] = [];

    for(const element of strs) {
        if(!result.includes(element)) result.push(element);
    }
    return result;
}

/*console.log(removeDuplicateElementsFromArray(['ana', 'ana', 'claudia', 'claudia', 'felipe', 'felipe']));*/


/**********************************/


function removeDuplicateElementsFromArrayMapVersion(strs: string[]) : string[] {
    const seen: Record<string, boolean> = {};
    const result: string[] = [];

    for(let i = 0; i < strs.length; i++) {
        const element = strs[i];
        if(element !== undefined && !seen[element]) {
            seen[element] = true;
            result.push(element);
        }
    }
    return result;
}

console.log(removeDuplicateElementsFromArray(['ana', 'ana', 'claudia', 'claudia', 'felipe', 'felipe']));

/**********************************/

