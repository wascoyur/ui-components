import s from "./SelectorNumeric.module.css";

export const SelectorNumeric = () => {
  return (
    <div className={s.root}>
      <div className={s.quantityPicker}>
        <label htmlFor="quantity" className={s.label}>
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          max="99"
          defaultValue="1"
          className={s.input}
          required
        />
      </div>
    </div>
  );
};
