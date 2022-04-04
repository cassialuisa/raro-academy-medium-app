import React from "react";

export type DeleteButtonProps = {

    onClick: () => void,
    id: string | undefined
};

export const DeleteButton: React.FC<DeleteButtonProps> = ({

    children,
    onClick,
    id
}) => {
    if (id) {
        return (
            <button

                className={`
                w-full mt-6 tracking-widest
                border-b-red-600 bg-red-500 py-3 text-white font-bold
                hover:bg-red-400 active:translate-y-[0.125rem] active:border-b-red-400
              `}
                onClick={onClick}
            >
                {children}
            </button>
        );

    } else {
        return (
            <></>
        )
    }

};