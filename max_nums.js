// start coding your function here!
function find_max(arr)
{
    const max_num = arr.at(0);
    for(let i = 0; i < arr.length; i++)
    {
        const current = arr.at(i);
        if (current > max_num)
        {
            max_num = current;
        }
    }
    return max_num;
}

exports.find_max = find_max;