'use client';
interface MenuItemPorps {
    onClick: () => void;
    label: string
}
const MenuItems: React.FC<MenuItemPorps> = ({
    onClick, label
}) => {

    return (
        <div
            onClick={onClick}
            className="px-4 py-3 hover:bg-neutral-100 transition font-semibold">
            {label}
        </div>

    );
}

export default MenuItems;