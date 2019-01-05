
var companyInfo = {
  title1: `Epicurean`,
  title2: `RESTAURANT`,
  phone: '(555) - 555 - 5555',
  location: 'Portland, OR',
}

var specialMenuData = [
  {
    title: 'Super BBQ Grill No Smoke',
    description: 'Fried eggs, steak, baked potato or french fries, side of vegetables',
    price: 25
  },
  {
    title: 'Chicken Fingers',
    description: 'Fried eggs, steak, baked potato or french fries, side of vegetables',
    price: 28
  },
  {
    title: 'Hungry Person Burger',
    description: 'Fried eggs, steak, baked potato or french fries, side of vegetables',
    price: 26
  },
]

var reviewsData = [
  {
    company: 'Food Network',
    author: 'Joey Bologna ',
    authorInfo: '-Winner Of The Hot Dog Competition 2018',
    highlight: '\"Way better than microwave hamburgers! Like, totally and stuff!\"',
    review: 'Lorizzle ipsizzle dolor sit own yo, bizzle adipiscing stuff. Cool tellivizzle velizzle, bizzle volutpizzle, suscipit quis, gravida ass, arcu. Pellentesque eget sizzle. Sed erizzle. izzle boofron dapibizzle yo neck, yall tempizzle nizzle. Maurizzle pellentesque its fo rizzle i saw beyonces tizzles and my pizzle went crizzle turpizzle. Fizzle izzle pot. Dawg bling bling rhoncizzle nisi. In sizzle izzle platea mofo. Shizzle my nizzle crocodizzle dapibizzle. Curabitur mammasay mammasa mamma oo sa ass, pretizzle dawg, fo shizzle izzle, eleifend , nunc. Break it down suscipizzle. Integer yo mamma fo bow wow wow away.'
  },
  {
    company: 'HBO Food',
    author: 'Joey Bologna ',
    authorInfo: '-Winner Of The Hot Dog Competition 2018',
    highlight: '\"Way better than microwave hamburgers! Like, totally and stuff!\"',
    review: 'Lorizzle ipsizzle dolor sit own yo, bizzle adipiscing stuff. Cool tellivizzle velizzle, bizzle volutpizzle, suscipit quis, gravida ass, arcu. Pellentesque eget sizzle. Sed erizzle. izzle boofron dapibizzle yo neck, yall tempizzle nizzle. Maurizzle pellentesque its fo rizzle i saw beyonces tizzles and my pizzle went crizzle turpizzle. Fizzle izzle pot. Dawg bling bling rhoncizzle nisi. In sizzle izzle platea mofo. Shizzle my nizzle crocodizzle dapibizzle. Curabitur mammasay mammasa mamma oo sa ass, pretizzle dawg, fo shizzle izzle, eleifend , nunc. Break it down suscipizzle. Integer yo mamma fo bow wow wow away.'
  },
  {
    company: 'The NY Times',
    author: 'Joey Bologna ',
    authorInfo: '-Winner Of The Hot Dog Competition 2018',
    highlight: '\"Way better than microwave hamburgers! Like, totally and stuff!\"',
    review: 'Lorizzle ipsizzle dolor sit own yo, bizzle adipiscing stuff. Cool tellivizzle velizzle, bizzle volutpizzle, suscipit quis, gravida ass, arcu. Pellentesque eget sizzle. Sed erizzle. izzle boofron dapibizzle yo neck, yall tempizzle nizzle. Maurizzle pellentesque its fo rizzle i saw beyonces tizzles and my pizzle went crizzle turpizzle. Fizzle izzle pot. Dawg bling bling rhoncizzle nisi. In sizzle izzle platea mofo. Shizzle my nizzle crocodizzle dapibizzle. Curabitur mammasay mammasa mamma oo sa ass, pretizzle dawg, fo shizzle izzle, eleifend , nunc. Break it down suscipizzle. Integer yo mamma fo bow wow wow away.'
  },
  {
    company: 'NBC',
    author: 'Joey Bologna ',
    authorInfo: '-Winner Of The Hot Dog Competition 2018',
    highlight: '\"Way better than microwave hamburgers! Like, totally and stuff!\"',
    review: 'Lorizzle ipsizzle dolor sit own yo, bizzle adipiscing stuff. Cool tellivizzle velizzle, bizzle volutpizzle, suscipit quis, gravida ass, arcu. Pellentesque eget sizzle. Sed erizzle. izzle boofron dapibizzle yo neck, yall tempizzle nizzle. Maurizzle pellentesque its fo rizzle i saw beyonces tizzles and my pizzle went crizzle turpizzle. Fizzle izzle pot. Dawg bling bling rhoncizzle nisi. In sizzle izzle platea mofo. Shizzle my nizzle crocodizzle dapibizzle. Curabitur mammasay mammasa mamma oo sa ass, pretizzle dawg, fo shizzle izzle, eleifend , nunc. Break it down suscipizzle. Integer yo mamma fo bow wow wow away.'
  },
]

var randomQuoteData = [
  {
    author: '-Anthony Bourdain',
    quote: ' \"The Cooking Profession, While It\'s A Noble Craft And A Noble Calling, \'Cause You\'re Doing Something Useful - You\'re Feeding People, You\'re Nurturing Them, You\'re Providing Sustenance - It Was Never Pure.\" '
  },
  {
    author: '-Some Dude',
    quote: '\"Me like burger.\"'
  },
  {
    author: '-Some Other Dude',
    quote: '\"Me also like burger.\"'
  }
]

export const globalState = {
  count: 0,
  companyInfo,
  specialMenuData,
  reviewsData,
  randomQuoteData,
  reviewStatus: {
    currentReview: 0,
  }
}
