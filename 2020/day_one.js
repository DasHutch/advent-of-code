/*
--- Day 1: Report Repair ---

After saving Christmas five years in a row, you've decided to take a vacation at a nice resort on a tropical island. Surely, Christmas will go on without you.

The tropical island has its own currency and is entirely cash-only. The gold coins used there have a little picture of a starfish; the locals just call them stars. None of the currency exchanges seem to have heard of them, but somehow, you'll need to find fifty of these coins by the time you arrive so you can pay the deposit on your room.

To save your vacation, you need to get all fifty stars by December 25th.

Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

Before you leave, the Elves in accounting just need you to fix your expense report (your puzzle input); apparently, something isn't quite adding up.

Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.
*/

// Goal: Given an array of numbers find the pair whose sum is 2020 (target) & return their product
// Assumptions: only a single pair will exist in the array whose sum will equal the target

const EXAMPLE_INPUT = [1721, 979, 366, 299, 675, 1456];
const input = [
  1531,
  1959,
  1344,
  1508,
  1275,
  1729,
  1904,
  1740,
  1977,
  1992,
  1821,
  1647,
  1404,
  1893,
  1576,
  1509,
  1995,
  1637,
  1816,
  1884,
  1608,
  1943,
  1825,
  1902,
  1227,
  1214,
  1675,
  1650,
  1752,
  1818,
  862,
  2006,
  227,
  1504,
  1724,
  1961,
  1758,
  1803,
  1991,
  1126,
  1909,
  1643,
  1980,
  1889,
  811,
  1699,
  1654,
  1734,
  1770,
  1754,
  1828,
  1811,
  1997,
  1767,
  1854,
  1653,
  1800,
  1762,
  1962,
  1797,
  877,
  1660,
  1895,
  1939,
  1679,
  1496,
  1606,
  1262,
  1727,
  2005,
  1796,
  1595,
  1846,
  1822,
  1974,
  1829,
  1347,
  1341,
  1875,
  1726,
  1963,
  1659,
  337,
  1826,
  1777,
  1523,
  1979,
  1805,
  1987,
  2009,
  1993,
  374,
  1546,
  1706,
  1748,
  1743,
  1725,
  281,
  1317,
  1839,
  1683,
  1794,
  1898,
  1824,
  1960,
  1292,
  1876,
  1760,
  1956,
  1701,
  1565,
  1680,
  1932,
  1632,
  1494,
  1630,
  1838,
  1863,
  1328,
  1490,
  1751,
  1707,
  1567,
  1917,
  1318,
  1861,
  519,
  1716,
  1891,
  1636,
  1684,
  1200,
  1933,
  1911,
  1809,
  1967,
  1731,
  1921,
  1827,
  1663,
  1720,
  1976,
  1236,
  1986,
  1942,
  1656,
  1733,
  1541,
  1640,
  1518,
  1897,
  1676,
  1307,
  1978,
  1998,
  1674,
  1817,
  1845,
  1658,
  1639,
  1842,
  1929,
  1972,
  2010,
  1951,
  858,
  1928,
  1562,
  1787,
  1916,
  1561,
  1694,
  1944,
  1922,
  1882,
  1691,
  589,
  1940,
  1624,
  1570,
  1557,
  1791,
  1492,
  1919,
  1615,
  1571,
  1657,
  1984,
  1521,
  1766,
  1790,
  1782,
  1874,
  1198,
  1764,
  1278,
  1688,
  1905,
  1786,
  1281,
];
const target = 2020;

function find (input, target, numOfAddends = 2) {
    if (input.length < 2) {
        return [];
    }

    input = input
                .sort(sortNumericalAsc)
                .filter((entry) => {
                    return lessThanTarget(entry, target);
                });

    switch (numOfAddends) {
        case 2: {
            return _findPairs(input, target);
        }
        case 3: {
            return _findTriplets(input, target);
        }
        default: {
            return [];
        }
    }
}

function _findPairs (input, target) {
    let hashMap = {};
    let addends = [];

    for (let index = 0; index < input.length; index++) {
        if (hashMap[input[index]]) {
            addends.push(hashMap[input[index]]);
            addends.push(input[index]);
        } else {
            hashMap[target - input[index]] = input[index];
        }
    }

    return addends;
}

function _findTriplets (input, target) {
    let addends = [];

    for (let outerIndex = 0; outerIndex < input.length; outerIndex++) {
        let currentTarget = target - input[outerIndex]; 
        let foundPair = _findPairs(input, currentTarget);
        if (foundPair.length === 2) {
            addends = [...foundPair];
            addends.push(input[outerIndex]);
    
            break;
        }
    }

    return addends;
}

function product (a, b) {
    return a * b;
}

function sum (a, b) {
    return a + b;
}

function sortNumericalAsc (a, b) {
    return a - b;
}

function lessThanTarget (a, target) {
    return a < target;
}

// day one: part 1
const dayOnePartOneFound = find(input, target);
const dayOnePartOneResult = dayOnePartOneFound.reduce(product);
console.log('Day One - Part 1:', dayOnePartOneResult);

// day one: part 2
const dayOnePartTwoFound = find(input, target, 3);
const dayOnePartTwoResult = dayOnePartTwoFound.reduce(product);
console.log('Day One - Part 1:', dayOnePartTwoResult);
