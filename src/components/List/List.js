import styled from "styled-components";
import { useSelector } from "react-redux";
import Item from "../Item/Item";

const StyledArticles = styled.ul`
  position: relative;
  padding-bottom: 20px;

  &:after {
    content: "";
    border-bottom: 1px solid #ccc;
    position: absolute;
    bottom: 0;
    left: 15px;
    right: 15px;
  }
`;

const StyledTotal = styled.span`
  font-size: 20px;
`;

const List = () => {
  const groceryItems = useSelector((state) => state.grocery);

  return (
    <>
      <StyledArticles className="list-unstyled col-12">
        {groceryItems.map((groceryItem) => {
          return <Item groceryItem={groceryItem} key={groceryItem.id} />;
        })}
      </StyledArticles>
      <StyledTotal className="col-12 text-end">1.95€</StyledTotal>
    </>
  );
};

export default List;
