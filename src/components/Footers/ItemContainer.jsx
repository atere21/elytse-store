import Item from "./Item";
import { HELP, RESOURCES, COMPANY} from "./FooterMenu";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 text-[#d4ba28]">
      <Item Links={HELP} title="HELP" />
      <Item Links={RESOURCES} title="RESOURCES" />
      <Item Links={COMPANY} title="COMPANY" />
    </div>
  );
};

export default ItemsContainer;
