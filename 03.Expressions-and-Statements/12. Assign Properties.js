function printer([obj1, val1, obj2, val2, obj3, val3]) {
    let thing1 = {};

    thing1[obj1] = val1;
    thing1[obj2] = val2;
    thing1[obj3] = val3;

    console.log(thing1);
}
printer(['name', 'Pesho', 'age', '23', 'gender', 'male']);