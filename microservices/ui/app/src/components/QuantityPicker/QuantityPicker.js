import React, {useState} from 'react';
import {IconButton, InputBase} from "@material-ui/core";
import {Add, Remove} from "@material-ui/icons";
import Box from "@material-ui/core/Box";

const QuantityPicker = () => {
    const [quantity, setQuantity] = useState(1);

    const validateNextQuantity = (nextQuantity) => {
        const minQuantity = 1;

        if (nextQuantity >= minQuantity) { setQuantity(nextQuantity) }
    };

    return (
        <Box mx={1} display="flex" flexDirection="row">
            <IconButton href={null} onClick={() => validateNextQuantity(quantity - 1)}>
                <Remove />
            </IconButton>

            <Box display="flex" alignItems="center" flexGrow={1}>
                <InputBase
                    type="number"
                    value={quantity}
                    onChange={e => validateNextQuantity(parseInt(e.target.value))}
                    inputProps={{style: {textAlign: "center"}}}
                    fullWidth
                />
            </Box>

            <IconButton href={null} onClick={() => validateNextQuantity(quantity + 1)}>
                <Add />
            </IconButton>
        </Box>
    );
};

export default QuantityPicker;