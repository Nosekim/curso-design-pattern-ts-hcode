import './util/module-alias';

import DebitCard from './DebitCard';
import CreditCard from './CreditCard';
import { config } from '@src/configs';
import NubankRewards from './NubankRewards';

console.log(config);

const creditCard = new CreditCard();
const debitCard = new DebitCard();
const rewardCard = new NubankRewards();

creditCard.validate();
creditCard.collectPayment();

debitCard.validate();
debitCard.collectPayment();

rewardCard.validate();
rewardCard.collectPayment();
