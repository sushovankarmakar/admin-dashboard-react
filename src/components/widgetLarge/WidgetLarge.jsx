import "./widgetLarge.css";

const WidgetLarge = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLargeButton " + type}>{type}</button>;
  };

  const transactions = [
    {
      name: "Susan Caroll",
      img: "https://i.ibb.co/HPdTYfj/user-2.jpg",
      date: "2 Jun 2021",
      amount: "$122.00",
      status: "Approved",
    },
    {
      name: "Jonny Sah",
      img: "https://i.ibb.co/HPdTYfj/user-2.jpg",
      date: "20 Jul 2021",
      amount: "$82.00",
      status: "Declined",
    },
    {
      name: "Jonny Sah",
      img: "https://i.ibb.co/HPdTYfj/user-2.jpg",
      date: "19 Aug 2021",
      amount: "$192.50",
      status: "Pending",
    },
    {
      name: "Rocky Baltimore",
      img: "https://i.ibb.co/HPdTYfj/user-2.jpg",
      date: "16 Sep 2021",
      amount: "$242.10",
      status: "Approved",
    },
  ];

  return (
    <div className="widgetLarge">
      <h3 className="widgetLargeTitle">Latest Transactions</h3>
      <table className="widgetLargeTable">
        <tr className="widgetLargeTr">
          <th className="widgetLargeTh">Customer</th>
          <th className="widgetLargeTh">Date</th>
          <th className="widgetLargeTh">Amount</th>
          <th className="widgetLargeTh">Status</th>
        </tr>
        {transactions.map((transaction, index) => {
          return (
            <tr className="widgetLargeTr">
              <td key={index} className="widgetLargeUser">
                <img src={transaction.img} alt="" className="widgetLargeImg" />
                <span className="widgetLargeUsername">{transaction.name}</span>
              </td>
              <td className="widgetLargeDate">{transaction.date}</td>
              <td className="widgetLargeAmount">{transaction.amount}</td>
              <td className="widgetLargeStatus">
                <Button type={transaction.status} />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default WidgetLarge;
