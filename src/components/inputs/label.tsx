interface IProps {
  id?: string;
  required?: Boolean;
  label: any;
}

export function Label({ id, label, required = false }: IProps) {
  return (
    <label
      htmlFor={id}
      className="mb-2 block text-sm uppercase font-medium font-textGrey flex flex-row items-center gap-2"
    >
      {required && <div className="rounded-full -ml-1 bg-orangeRed w-2 h-2" />}
      <span>{label}</span>
    </label>
  );
}
