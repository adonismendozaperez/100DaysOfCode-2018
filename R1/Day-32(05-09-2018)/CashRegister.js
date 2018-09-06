function checkCashRegister(price, cash, cid) {
    let bank = 0;
    let till = [];
    cid.forEach(el => till.unshift(el));
    let money_Table = [
       {
         ONEHUNDRED: 100,
         amount: till[0][1]
       },
       {
         TWENTY: 20,
         amount: till[1][1]
       },
       {
         TEN: 10,
         amount: till[2][1]
       },
       {
         FIVE: 5,
         amount: till[3][1]
       },
       {
         ONE: 1,
         amount: till[4][1]
       },
       {
         QUARTER: 0.25,
         amount: till[5][1]
       },
       {
         DIME: 0.1,
         amount: till[6][1]
       },
       {
         NICKEL: 0.05,
         amount: till[7][1]
       },
       {
         PENNY: 0.01,
         amount: till[8][1]
       }
    ];
   
    cid.forEach(el => {
        bank = (bank * 10 + el[1] * 10) / 10;
    });
   
    let status_Code = [
        { status: "INSUFFICIENT_FUNDS", change: [] },
        { status: "CLOSED", change: cid },
        { status: "OPEN" }
    ];
   
    let change = (cash * 10 - price * 10) / 10;
    if (change > bank) return status_Code[0];
    if (change === bank) return status_Code[1];
   
    if (change < bank) {
        let changeToGive = [];

        for (let i = 0; i < money_Table.length; i++) {
            let denom = Object.values(money_Table[i])[0];
            let val = 0;

            if (denom < change) {
            while (till[i][1] > 0 && change >= denom) {
                change -= denom;
                till[i][1] -= denom;
                change = Math.round(change * 100) / 100;

                val += denom;
            }
            
            if (val > 0) changeToGive.push([Object.keys(money_Table[i])[0], val]);
            status_Code[2].change = changeToGive;
            }
        }
        if (change > 0 || changeToGive.length < 1) return status_Code[0];
    }
   
     return status_Code[2];
   }

   
checkCashRegister(19.5, 20, [["PENNY", 1.01],
                             ["NICKEL", 2.05],
                             ["DIME", 3.1],
                             ["QUARTER", 4.25],
                             ["ONE", 90],
                             ["FIVE", 55],
                             ["TEN", 20],
                             ["TWENTY", 60],
                             ["ONE HUNDRED", 100]]);