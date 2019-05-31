const reverse1 = str => {
  return str
    .split("")
    .reverse()
    .join("");
};
const reverse2 = str => {
  const reversed = str.split("");
  for (let i = 0; i < reversed.length / 2; i++) {
    [reversed[reversed.length - 1 - i], reversed[i]] = [
      reversed[i],
      reversed[reversed.length - 1 - i]
    ];
  }
  return reversed.join("");
};
const reverse3 = str => {
  return str.split("").reduce((ac, val) => val + ac);
};
describe("String Reversal", () => {
  it("Should reverse string", () => {
    expect(reverse3("Hello World!")).toEqual("!dlroW olleH");
    expect(reverse3("abc")).toEqual("cba");
    expect(reverse3("abcd")).toEqual("dcba");
  });
});

const isPalindrome1 = str => {
  const normalized = str.toLowerCase().replace(/[^a-z]/g, "");
  return reverse3(normalized) === normalized;
};
const isPalindrome = str => {
  const normalized = str.toLowerCase().replace(/[^a-z]/g, "");
  return normalized
    .split("")
    .every((s, i) => s === normalized[normalized.length - 1 - i]);
};

describe("Palindrome", () => {
  it("Should return true", () => {
    expect(
      isPalindrome("Cigar? Toss it in a can. It is so tragic")
    ).toBeTruthy();
  });
  it("Should return false", () => {
    expect(isPalindrome("sit ad est love")).toBeFalsy();
  });
});

const reverse = int => {
  return (
    Math.sign(int) *
    parseInt(
      int
        .toString()
        .split("")
        .reverse()
        .join(""),
      10
    )
  );
};
describe("Integer Reversal", () => {
  it("Should reverse integer", () => {
    expect(reverse(1234)).toEqual(4321);
    expect(reverse(-1200)).toEqual(-21);
  });
});

const max = str => {
  let biggest = str[0];
  str.split("").reduce((ac, val) => {
    const current = ac.get(val) + 1 || 1;
    ac.set(val, current);
    if (current > ac.get(biggest)) {
      biggest = val;
    }
    return ac;
  }, new Map());
  return biggest;
};
describe("Max Character", () => {
  it("Should return max character", () => {
    expect(max("Hello World!")).toEqual("l");
    expect(max("")).toEqual(undefined);
  });
});

const anagrams = (str1, str2) => {
  const counter = str => {
    return str.split("").reduce((acc, val) => {
      acc.set(val, acc.get(val) + 1 || 1);
      return acc;
    }, new Map());
  };
  const count1 = counter(str1);
  const count2 = counter(str2);

  return (
    [...count2.keys()].length === [...count1.keys()].length &&
    [...count1.keys()].every(k => count1.get(k) === count2.get(k))
  );
};

var isAnagram = function(s, t) {
  const counter = c => {
    return c.split("").reduce((ac, val) => {
      ac.set(val, ac.get(val) + 1 || 1);
      return ac;
    }, new Map());
  };
  const countS = counter(s);
  const countT = counter(t);

  return (
    [...countS.keys()].length === [...countT.keys()].length &&
    [...countS.keys()].every(s => countS.get(s) === countT.get(s))
  );
};

const sortedAnagrams = (str1, str2) => {
  return (
    str1
      .split("")
      .sort()
      .join("") ===
    str2
      .split("")
      .sort()
      .join("")
  );
};
describe("Anagrams", () => {
  it("Should implement anagrams", () => {
    expect(anagrams("hello world", "world hello")).toBeTruthy();
    expect(anagrams("hellow world", "hello there")).toBeFalsy();
    expect(anagrams("hellow world", "hello there!")).toBeFalsy();
    expect(sortedAnagrams("hello world", "world hello")).toBeTruthy();
    expect(isAnagram("hello world", "world hello")).toBeTruthy();
    expect(isAnagram("a", "b")).toBeFalsy();
    expect(isAnagram("aa", "a")).toBeFalsy();
  });
});

"hello world".split("").sort();

const vowels = str => {
  return str.split("").reduce((ac, val) => {
    if ("aeiou".includes(val)) {
      ac++;
    }
    return ac;
  }, 0);
};
describe("Vowels", () => {
  it("Should count vowels", () => {
    expect(vowels("hello world")).toEqual(3);
  });
});

