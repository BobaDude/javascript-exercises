const removeFromArray = function(array, ...args) {
    const NewArray = [];
    array.forEach((number) => {
        if (!args.includes(number)) {
            NewArray.push(number);
        }
        return NewArray;
    });
};

// Do not edit below this line
module.exports = removeFromArray;
