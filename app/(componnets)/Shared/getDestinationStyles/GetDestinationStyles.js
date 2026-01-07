// src/utils/styleHelper.js (veya uygun gördüğün yol)

export const getDestinationStyles = (styleName) => {

    const styles = {
        standart: {
            mainGrid: "grid-cols-4 grid-rows-2 lg:grid-cols-2 lg:grid-rows-none md:grid-cols-1 grid_destination",
            promoCard: "row-span-2 col-start-4 row-start-4 lg:h-96 lg:row-auto lg:col-span-1",
            itemCard: "grid_destination_child lg:h-96 lg:row-auto lg:col-auto md:h-56 rounded-3xl",
            imageHeight: "h-full rounded-3xl",
            linearImg: "",
            spanArrow: "top-2 right-2"
        },
        style1: {
            mainGrid: "grid-cols-12",
            promoCard: "col-span-3",
            itemCard: "col-span-3",
            imageHeight: "h-[500px] rounded-3xl",
            linearImg: "",
            spanArrow: "top-2 right-2"
        },
        style2: {
            mainGrid: "grid-cols-12",
            promoCard: "hidden",
            itemCard: "col-span-2 rounded-[150px]",
            imageHeight: "h-[400px] rounded-[80px]",
            linearImg: "rounded-[80px]",
            spanArrow: "top-6 right-6"
        }
    };

    return styles[styleName] || styles['standart'];
};