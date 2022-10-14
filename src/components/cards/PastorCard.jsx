function PastorCard(props) {
  return (
    <div className="col-md-2 col-sm-3 col-xs-6">
      <div className="pastor">
        <img src={props.img} alt="" className="pastor-image" />
        <h3 className="pastor-name">{props.pastorName}</h3>
        <small className="date">Joined: {props.pastorDate}</small>
      </div>
    </div>
  );
}

export default PastorCard;
