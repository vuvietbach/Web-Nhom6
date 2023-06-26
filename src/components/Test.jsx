import DeleteCartModalButton from "./modal/DeleteCartModal";

export const Test = () => {
  return (
    <div>
      <h1>Test Modal</h1>
      <DeleteCartModalButton user_id={135666} item_id={251421}>
        <button>Xóa sản phẩm</button>
      </DeleteCartModalButton>
    </div>
  );
};