const Project = (data) => {
  return (
    <div>
      <h3>
        <a href={"https:/" + data.link}>{data.name}</a>
      </h3>
    </div>
  );
};
export default Project;
