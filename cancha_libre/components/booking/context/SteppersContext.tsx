// import { createContext, useState, ReactNode } from "react";

// type ShiftType = {
//     dateTime: string;
//     reserved: boolean;
//     user_id: number;
//     canchaId: number;
// };

// type CheckoutType = {
   
// };


// type SteppersContextType = {
//   data: {
//     shift: ShiftType;
//     checkout: CheckoutType;
//   };
//   setData: React.Dispatch<React.SetStateAction<typeof defaultValues>>;
//   handlerShift: (data: Partial<ShiftType>) => void;
//   handlerCheckout: (data: CheckoutType) => void;
// };

// interface SteppersProviderProps {
//     children: ReactNode;
// }

// const defaultValues = {
//     shift: {
//         dateTime: "",
//         reserved: true,
//         user_id: 0,
//         canchaId: 0
//     },
//     checkout : {

//     },
// }

// export const SteppersContext = createContext<SteppersContextType | undefined>(undefined);

// export const SteppersProvider: React.FC<SteppersProviderProps> = ({ children }) => {
//     const [data, setData] = useState(defaultValues);

//     const handlerShift = (shiftData: Partial<ShiftType>) => {
//         setData(prevData => ({ ...prevData, shiftData: {...prevData.shift, ...shiftData} }));
//     };

//     const handlerCheckout = (checkoutData: CheckoutType) => {
//         setData(prevData => ({ ...prevData, checkoutData: { ...prevData.checkout, ...checkoutData } }));
//     };


//     return (
//       <SteppersContext.Provider value={{ data, setData, handlerShift, handlerCheckout }}>
//         {children}
//       </SteppersContext.Provider>
//     );
// };

import { createContext, useState, ReactNode } from "react";

type AddressType = {
    address1: string;
    address2: string;
    city: string;
    state: string;
    zipCode: string;
};

type CustomerType = {
    name: string;
    lastname: string;
    email: string;
    address: AddressType;
};

type CardType = {
    number: string;
    cvc: string;
    expDate: string;
    nameOnCard: string;
};

type OrderType = {
    name: string;
    image: string;
    price: number;
};

type CheckoutContextType = {
  data: {
    customer: CustomerType;
    card: CardType;
    order: OrderType;
  };
  setData: React.Dispatch<React.SetStateAction<typeof defaultValues>>;
  handlerCustomer: (data: Partial<CustomerType>) => void;
  handlerAddress: (data: AddressType) => void;
  handlerCard: (data: CardType) => void;
};

interface CheckoutProviderProps {
    children: ReactNode;
}

const defaultValues = {
    customer: {
        name: "",
        lastname: "",
        email: "",
        address: {
            address1: "",
            address2: "",
            city: "",
            state: "",
            zipCode: "",
        }
    },
    card: {
        number: "",
        cvc: "",
        expDate: "",
        nameOnCard: "",
    },
    order: {
        name: "",
        image: "",
        price: 0,
    },
};

export const SteppersContext = createContext<CheckoutContextType | undefined>(undefined);

export const SteppersProvider: React.FC<CheckoutProviderProps> = ({ children }) => {
    const [data, setData] = useState(defaultValues);

    const handlerCustomer = (customerData: Partial<CustomerType>) => {
        setData(prevData => ({ ...prevData, customer: {...prevData.customer, ...customerData} }));
    };

    const handlerAddress = (addressData: AddressType) => {
        setData(prevData => ({ ...prevData, customer: { ...prevData.customer, address: addressData } }));
    };

    const handlerCard = (cardData: CardType) => {
        setData(prevData => ({ ...prevData, card: cardData }));
    };

    return (
      <SteppersContext.Provider value={{ data, setData, handlerCustomer, handlerAddress, handlerCard }}>
        {children}
      </SteppersContext.Provider>
    );
};
