function product(a, arr) {
  if (arr.length === 0) return a;
  let b = arr[0],
    res = [];
  for (let x of a) {
    for (let y of b) {
      res.push(x.concat(y));
    }
  }
  return product(res, arr.slice(1));
}

function query() {
  const state = { where: [], having: [] };
  const query = {
    select(fn) {
      if (state.select) throw new Error('Duplicate SELECT');
      state.select = fn || ((x) => x);
      return query;
    },
    from(a, ...arr) {
      if (state.from) throw new Error('Duplicate FROM');
      state.from = () =>
        arr.length === 0
          ? a
          : product(
              a.map((x) => [x]),
              arr
            );
      return query;
    },
    where(...fns) {
      state.where.push((x) => fns.some((fn) => fn(x)));
      return query;
    },
    orderBy(fn) {
      if (state.orderBy) throw new Error('Duplicate ORDERBY');
      state.orderBy = fn;
      return query;
    },
    groupBy(...fns) {
      if (state.groupBy) throw new Error('Duplicate GROUPBY');
      state.groupBy = (a) =>
        a.reduce((res, row) => {
          let a = res,
            b;
          for (let fn of fns) {
            const group = fn(row);
            const i = a.findIndex((x) => x[0] === group);
            if (i < 0) a.push([group, (a = [])]);
            else a = a[i][1];
          }
          a.push(row);
          return res;
        }, []);
      return query;
    },
    having(...fns) {
      state.having.push((x) => fns.some((fn) => fn(x)));
      return query;
    },
    execute() {
      let res = state.from ? state.from() : [];
      res = res.filter((x) => state.where.every((fn) => fn(x)));
      if (state.groupBy) res = state.groupBy(res);
      res = res.filter((x) => state.having.every((fn) => fn(x)));
      if (state.orderBy) res.sort(state.orderBy);
      return state.select ? res.map(state.select) : res;
    },
  };
  return query;
}
function query() {
  let queryData = {
    conditions: [],
    postConditions: [],
  };

  function customFindIndex(callbackFunction) {
    let index;
    for (index = 0; index < this.length; index++) {
      if (callbackFunction(this[index])) {
        return index;
      }
    }
    return -1;
  }

  Array.prototype.customFindIndex = customFindIndex;

  function arrayProduct(firstArray, remainingArray) {
    if (remainingArray.length === 0) {
      return firstArray;
    }
    let secondArray = remainingArray[0];
    let resultArray = [];
    for (let element1 of firstArray) {
      for (let element2 of secondArray) {
        resultArray.push(element1.concat(element2));
      }
    }
    return arrayProduct(resultArray, remainingArray.slice(1));
  }

  let queryObject = {
    select: function (callbackFunction) {
      if (queryData.select) {
        throw new Error('Duplicate SELECT');
      }
      queryData.select = callbackFunction || ((x) => x);
      return queryObject;
    },
    from: function (firstArray, ...remainingArray) {
      if (queryData.from) {
        throw new Error('Duplicate FROM');
      }
      queryData.from = () =>
        remainingArray.length === 0
          ? firstArray
          : arrayProduct(
              firstArray.map((x) => [x]),
              remainingArray
            );
      return queryObject;
    },
    where: function (...functions) {
      queryData.conditions.push((x) =>
        functions.some((callbackFunction) => callbackFunction(x))
      );
      return queryObject;
    },
    orderBy: function (callbackFunction) {
      if (queryData.orderBy) {
        throw new Error('Duplicate ORDERBY');
      }
      queryData.orderBy = callbackFunction;
      return queryObject;
    },
    groupBy: function (...functions) {
      if (queryData.groupBy) {
        throw new Error('Duplicate GROUPBY');
      }
      queryData.groupBy = (firstArray) =>
        firstArray.reduce((resultArray, row) => {
          let a = resultArray;
          for (let callbackFunction of functions) {
            let group = callbackFunction(row);
            let i = a.customFindIndex((x) => x[0] === group);
            if (i < 0) {
              a.push([group, (a = [])]);
            } else {
              a = a[i][1];
            }
          }
          a.push(row);
          return resultArray;
        }, []);
      return queryObject;
    },
    having: function (...functions) {
      queryData.postConditions.push((x) =>
        functions.some((callbackFunction) => callbackFunction(x))
      );
      return queryObject;
    },
    execute: function () {
      let result = queryData.from ? queryData.from() : [];
      result = result.filter((x) =>
        queryData.conditions.every((callbackFunction) => callbackFunction(x))
      );
      if (queryData.groupBy) {
        result = queryData.groupBy(result);
      }
      result = result.filter((x) =>
        queryData.postConditions.every((callbackFunction) =>
          callbackFunction(x)
        )
      );
      if (queryData.orderBy) {
        result.sort(queryData.orderBy);
      }
      return queryData.select ? result.map(queryData.select) : result;
    },
  };
  return queryObject;
}
