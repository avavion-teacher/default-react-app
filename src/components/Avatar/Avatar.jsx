const Avatar = (props) => {
  console.log(props);

  if (props.hidden) {
    return <h1>Картинка скрыта</h1>;
  }

  const onClickHandle = () => {
    console.log("Вы кликнули по картинке");

    alert("Вы увидели уведомление!!!");
  };

  return (
    <img
      width={500}
      height={600}
      src={props.path}
      alt=""
      onClick={onClickHandle}
    />
  );
};

export default Avatar;
