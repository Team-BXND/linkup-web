interface ToolbarProps {
  id: string;
}

const Toolbar = ({ id }: ToolbarProps) => {
  return (
    <div id={id}>
      <button type="button" className="ql-bold" />
      <button type="button" className="ql-italic" />
      <button type="button" className="ql-strike" />
      <button type="button" className="ql-link" />
      <button type="button" className="ql-image" />
    </div>
  );
};

export default Toolbar;
