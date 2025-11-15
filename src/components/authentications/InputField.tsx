"use client";

interface InputFieldProps {
    label: string;
    type: string;
    value: string;
    placeholder?: string;
    onChange: (value: string) => void;
}

export function InputField({
    label,
    type,
    value,
    placeholder,
    onChange,
}: InputFieldProps) {
    return (
        <div className="text-left">
            <label className="block text-sm font-medium text-gray-700 mb-1">
                {label}
            </label>

            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
        </div>
    );
}
