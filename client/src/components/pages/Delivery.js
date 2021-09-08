import React from 'react';


export default function Delivery() {
  return (
    <div>
      <h2> Доставка </h2>

      <ul>
        <li> Експрес доставка
          <p> Доставка - 50 грн </p>
          <p> Безкоштовна доставка - від 200 грн </p>
        </li>
        <li> м. Київ
          <p> Доставка - 30 грн </p>
          <p> Безкоштовна доставка - від 200 грн </p>
        </li>
        <li> Передмістя
          <p> Доставка - 100 грн </p>
          <p> Безкоштовна доставка - від 1000 грн </p>
          <p> Мінімальне замовлення - від 800 грн </p>
        </li>

        <p> Доставка продуктів здійснюється щодня. Замовлення, оформлені після 23:00, доставляються наступного дня. </p>
      </ul>
    </div>
  )
}