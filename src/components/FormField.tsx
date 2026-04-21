export default function FormField({
  label, type, value, onChange, disabled,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  disabled: boolean;
}) {
  return (
    <div className="form-field flex flex-col gap-2">
      <label className="text-xs font-bold tracking-widest text-gray-500 uppercase">{label}</label>
      <input
        type={type}
        required
        disabled={disabled}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-b border-white/15 pb-2 text-white outline-none focus:border-primary transition-colors"
      />
    </div>
  );
}
