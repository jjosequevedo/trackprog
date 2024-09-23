import { Add, Delete } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";
import React from "react";

const TrainingOneForm: React.FC<{ onDataChange: (data: any) => void }> = ({ onDataChange }) => {
    const [rows, setRows] = React.useState([{ exercise: '', sets: 4, repetitions: 12 }]);

    const handleAddRow = () => {
        setRows([...rows, { exercise: '', sets: 4, repetitions: 12 }]);
    };

    const handleRemoveRow = (index: number) => {
        setRows(rows.filter((_, i) => i !== index));
        onDataChange(rows.filter((_, i) => i !== index)); // Pass updated data to parent
    };

    const handleInputChange = (index: number, field: string, value: string) => {
        const updatedRows = [...rows];
        updatedRows[index] = { ...updatedRows[index], [field]: value };
        setRows(updatedRows);
        onDataChange(updatedRows); // Pass updated data to parent
    };

    return (
        <Box sx={{ mt: 2 }}>
            <Button onClick={handleAddRow} startIcon={<Add />}>Add</Button>

            {rows.map((row, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <TextField
                        id={`training[${index}][exercise]`}
                        name={`training[${index}][exercise]`}
                        label="Exercise"
                        variant="outlined"
                        value={row.exercise}
                        onChange={(e) => handleInputChange(index, 'exercise', e.target.value)}
                        sx={{ mr: 2 }}
                    />
                    <TextField
                        id={`training[${index}][sets]`}
                        name={`training[${index}][sets]`}
                        label="Sets"
                        variant="outlined"
                        type="number"
                        value={row.sets}
                        onChange={(e) => handleInputChange(index, 'sets', e.target.value)}
                        sx={{ mr: 2 }}
                    />
                    <TextField
                        id={`training[${index}][repetitions]`}
                        name={`training[${index}][repetitions]`}
                        label="Repetitions"
                        variant="outlined"
                        type="number"
                        value={row.repetitions}
                        onChange={(e) => handleInputChange(index, 'repetitions', e.target.value)}
                        sx={{ mr: 2 }}
                    />
                    <Button
                        onClick={() => handleRemoveRow(index)}
                        startIcon={<Delete />}
                        sx={{ mt: 1 }}
                    >
                        Remove
                    </Button>
                </Box>
            ))}
        </Box>
    );
};

export default TrainingOneForm;