var reverseVowels = function(s) {
  const isVowel = c => "aeiouAEIOU".includes(c);
  const result = [...Array(s.length)];
  if (s.length < 2) {
    return s;
  }
  let i = -1;
  let j = s.length - 1;
  while (i < j) {
    i++;
    if (isVowel(s[i])) {
      while (j > i && !isVowel(s[j])) {
        j--;
      }
      if (j > i && isVowel(s[j])) {
        result[i] = s[j];
        result[j] = s[i];
        j--;
      } else {
        result[i] = s[j];
      }
    } else {
      result[i] = s[i];
    }
  }
  for (let n = i; n < s.length; n++) {
    if (result[n] === undefined) {
      result[n] = s[n];
    }
  }
  return result.join("");
};
it("should reverse vowels", () => {
  expect(reverseVowels("hello")).toEqual("holle");
  expect(reverseVowels("leetcode")).toEqual("leotcede");
  expect(reverseVowels("a.")).toEqual("a.");
  expect(reverseVowels("aA")).toEqual("Aa");
});

const chunk = (list, count) => {
  const output = [];
  let current = [];
  list.forEach(i => {
    if (current.length < count) {
      current.push(i);
    } else {
      output.push(current);
      current = [i];
    }
  });
  output.push(current);
  return output;
};

