function checkCashRegister(price, cash, cid) {
  let change = [];
  let status = "";
  let values = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100].map((val) => val * 100);
  cash = cash * 100;
  price = price * 100;
  let due = cash - price;
  let cidTotal = cid.reduce((prev, curr) => prev + curr[1] * 100, 0);
  let pendingChange = [...cid].map((elem) => [elem[0], Math.round(elem[1] * 100)]);

  for (let i = values.length - 1; i >= 0; i--) {
    let changeUsed = 0;
    while (due >= values[i] && due >= 0 && pendingChange[i][1] > 0) {
      due -= values[i];
      pendingChange[i][1] -= values[i];
      changeUsed += values[i];
      cidTotal -= values[i];
    }   
    if (changeUsed > 0) {
      change.push([cid[i][0], changeUsed / 100]);
    }
  }

  if (cidTotal < due || due > 0) {
    status = "INSUFFICIENT_FUNDS";
    change = [];
  } else if (cidTotal == due) {
    status = "CLOSED";
    change = cid;
  } else {
    status = "OPEN";
  }

  return {status, change};
}
