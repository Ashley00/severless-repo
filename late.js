// start coding your function here!
function running_late(date)
{
    const current = new Date(date);
    if (current.getHours() >= 22)
    {
        return "It is late!";
    }
    else
    {
        return "It is still early!";
    }

}

exports.running_late = running_late;