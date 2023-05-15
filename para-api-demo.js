require('dotenv').config();

const {constructSimpleSDK, SwapSide} = require('@paraswap/sdk')
const axios = require('axios')

const paraSwapMin = constructSimpleSDK({chainId: 1, axios});


const token1 = process.env.usdc    //USDC decimal 6
const token2 = process.env.hex     //HEX decimal 8
const srcAmount = '1000000'
const includeDEXS = '[Uniswap V3, Uniswap V2, Kyber, ParaSwapPool, ParaSwapPool2, ParaSwapPool3, ParaSwapPool4, ParaSwapPool5, ParaSwapPool6, Curve3, CurveV2, Curve]'


async function paraPrice(){

    const priceRoute = await paraSwapMin.swap.getRate({
      srcToken: token1,
      srcDecimals: 6,
      destToken: token2,
      destDecimals: 8,
      amount: srcAmount,
      side: SwapSide.SELL,
      includeDEXS
    })


    console.log(JSON.stringify(priceRoute, null, 3))
}

paraPrice()

