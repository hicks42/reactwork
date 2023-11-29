import { ListItem } from "../ListItem/ListItem";

export function List({ itemsList }) {
  return (
    <div style={{ overflowY: "scroll", height: "40%" }}>
      <table className="table table-hover table-borderless">
        <tbody>
          {itemsList.map((item, i) => {
            return <ListItem key={item.name + i} item={item} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
