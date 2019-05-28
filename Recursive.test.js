function pow(num, to) {
    if (to === 0) return 1;
    if (to === 1) return num;
    return num * pow(num, to - 1);
  }
  it("should recursively calculate power", () => {
    expect(pow(2, 0)).toEqual(1);
    expect(pow(2, 2)).toEqual(4);
    expect(pow(2, 4)).toEqual(16); // 2*2 *2*2
  });
  
  function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
  }
  it("should recursively calculate factorial", () => {
    expect(factorial(1)).toEqual(1);
    expect(factorial(2)).toEqual(2);
    expect(factorial(4)).toEqual(24);
    expect(factorial(7)).toEqual(5040);
  });
  
  function productOfArray(list) {
    if (!list.length) return 1;
    return list[0] * productOfArray(list.slice(1));
  }
  
  it("should recursively calculate product", () => {
    expect(productOfArray([1, 2, 3])).toEqual(6);
    expect(productOfArray([1, 2, 3, 10])).toEqual(60);
  });
  
  // SAMPLE INPUT/OUTPUT
  // recursiveRange(6) // 21
  // recursiveRange(10) // 55
  
  function recursiveRange(num) {
    if (num === 1) return 1;
    return num + recursiveRange(num - 1);
  }
  it("should recursively add range", () => {
    expect(recursiveRange(6)).toEqual(21);
    expect(recursiveRange(10)).toEqual(55);
  });
  
  // fib(4) // 3
  // fib(10) // 55
  // fib(28) // 317811
  // fib(35) // 9227465
  
  function fib(num) {
    if (num <= 2) return 1;
    return fib(num - 1) + fib(num - 2);
  }
  
  it("should recursively calculate fib", () => {
    expect(fib(4)).toEqual(3);
    expect(fib(10)).toEqual(55);
    expect(fib(28)).toEqual(317811);
    expect(fib(35)).toEqual(9227465);
  });
  
  function reverseRec(str) {
    if (str === "") return "";
    return reverseRec(str.slice(1)) + str[0];
  }
  it("should recursively reverse string", () => {
    expect(reverseRec("hello")).toEqual("olleh");
  });
  
  function isPalindromeRec(str) {
    // function reversed(str) {
    //   if (str==='') return '';
    //   return reversed(str.slice(1)) + str[0];
    // }
    // return str === reversed(str);
    if (str.length < 2) return true;
    return str[0] === str.slice(-1) && isPalindromeRec(str.slice(1, -1));
  }
  
  describe("Palindrome recursively", () => {
    it("Should return true", () => {
      expect(isPalindromeRec("tacocat")).toBeTruthy();
    });
    it("Should return false", () => {
      expect(isPalindromeRec("sit ad est love")).toBeFalsy();
    });
  });
  
  function someNotRecursive(list, fun) {
    return list.some(x => fun(x));
  }
  const someRecursive = (list, fun) => {
    if (!list.length) return false;
    if (fun(list[0])) return true;
    return someRecursive(list.slice(1), fun);
  };
  
  describe("someRecursive", () => {
    it("should return true if a single value returns true", () => {
      const isOdd = val => val % 2 !== 0;
      expect(someRecursive([1, 2, 3, 4], isOdd)).toBeTruthy();
      expect(someRecursive([4, 6, 8, 9], isOdd)).toBeTruthy();
      expect(someRecursive([4, 6, 8], isOdd)).toBeFalsy();
      expect(someRecursive([4, 6, 8], val => val > 10)).toBeFalsy();
    });
  });
  
  function flatten(list) {
    return list.reduce(
      (ac, i) => (Array.isArray(i) ? ac.concat(flatten(i)) : ac.concat(i)),
      []
    );
  }
  
  describe("recursive flatten", () => {
    it("should flatten list", () => {
      expect(flatten([1, 2, 3, [4, 5]])).toEqual([1, 2, 3, 4, 5]);
      expect(flatten([1, [2, [3, 4], [[5]]]])).toEqual([1, 2, 3, 4, 5]);
      expect(flatten([[1], [2], [3]])).toEqual([1, 2, 3]);
      expect(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])).toEqual([1, 2, 3]);
    });
  });
  
  function capitalizeFirstIterative(list) {
    return list.map(w => w[0].toUpperCase() + w.slice(1));
  }
  function capitalizeFirst(list) {
    let result = [];
    const capitalizeOne = w => {
      return w[0].toUpperCase() + w.slice(1);
    };
    function capitalizeHelper(list) {
      if (!list.length) return;
      result = result.concat(capitalizeOne(list[0]));
      capitalizeHelper(list.slice(1));
    }
    capitalizeHelper(list);
    return result;
  }
  describe("Capitalize First", () => {
    it("should recursively capitalize words", () => {
      expect(capitalizeFirst(["car", "taco", "banana"])).toEqual([
        "Car",
        "Taco",
        "Banana"
      ]);
    });
  });
  
  function nestedEvenSum(obj) {
    let total = 0;
    for (var key in obj) {
      if (typeof obj[key] === "number" && obj[key] % 2 === 0) total += obj[key];
      if (typeof obj[key] === "object") {
        total += nestedEvenSum(obj[key]);
      }
    }
    return total;
  }
  
  describe("nestedEvenSum", () => {
    it("should return sum of all even obj", () => {
      var obj1 = {
        outer: 2,
        obj: {
          inner: 2,
          otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
          }
        }
      };
  
      var obj2 = {
        a: 2,
        b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
        c: { c: { c: 2 }, cc: "ball", ccc: 5 },
        d: 1,
        e: { e: { e: 2 }, ee: "car" }
      };
  
      expect(nestedEvenSum(obj1)).toEqual(6);
      expect(nestedEvenSum(obj2)).toEqual(10);
    });
  });
  
  function capitalizeWordsIter(list) {
    return list.map(w => w.toUpperCase());
  }
  function capitalizeWords(list) {
    const result = [];
    const helper = words => {
      if (!words.length) return;
      result.push(words[0].toUpperCase());
      helper(words.slice(1));
    };
    helper(list);
    return result;
  }
  
  describe("capitalizeWords", () => {
    it("should recursively capitalize words", () => {
      let words = ["i", "am", "learning", "recursion"];
      expect(capitalizeWords(words)).toEqual([
        "I",
        "AM",
        "LEARNING",
        "RECURSION"
      ]);
    });
  });
  
  function stringifyNumbers(obj) {
    const result = {};
    for (var key in obj) {
      if (typeof obj[key] === "number") {
        result[key] = String(obj[key]);
      } else if (typeof obj[key] === "object") {
        if (Array.isArray(obj[key]) && !obj[key].length) {
          result[key] = [];
        } else {
          result[key] = stringifyNumbers(obj[key]);
        }
      } else {
        result[key] = obj[key];
      }
    }
    return result;
  }
  describe("stringify", () => {
    it("should recursively stringify numbers", () => {
      let obj1 = {
        num: 1,
        test: [],
        data: {
          val: 4,
          info: {
            isRight: true,
            random: 66
          }
        }
      };
      const obj1Mod = stringifyNumbers(obj1);
      let obj2 = {
        num: "1",
        test: [],
        data: {
          val: "4",
          info: {
            isRight: true,
            random: "66"
          }
        }
      };
      expect(obj1Mod).toEqual(obj2);
    });
  });
  
  const collectStrings = obj => {
    const result = [];
    const helper = subobj => {
      for (let key in subobj) {
        if (typeof subobj[key] === "string") {
          result.push(subobj[key]);
        } else {
          helper(subobj[key]);
        }
      }
    };
    helper(obj);
    return result;
  };
  
  describe("collects strings", () => {
    it("should recursively collect strings", () => {
      const obj = {
        stuff: "foo",
        data: {
          val: {
            thing: {
              info: "bar",
              moreInfo: {
                evenMoreInfo: {
                  weMadeIt: "baz"
                }
              }
            }
          }
        }
      };
      expect(collectStrings(obj)).toEqual(["foo", "bar", "baz"]);
    });
  });
  
  
  