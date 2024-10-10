import { Add, Delete, Info } from "@mui/icons-material";
import { Box, Button, Checkbox, IconButton, TextField, Tooltip } from "@mui/material";
import React from "react";

const TrainingOneForm: React.FC<{ onDataChange: (data: any) => void }> = ({ onDataChange }) => {
    const [rows, setRows] = React.useState([
        {
            exercise: '',
            sets: 4,
            repetitions: 12,
            minReps: 8,
            maxReps: 12,
            customReps: false,
            repetitionsPerSet: [{ minReps: 8, maxReps: 12 }]
        }
    ]);

    const handleAddRow = () => {
        setRows([...rows, {
            exercise: '',
            sets: 4,
            repetitions: 12,
            minReps: 8,
            maxReps: 12,
            customReps: false,
            repetitionsPerSet: [{ minReps: 8, maxReps: 12 }]
        }]);
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

        // Initialize custom repetitions with min/max for each set when enabling custom reps
        if (checked) {
            updatedRows[index].repetitionsPerSet = Array(updatedRows[index].sets).fill({
                minReps: updatedRows[index].minReps,
                maxReps: updatedRows[index].maxReps
            });
        } else {
            updatedRows[index].repetitionsPerSet = [{
                minReps: updatedRows[index].minReps,
                maxReps: updatedRows[index].maxReps
            }];
        }

        setRows(updatedRows);
        onDataChange(updatedRows);
    };

    const handleRepetitionsPerSetChange = (rowIdx: number, setIdx: number, field: string, value: string | number) => {
        const updatedRows = [...rows];
        updatedRows[rowIdx].repetitionsPerSet[setIdx] = {
            ...updatedRows[rowIdx].repetitionsPerSet[setIdx],
            [field]: Number(value)
        };
        setRows(updatedRows);
        onDataChange(updatedRows);
    };

    return (
        <Box sx={{ mt: 2 }}>
            <Button onClick={handleAddRow} startIcon={<Add />}>Add</Button>

            {rows.map((row, index) => (
                <Box key={index} sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: !row.customReps ? 'center' : 'flex-start' }}>
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
                        {!row.customReps && (
                            <>
                                <TextField
                                    id={`training[${index}][minReps]`}
                                    name={`training[${index}][minReps]`}
                                    label="Min Reps"
                                    variant="outlined"
                                    type="number"
                                    value={row.minReps}
                                    onChange={(e) => handleInputChange(index, 'minReps', e.target.value)}
                                    sx={{ mr: 2 }}
                                    inputMode="numeric"
                                    slotProps={{
                                        htmlInput: {
                                            min: 1
                                        }
                                    }}
                                />
                                <TextField
                                    id={`training[${index}][maxReps]`}
                                    name={`training[${index}][maxReps]`}
                                    label="Max Reps"
                                    variant="outlined"
                                    type="number"
                                    value={row.maxReps}
                                    onChange={(e) => handleInputChange(index, 'maxReps', e.target.value)}
                                    sx={{ mr: 2 }}
                                    inputMode="numeric"
                                    slotProps={{
                                        htmlInput: {
                                            min: row.minReps,  // Ensure max reps is greater than or equal to min reps
                                        }
                                    }}
                                />
                            </>
                        )}

                        {row.customReps && (
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                {Array.from({ length: row.sets }).map((_, setIndex) => (
                                    <Box key={setIndex} sx={{ display: 'flex', mt: setIndex === 0 ? 0 : 2 }}>
                                        <TextField
                                            label={`Set ${setIndex + 1} Min Reps`}
                                            variant="outlined"
                                            type="number"
                                            value={row.repetitionsPerSet[setIndex]?.minReps || 8}
                                            onChange={(e) => handleRepetitionsPerSetChange(index, setIndex, 'minReps', e.target.value)}
                                            sx={{ mr: 2 }}
                                            inputMode="numeric"
                                            slotProps={{
                                                htmlInput: {
                                                    min: 1
                                                }
                                            }}
                                        />
                                        <TextField
                                            label={`Set ${setIndex + 1} Max Reps`}
                                            variant="outlined"
                                            type="number"
                                            value={row.repetitionsPerSet[setIndex]?.maxReps || 12}
                                            onChange={(e) => handleRepetitionsPerSetChange(index, setIndex, 'maxReps', e.target.value)}
                                            sx={{ mr: 2 }}
                                            inputMode="numeric"
                                            slotProps={{
                                                htmlInput: {
                                                    min: row.repetitionsPerSet[setIndex]?.minReps  // Ensure max reps >= min reps
                                                }
                                            }}
                                        />
                                    </Box>
                                ))}
                            </Box>
                        )}

                        <Checkbox
                            checked={row.customReps}
                            onChange={(e) => handleCustomRepsChange(index, e.target.checked)}
                            aria-label="Separate repetitions"
                        />
                        <Tooltip title="Click to define custom repetitions per set." arrow placement="top">
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
                </Box>
            ))}
        </Box>
    );
};

export default TrainingOneForm;
