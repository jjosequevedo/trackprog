import React, { useState } from "react";
import { TrainingTwoFormProps } from "@/app/interfaces";
import { Accordion, AccordionDetails, AccordionSummary, Box, TextField, Button, Link, Tooltip } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';  // Completed icon
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';  // Mark as Done icon

const TrainingTwoForm: React.FC<TrainingTwoFormProps> = ({ trainingData }) => {
    // State to track completion status for each set of each exercise
    const [completedSets, setCompletedSets] = useState<{ [key: number]: boolean[] }>({});

    // Initialize the state when component mounts based on the trainingData
    React.useEffect(() => {
        const initialCompletedSets = trainingData.reduce((acc, _, index) => {
            acc[index] = Array(trainingData[index].sets).fill(false);
            return acc;
        }, {} as { [key: number]: boolean[] });
        setCompletedSets(initialCompletedSets);
    }, [trainingData]);

    // Toggle completion status for a specific set
    const handleToggleComplete = (exerciseIndex: number, setIndex: number) => {
        setCompletedSets((prevCompletedSets) => {
            const updatedSets = [...prevCompletedSets[exerciseIndex]];
            updatedSets[setIndex] = !updatedSets[setIndex]; // Toggle completion status
            return { ...prevCompletedSets, [exerciseIndex]: updatedSets };
        });
    };

    return (
        <Box sx={{ mt: 2 }}>
            {
                trainingData.map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Accordion>
                            <AccordionSummary>{item.exercise}</AccordionSummary>
                            <AccordionDetails sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', mb: 2 }}>
                                {
                                    Array.from({ length: item.sets }, (_, key) => (
                                        <Box key={key} sx={{
                                            display: 'flex',
                                            gap: 1,
                                            my: 1,
                                            alignItems: 'center',
                                            // backgroundColor: completedSets[index]?.[key] ? 'lightgreen' : 'transparent' // Change background if completed
                                        }}>
                                            <TextField
                                                label="Planned repetitions"
                                                value={item.repetitions}
                                                variant="outlined"
                                                aria-readonly
                                                disabled
                                                sx={{ mr: 2 }}
                                            />
                                            <TextField
                                                id={`training[${index}][weight]`}
                                                name={`training[${index}][weight]`}
                                                label="Weight"
                                                variant="outlined"
                                                type="number"
                                                sx={{ mr: 2 }}
                                                inputMode="numeric"
                                                slotProps={{
                                                    htmlInput: {
                                                        min: 1
                                                    }
                                                }}
                                            />
                                            <TextField
                                                id={`training[${index}][sets]`}
                                                name={`training[${index}][sets]`}
                                                label="Repetitions"
                                                variant="outlined"
                                                type="number"
                                                sx={{ mr: 2 }}
                                                inputMode="numeric"
                                                slotProps={{
                                                    htmlInput: {
                                                        min: 1
                                                    }
                                                }}
                                            />
                                            <Tooltip placement="right" title="Done!" arrow>
                                                <Link
                                                    color={completedSets[index]?.[key] ? "success" : "primary"}
                                                    onClick={() => handleToggleComplete(index, key)}
                                                >
                                                    {
                                                        completedSets[index]?.[key]
                                                            ? <CheckCircleIcon />  // Show check icon if completed
                                                            : <RadioButtonUncheckedIcon />  // Show circle icon if not completed
                                                    }
                                                </Link>
                                            </Tooltip>
                                        </Box>
                                    ))
                                }
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                ))
            }
        </Box>
    );
};

export default TrainingTwoForm;