const chunkSlice = (list, count) => {
  const output = [];
  for (let i = 0; i < list.length; i += count) {
    output.push(list.slice(i, i + count));
  }
  return output;
};
describe("Array Chunking", () => {
  it("Should implement array chunking", () => {
    expect(chunkSlice([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
    expect(chunkSlice([1, 2, 3, 4], 3)).toEqual([[1, 2, 3], [4]]);
    expect(chunkSlice([1, 2, 3, 4], 5)).toEqual([[1, 2, 3, 4]]);
    expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
    expect(chunk([1, 2, 3, 4], 3)).toEqual([[1, 2, 3], [4]]);
    expect(chunk([1, 2, 3, 4], 5)).toEqual([[1, 2, 3, 4]]);
  });
});

const reverseArray = list => {
  for (let i = 0; i < list.length / 2; i++) {
    [list[i], list[list.length - 1 - i]] = [list[list.length - 1 - i], list[i]];
  }
  return list;
};
describe("Reverse Arrays", () => {
  it("Should reverse arrays", () => {
    expect(reverseArray([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
    expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
    expect(reverseArray([])).toEqual([]);
  });
});

const reverseWords = str => {
  return str
    .split(" ")
    .map(w =>
      w
        .split("")
        .reverse()
        .join("")
    )
    .join(" ");
};
describe("Reverse Words", () => {
  it("Should reverse words", () => {
    expect(reverseWords("I love JavaScript!")).toEqual("I evol !tpircSavaJ");
  });
});

const capitalize = phrase => {
  return phrase
    .split(" ")
    .map(w => w[0].toUpperCase() + w.slice(1, w.length))
    .join(" ");
};
describe("Capitalization", () => {
  it("Should capitalize phrase", () => {
    expect(capitalize("hello world")).toEqual("Hello World");
  });
});

const caesarCipher = (phrase, num) => {
  const ord = c => c.charCodeAt(0);
  const chr = n => String.fromCharCode(n);

  const firstPos = ord("a");
  const lastPos = ord("z");

  return phrase
    .split("")
    .map(c => {
      const o = ord(c);
      if (o + num > lastPos) {
        return chr(o + num - lastPos + firstPos - 1);
      }
      if (o + num < firstPos) {
        console.log(lastPos);
        console.log(lastPos - firstPos - o + num + 1);
        return chr(lastPos - firstPos - o + num + 1);
      }
      return chr(o + num);
    })
    .join("");
};
describe("Caesar Cipher", () => {
  xit("Should shift to the right", () => {
    expect(caesarCipher("hello", 1)).toEqual("ifmmp");
    expect(caesarCipher("abc", 2)).toEqual("cde");
    expect(caesarCipher("xyz", 1)).toEqual("yza");
    expect(caesarCipher("xyz", 2)).toEqual("zab");
  });
  xit("Should shift to the left", () => {
    expect(caesarCipher("hello", -1)).toEqual("gdkkn");
    expect(caesarCipher("abc", -1)).toEqual("zab");
    expect(caesarCipher("abcde", -3)).toEqual("tuvwx");
  });
  //   it("Should shift to the right", () => {
  //    expect(caesarCipher("I love JavaScript!", 100)).toEqual("E hkra FwrwOynelp!");
  //   });
  //  it("Should shift to the left", () => {
  //     expect(caesarCipher("I love JavaScript!", -100)).toEqual("M pszi NezeWgvmtx!");
  //   });
});

const ransomNote = (str, magazine) => {
  const counter = s => {
    return s
      .split("")
      .reduce((ac, val) => ac.set(val, ac.get(val) + 1 || 1), new Map());
  };
  const cnt1 = counter(str);
  const cnt2 = counter(magazine);
  return [...cnt1.keys()].every(
    key => cnt2.has(key) && cnt1.get(key) <= cnt2.get(key)
  );
};
const magazine =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
describe("Ransom Note", () => {
  //  it("Should return true", () => {
  //   expect(ransomNote("sit ad est sint", magazine)).toBeTruthy();
  //  });
  it("Should return false", () => {
    expect(ransomNote("LLLsit ad est love", magazine)).toBeFalsy();
  });
  // it("Should return true", () => {
  //   expect(ransomNote("sit ad est sint in in", magazine)).toBeTruthy();
  //  });
  // it("Should return false", () => {
  //   expect(ransomNote("sit ad est sint in in in in", magazine)).toBeFalsy();
  //  });
});

const twoSum = (list, sum) => {
  const dict = new Map();
  return list.reduce((ac, val) => {
    const prev = dict.get(val);
    if (prev !== undefined) {
      ac.push([val, prev]);
    } else {
      dict.set(sum - val, val);
    }
    return ac;
  }, []);
};
describe("Two Sum", () => {
  it("Should implement two sum", () => {
    expect(twoSum([1, 2, 2, 3, 4], 4)).toEqual([[2, 2], [3, 1]]);
  });
});

const maxProfit = list => {
  let curMin = list[0];
  let curMax = list[1];
  for (let i = 2; i < list.length; i++) {
    if (list[i] > curMax) {
      if (curMax < curMin) {
        curMin = curMax;
      }
      curMax = list[i];
    }
  }
  return [curMin, curMax];
};
describe("Max Profit", () => {
  it("Should return minimum buy price and maximum sell price", () => {
    expect(maxProfit([1, 2, 3, 4, 5])).toEqual([1, 5]);
    expect(maxProfit([2, 1, 5, 3, 4])).toEqual([1, 5]);
    expect(maxProfit([2, 10, 1, 3])).toEqual([2, 10]);
    expect(maxProfit([2, 1, 2, 11])).toEqual([1, 11]);
  });
});

const same = (l1, l2) => {
  const counter = l =>
    l.reduce((ac, val) => ac.set(val, ac.get(val) + 1 || 1), new Map());
  const [c1, c2] = [counter(l1), counter(l2)];
  return (
    c1.size === c2.size &&
    [...c1.keys()].every(c => c2.get(c ** 2) === c1.get(c))
  );
};
describe("Same", () => {
  it("should compare two arrays", () => {
    expect(same([1, 2, 3], [4, 1, 9])).toBeTruthy();
    expect(same([1, 2, 3], [1, 9])).toBeFalsy();
  });
});

function validAnagrams(s1, s2) {
  const counter = s =>
    s
      .split("")
      .reduce((ac, val) => ac.set(val, ac.get(val) + 1 || 1), new Map());
  const [c1, c2] = [counter(s1), counter(s2)];
  return (
    c1.size === c2.size &&
    [...c1.keys()].every(key => c1.get(key) === c2.get(key))
  );
}
describe("Valid anagram", () => {
  it("should validate anagrams", () => {
    expect(validAnagrams("", "")).toBeTruthy();
    expect(validAnagrams("aaz", "zza")).toBeFalsy();
    expect(validAnagrams("timetwist", "twisttime")).toBeTruthy();
    expect(validAnagrams("hello world", "world hello")).toBeTruthy();
    expect(validAnagrams("hellow world", "hello there")).toBeFalsy();
    expect(validAnagrams("hellow world", "hello there!")).toBeFalsy();
  });
});

function anagramConstantSpace(str1, str2) {
  const arrSum = arr => arr.reduce((a, b) => a + b, 0);
  return (
    arrSum(str1.split("").map((n, index) => str1.charCodeAt(index))) ===
    arrSum(str2.split("").map((n, index) => str2.charCodeAt(index)))
  );
}

const sumZero = list => {
  const dict = list.reduce((ac, val) => {
    if (val > 0 && ac.has(-1 * val)) {
      ac.set(-1 * val, val);
    } else {
      ac.set(val, undefined);
    }
    return ac;
  }, new Map());
  const validKeys = [...dict.keys()].filter(key => dict.get(key) !== undefined);
  if (!validKeys.length) {
    return undefined;
  }
  const smallest = Math.min(...validKeys);
  return [smallest, -1 * smallest];
};

const sumZeroB = list => {
  let [left, right] = [0, list.length - 1];
  while (left < right) {
    let total = list[left] + list[right];
    if (total === 0) {
      return [list[left], list[right]];
    }
    if (total > 0) {
      right--;
    } else {
      left++;
    }
  }
  return undefined;
};
it("should sumzero", () => {
  expect(sumZero([-3, -2, -1, 0, 1, 2, 3])).toEqual([-3, 3]);
  expect(sumZero([-2, -1, 0, 3])).toEqual(undefined);
  expect(sumZeroB([-3, -2, -1, 0, 1, 2, 3])).toEqual([-3, 3]);
  expect(sumZeroB([-2, -1, 0, 3])).toEqual(undefined);
});

const countUniqueValues = list => {
  if (!list.length) return 0;
  let num = 1;
  let prev = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i] !== prev) num++;
    prev = list[i];
  }
  return num;
};
it("should count uniques", () => {
  expect(countUniqueValues([1, 1, 1, 2])).toEqual(2);
  expect(countUniqueValues([1, 1, 1, 2, 2, 2, 3])).toEqual(3);
  expect(countUniqueValues([])).toEqual(0);
});

const sameFrequency = (a, b) => {
  const counter = n => {
    return n
      .toString()
      .split("")
      .reduce((ac, val) => ac.set(val, ac.get(val) + 1 || 1), new Map());
  };
  const cnt1 = counter(a);
  const cnt2 = counter(b);
  return (
    cnt1.size === cnt2.size &&
    [...cnt1.keys()].every(k => cnt1.get(k) === cnt2.get(k))
  );
};
it("should compare frequencies", () => {
  expect(sameFrequency(182, 281)).toBeTruthy();
  expect(sameFrequency(182182, 281281)).toBeTruthy();
  expect(sameFrequency(4, 5)).toBeFalsy();
  expect(sameFrequency(4, 40)).toBeFalsy();
  expect(sameFrequency(0, 0)).toBeTruthy();
});

function areThereDuplicates() {
  return new Set([...arguments]).size < [...arguments].length;
}
it("should detect duplicate arguments", () => {
  expect(areThereDuplicates(1, 2, 3)).toBeFalsy();
  expect(areThereDuplicates(3, 4, 4, 5)).toBeTruthy();
  expect(areThereDuplicates("a", "b", "c", "c")).toBeTruthy();
});

const averagePair = (list, target) => {
  let [left, right] = [0, list.length - 1];
  while (left < right) {
    const avg = (list[left] + list[right]) / 2;
    if (avg === target) {
      return true;
    } else if (avg > target) {
      right--;
    } else {
      left++;
    }
  }
  return false;
};
it("should detect if there is a pair for which avg == target", () => {
  expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toBeTruthy();
  expect(averagePair([1, 2, 3], 2.5)).toBeTruthy();
  expect(averagePair([3], 4)).toBeFalsy();
});

const isSubsequence = (s1, s2) => {
  if (s2.length < s1.length) return false;
  let [i, j] = [0, 0];
  while (i < s1.length) {
    if (s1[i] === s2[j]) i++;
    j++;
    if (j >= s2.length && i === s1.length - 1) return false;
  }
  return true;
};
it("should detect subsequence", () => {
  expect(isSubsequence("hello", "hello world")).toBeTruthy();
  expect(isSubsequence("sing", "sting")).toBeTruthy();
  expect(isSubsequence("abc", "abracadabra")).toBeTruthy();
  expect(isSubsequence("abc", "acb")).toBeFalsy();
});

const maxSubarraySum = (list, num) => {
  const arrSum = arr => arr.reduce((a, b) => a + b, 0);
  if (list.length < num) return undefined;
  const temp = list.slice(0, num);
  let biggest = arrSum(temp);
  let current = biggest;
  for (let i = 1; i <= list.length - num; i++) {
    current += list[i + num - 1] - list[i - 1];
    biggest = Math.max(biggest, current);
  }
  return biggest;
};
it("should find max sum subarray with length equal to target", () => {
  expect(maxSubarraySum([100, 200, 300, 400], 2)).toEqual(700);
  expect(maxSubarraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)).toEqual(19);
  expect(maxSubarraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)).toEqual(27);
  expect(maxSubarraySum([2, 3], 3)).toEqual(undefined);
});

