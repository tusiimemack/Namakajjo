function EventCard(props) {
  return (
    <div className="event">
      <img src={props.img} alt="" className="event-image" />
      <h3 className="event-title">{props.title}</h3>
      <div className="event-meta">
        <span>
          <i class="fa fa-calendar"></i> {props.eDate}
        </span>
        <span className="location">
          <i className="fa fa-map-marker"></i>
          {props.location}
        </span>
      </div>
      <a href="#" className="button">
        Get more information
      </a>
    </div>
  );
}

export default EventCard;
