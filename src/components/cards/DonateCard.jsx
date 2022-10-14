function DonateCard(props) {
  return (
    <div className="control">
      <input type={props.type} placeHolder={props.text} />
      <span className={props.icon}></span>
    </div>
  );
}

export default DonateCard;
