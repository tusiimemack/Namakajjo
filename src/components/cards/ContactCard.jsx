function ContactCard(props) {
  return (
    <span>
      <small className={props.icon}></small>
      {props.detail}
    </span>
  );
}

export default ContactCard;
