import Item from "./item";

const List = ({ listData, deleteData, submittingStatus }) => {
  console.log("listData: ", listData);
  return (
    <div className="list">
      {listData.map((item) => {
        const { id, note, date, time } = item;
        return (
          <Item key={id} id = {id} note={note} date={date} time={time} deleteData={deleteData} submittingStatus={submittingStatus}/>
        );
      })}
    </div>
  );
};

export default List;
