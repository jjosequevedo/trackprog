import { Box, TextField } from "@mui/material";

const TrainingTwoForm = () => {

    return (
        <Box sx={{ mt: 2 }}>
            <TextField id="body-part" label="Body Part" variant="outlined" />
            <TextField id="sets" label="Sets" variant="outlined" />
        </Box>
    );
};

export default TrainingTwoForm;
