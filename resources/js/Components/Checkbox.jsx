import clsx from 'clsx';

export default function Checkbox({ name, value, handleChange, className, label, ...props  }) {
    return (
        <label className={clsx('flex items-center gap-x-2.5', className)}>
        <input
            {...props}
            type="checkbox"
            name={name}
            value={value}
            className="rounded border-gray-300 text-blue-600 shadow-sm focus:ring-0 focus:ring-offset-0"
            onChange={(e) => handleChange(e)}
        />
        <span className="select-none text-gray-600">{label}</span>
        </label>
    );
}
