// start coding your function here!
function find_max(arr)
{
    // max_num = arr.at(0);
    // for(let i = 0; i < arr.length; i++)
    // {
    //     current = arr.at(i);
    //     if (current > max_num)
    //     {
    //         max_num = current;
    //     }
    // }
    // return max_num;
    return Math.max(...arr);
}

exports.find_max = find_max;

//console.log(find_max([1,78,12,2,5,10]));