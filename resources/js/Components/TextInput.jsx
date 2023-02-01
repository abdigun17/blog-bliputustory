import { forwardRef, useEffect, useRef } from 'react';
import clsx from 'clsx';

export default forwardRef(function TextInput(
    { type = 'text', name, id, value, className, autoComplete, required, isFocused, handleChange },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                id={id}
                value={value}
                
                className={clsx(
                    className,
                    'rounded-lg border border-gray-300 py-2 px-3 transition duration-200 focus:border-blue-300 focus:ring focus:ring-blue-100'
                )}
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
});
