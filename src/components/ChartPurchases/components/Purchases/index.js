import React from 'react';
import StatStack from './StatStack';
import './styles.scss';

const Purchases = () => (
  <section className="purchases">
    <h4 className="purchTitle">Purchases</h4>
    <p className="purchText"> lorem ipsum dolor</p>
    <div className="purchaseStats">
      <StatStack title="status" num="362"></StatStack>
      <StatStack title="New users" num="187"></StatStack>
      <StatStack title="Chats" num="524"></StatStack>
      <StatStack title="Feedbacks" num="509"></StatStack>
    </div>
  </section>
);

export default Purchases;