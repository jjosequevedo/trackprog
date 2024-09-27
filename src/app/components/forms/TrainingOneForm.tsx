import { Add, Delete, Info } from "@mui/icons-material";
import { Box, Button, Checkbox, IconButton, TextField, Tooltip } from "@mui/material";
import React from "react";

const TrainingOneForm: React.FC<{ onDataChange: (data: any) => void }> = ({ onDataChange }) => {
    const [rows, setRows] = React.useState([
        { exercise: '', sets: 4, repetitions: 12, customReps: false, repetitionsPerSet: [12, 12, 12, 12] }
    ]);

    const handleAddRow = () => {
        setRows([...rows, { exercise: '', sets: 4, repetitions: 12, customReps: false, repetitionsPerSet: [12, 12, 12, 12] }]);
    };

    const handleRemoveRow = (index: number) => {
        const updatedRows = rows.filter((_, i) => i !== index);
        setRows(updatedRows);
        onDataChange(updatedRows);
    };

    const handleInputChange = (index: number, field: string, value: string | number) => {
        const updatedRows = [...rows];
        updatedRows[index] = { ...updatedRows[index], [field]: value };
        setRows(updatedRows);
        onDataChange(updatedRows);
    };

    const handleCustomRepsChange = (index: number, checked: boolean) => {
        const updatedRows = [...rows];
        updatedRows[index].customReps = checked;

        // If enabling custom reps, initialize with the same repetition for each set
        if (checked) {
            updatedRows[index].repetitionsPerSet = Array(updatedRows[index].sets).fill(updatedRows[index].repetitions);
        } else {
            // Reset to the default single repetition field
            updatedRows[index].repetitionsPerSet = [updatedRows[index].repetitions];
        }

        setRows(updatedRows);
        onDataChange(updatedRows);
    };

    const handleRepetitionsPerSetChange = (rowIdx: number, setIdx: number, value: string | number) => {
        const updatedRows = [...rows];
        updatedRows[rowIdx].repetitionsPerSet[setIdx] = Number(value);
        setRows(updatedRows);
        onDataChange(updatedRows);
    };

    return (
        <Box sx={{ mt: 2 }}>
            <Button onClick={handleAddRow} startIcon={<Add />}>Add</Button>

            {rows.map((row, index) => (
                <Box key={index} sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
                            inputMode="numeric"
                            slotProps={{
                                htmlInput: {
                                    min: 1,
                                    max: 8
                                }
                            }}
                        />
                        {
                            !row.customReps && <TextField
                                id={`training[${index}][repetitions]`}
                                name={`training[${index}][repetitions]`}
                                label="Repetitions"
                                variant="outlined"
                                type="number"
                                value={row.repetitions}
                                onChange={(e) => handleInputChange(index, 'repetitions', e.target.value)}
                                sx={{ mr: 2 }}
                                inputMode="numeric"
                                slotProps={{
                                    htmlInput: {
                                        min: 1
                                    }
                                }}
                            />
                        }
                        <Checkbox
                            checked={row.customReps}
                            onChange={(e) => handleCustomRepsChange(index, e.target.checked)}
                            aria-label="Separate repetitions"
                        />
                        <Tooltip title="Click to define custom repetitions per set." arrow>
                            <IconButton>
                                <Info />
                            </IconButton>
                        </Tooltip>
                        <Button
                            onClick={() => handleRemoveRow(index)}
                            startIcon={<Delete />}
                            sx={{ mt: 1 }}
                        >
                            Remove
                        </Button>
                    </Box>

                    {row.customReps && (
                        <Box sx={{ ml: 4 }}>
                            {Array.from({ length: row.sets }).map((_, setIndex) => (
                                <TextField
                                    key={setIndex}
                                    label={`Set ${setIndex + 1} Repetitions`}
                                    variant="outlined"
                                    type="number"
                                    value={row.repetitionsPerSet[setIndex]}
                                    onChange={(e) => handleRepetitionsPerSetChange(index, setIndex, e.target.value)}
                                    sx={{ mr: 2, mt: 1 }}
                                    inputMode="numeric"
                                    slotProps={{
                                        htmlInput: {
                                            min: 1
                                        }
                                    }}
                                />
                            ))}
                        </Box>
                    )}
                </Box>
            ))}
        </Box>
    );
};

export default TrainingOneForm;
