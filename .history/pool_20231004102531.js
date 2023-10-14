const pool = {
    totalBets: 1000,
    participants: [
        {
            userId:1,
            isPositionUp:true,
            amount: 200
        },
        {
            userId:2,
            isPositionUp:false,
            amount: 100
        },
        {
            userId:3,
            isPositionUp:false,
            amount: 500
        },
        {
            userId:4,
            isPositionUp:true,
            amount: 50
        },
        {
            userId:5,
            isPositionUp:true,
            amount: 150
        }
    ]
};


async function settlePool(settlingTimePrice, endTimePrice) {
    settlingTimePrice = 5;
    endTimePrice = 10;
    //did the price went up or down, if bull is true, that means the price went up
    const isBull = endTimePrice > settlingTimePrice;
    console.log(`Winning side is ${isBull?"Bull":"Bear"}`);

    const winners =  pool.participants.filter(user => {
        if(user.isPositionUp == isBull){
            return user;
        }
    })

    console.log("winning players", winners)
}