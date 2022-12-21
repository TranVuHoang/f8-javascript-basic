function run(object) {
    var result = [];
    for(var key in object){
      result.push("Thuộc tính " + `${key}`+ " có giá trị" + ` ${object[key]}`);
    }
    return result;
}

// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output: ['Thuộc tính name có giá trị Nguyen Van A', 'Thuộc tính age có giá trị 16']
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]